"use client"

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { seeded } from "./util"

type Direction = "up" | "down" | "left" | "right" | "diagonal"
type Shape = "dot" | "ring" | "square" | "cross"

const vectors: Record<Direction, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
  diagonal: [0.7, -0.7],
}

function Layer({
  progress,
  distance,
  vector,
  children,
}: {
  progress: MotionValue<number>
  distance: number
  vector: [number, number]
  children: React.ReactNode
}) {
  const x = useTransform(progress, [0, 1], [-distance * vector[0], distance * vector[0]])
  const y = useTransform(progress, [0, 1], [-distance * vector[1], distance * vector[1]])
  return (
    <motion.div style={{ x, y }} className="absolute inset-0">
      {children}
    </motion.div>
  )
}

/**
 * Decorative shapes that drift across a section as it scrolls past. Each
 * section passes its own direction and shape so the motion matches its
 * subject. Purely visual: hidden from assistive technology.
 */
export function FloatField({
  direction,
  shape,
  count = 18,
  salt = 1,
  tone = "brand",
}: {
  direction: Direction
  shape: Shape
  count?: number
  salt?: number
  tone?: "brand" | "accent" | "muted"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const vector = vectors[direction]
  const color = tone === "accent" ? "text-accent-text" : tone === "muted" ? "text-line-strong" : "text-brand"

  const items = Array.from({ length: count }, (_, index) => ({
    left: seeded(index, salt) * 100,
    top: seeded(index, salt + 7) * 100,
    size: 6 + Math.round(seeded(index, salt + 3) * 22),
    layer: index % 3,
    delay: seeded(index, salt + 5) * 6,
  }))

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${color}`}>
      {[0, 1, 2].map((layer) => (
        <Layer key={layer} progress={scrollYProgress} distance={reduced ? 0 : 60 + layer * 90} vector={vector}>
          {items
            .filter((item) => item.layer === layer)
            .map((item, index) => (
              <motion.span
                key={index}
                className="absolute block"
                style={{
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  width: item.size,
                  height: item.size,
                  opacity: 0.1 + layer * 0.08,
                }}
                animate={reduced ? undefined : { y: [0, -10, 0], rotate: shape === "dot" ? 0 : [0, 90, 0] }}
                transition={{ duration: 7 + item.delay, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              >
                {shape === "dot" && <span className="block h-full w-full rounded-full bg-current" />}
                {shape === "ring" && <span className="block h-full w-full rounded-full border-2 border-current" />}
                {shape === "square" && <span className="block h-full w-full rounded-[3px] border-2 border-current" />}
                {shape === "cross" && (
                  <svg
                    viewBox="0 0 10 10"
                    className="h-full w-full"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M2 2l6 6M8 2 2 8" />
                  </svg>
                )}
              </motion.span>
            ))}
        </Layer>
      ))}
    </div>
  )
}
