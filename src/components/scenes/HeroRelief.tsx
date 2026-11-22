"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { seeded } from "./util"

const COLS = 56
const TARGET = 1000
const INTRO_SECONDS = 6.5

type Props = {
  /** Height-map image: brighter pixels stand taller; pure red pixels are highlights. */
  src: string
  playing: boolean
  /** Increment to replay the intro. */
  run: number
  onCount: (count: number, done: boolean) => void
  onReady: () => void
  onFail: () => void
}

type Cell = { x: number; y: number; height: number; delay: number; phase: number; flagged: boolean }

function cssColor(element: Element, name: string, fallback: string) {
  const value = getComputedStyle(element).getPropertyValue(name).trim()
  return new THREE.Color(value || fallback)
}

/** Samples the image on a grid and returns one cell per visible pixel. */
function sample(image: HTMLImageElement): Cell[] {
  const canvas = document.createElement("canvas")
  canvas.width = COLS
  canvas.height = COLS
  const context = canvas.getContext("2d", { willReadFrequently: true })
  if (!context) return []
  context.drawImage(image, 0, 0, COLS, COLS)
  const { data } = context.getImageData(0, 0, COLS, COLS)

  const cells: Cell[] = []
  const half = COLS / 2
  for (let row = 0; row < COLS; row++) {
    for (let col = 0; col < COLS; col++) {
      const offset = (row * COLS + col) * 4
      const red = data[offset]
      const green = data[offset + 1]
      const blue = data[offset + 2]
      const flagged = red > 170 && green < 90
      const brightness = flagged ? 0.8 : (red + green + blue) / 765
      if (brightness < 0.1) continue
      const index = cells.length
      const x = col - half + 0.5
      const y = half - row - 0.5
      const distance = Math.hypot(x, y) / (half * Math.SQRT2)
      cells.push({
        x,
        y,
        height: 0.5 + brightness * 6 + seeded(index, 3) * 1.4,
        delay: 0.85 * (0.55 * seeded(index, 7) + 0.45 * distance),
        phase: seeded(index, 11) * Math.PI * 2,
        flagged,
      })
    }
  }
  return cells
}

/**
 * Hero scene. Turns a 2D image into a field of 3D blocks: one block per
 * sampled pixel, its height taken from the pixel's brightness. The blocks
 * rise as the counter climbs, so the figure assembles out of the results.
 * Colours come from the page's CSS tokens, so a palette change carries over.
 */
export default function HeroRelief({ src, playing, run, onCount, onReady, onFail }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playingRef = useRef(playing)
  const callbacks = useRef({ onCount, onReady, onFail })

  useEffect(() => {
    playingRef.current = playing
    callbacks.current = { onCount, onReady, onFail }
  })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" })
    } catch {
      callbacks.current.onFail()
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.className = "block h-full w-full"
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 400)
    const group = new THREE.Group()
    group.rotation.x = -0.62
    scene.add(group)

    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const key = new THREE.DirectionalLight(0xffffff, 2.6)
    key.position.set(-40, 30, 45)
    scene.add(key)
    const rim = new THREE.DirectionalLight(cssColor(container, "--color-accent", "#d4e157"), 0.9)
    rim.position.set(40, -20, 20)
    scene.add(rim)

    const geometry = new THREE.BoxGeometry(0.84, 0.84, 1)
    geometry.translate(0, 0, 0.5)
    const material = new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.05 })

    let mesh: THREE.InstancedMesh | null = null
    let cells: Cell[] = []
    let frame = 0
    let visible = true
    let disposed = false
    let start = 0
    let pausedAt = 0
    let pausedTotal = 0
    const pointer = { x: 0, y: 0 }
    const dummy = new THREE.Object3D()

    function resize() {
      const { clientWidth: width, clientHeight: height } = container!
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      const fit = (COLS * 0.6) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
      camera.position.set(0, 0, fit / Math.min(1, camera.aspect))
      camera.lookAt(0, 2.5, 0)
      camera.updateProjectionMatrix()
    }

    function draw(seconds: number) {
      if (!mesh) return
      const progress = reduced ? 1 : Math.min(1, Math.max(0, (seconds - 0.5) / INTRO_SECONDS))
      const eased = progress * progress * (3 - 2 * progress)
      for (let index = 0; index < cells.length; index++) {
        const cell = cells[index]
        const local = Math.min(1, Math.max(0, (eased * 1.12 - cell.delay) / 0.12))
        if (local === 0) {
          dummy.scale.set(0, 0, 0)
        } else {
          const rise = 1 - Math.pow(1 - local, 3)
          const wave = reduced ? 0 : Math.sin(seconds * 0.9 + cell.phase) * 0.3
          const pulse = cell.flagged && !reduced ? 1.2 + Math.sin(seconds * 2.2 + cell.phase) * 0.8 : 0
          dummy.scale.set(1, 1, Math.max(0.05, (cell.height + wave + pulse) * rise))
        }
        dummy.position.set(cell.x, cell.y, 0)
        dummy.updateMatrix()
        mesh.setMatrixAt(index, dummy.matrix)
      }
      mesh.instanceMatrix.needsUpdate = true

      group.rotation.z += (pointer.x * 0.28 - group.rotation.z) * 0.06
      group.rotation.x += (-0.62 + pointer.y * 0.16 - group.rotation.x) * 0.06
      renderer.render(scene, camera)
      callbacks.current.onCount(Math.round(eased * TARGET), progress >= 1)
    }

    function loop(now: number) {
      if (disposed) return
      frame = requestAnimationFrame(loop)
      if (!visible) return
      if (!playingRef.current) {
        if (!pausedAt) pausedAt = now
        return
      }
      if (pausedAt) {
        pausedTotal += now - pausedAt
        pausedAt = 0
      }
      if (!start) start = now
      draw((now - start - pausedTotal) / 1000)
    }

    const image = new Image()
    image.onload = () => {
      if (disposed) return
      cells = sample(image)
      if (cells.length === 0) {
        callbacks.current.onFail()
        return
      }
      mesh = new THREE.InstancedMesh(geometry, material, cells.length)
      const low = cssColor(container, "--color-brand-soft", "#14302a")
      const high = cssColor(container, "--color-brand", "#6fd3b0")
      const accent = cssColor(container, "--color-accent", "#d4e157")
      const color = new THREE.Color()
      cells.forEach((cell, index) => {
        if (cell.flagged) color.copy(accent)
        else color.copy(low).lerp(high, Math.min(1, Math.pow(cell.height / 7.5, 1.6)))
        mesh!.setColorAt(index, color)
      })
      group.add(mesh)
      resize()
      callbacks.current.onReady()
      if (reduced) draw(INTRO_SECONDS + 1)
      else frame = requestAnimationFrame(loop)
    }
    image.onerror = () => callbacks.current.onFail()
    image.src = src

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    viewObserver.observe(container)

    function onPointerMove(event: PointerEvent) {
      if (reduced) return
      const box = container!.getBoundingClientRect()
      pointer.x = (event.clientX - box.left) / box.width - 0.5
      pointer.y = (event.clientY - box.top) / box.height - 0.5
    }
    function onPointerLeave() {
      pointer.x = 0
      pointer.y = 0
    }
    container.addEventListener("pointermove", onPointerMove)
    container.addEventListener("pointerleave", onPointerLeave)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      viewObserver.disconnect()
      container.removeEventListener("pointermove", onPointerMove)
      container.removeEventListener("pointerleave", onPointerLeave)
      mesh?.dispose()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [src, run])

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />
}
