"use client"

import { animate, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { hero } from "@/content/home"
import { seeded } from "./util"

const TILES = 84
const TARGET = 1000

/**
 * Hero scene: a search runs and results flood in until the counter passes a
 * thousand. The tiles are generic shapes, not real articles. The panel
 * tilts towards the pointer.
 */
export function HeroFlood() {
  const reduced = useReducedMotion()
  const [shown, setShown] = useState(reduced ? TILES : 0)
  const [done, setDone] = useState(Boolean(reduced))
  const [run, setRun] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 })
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 })

  useEffect(() => {
    if (reduced) {
      if (counterRef.current) counterRef.current.textContent = `${TARGET.toLocaleString("en-GB")}+`
      return
    }
    const controls = animate(0, TARGET, {
      duration: 6.5,
      delay: 1.4,
      ease: [0.5, 0, 0.9, 0.6],
      onUpdate: (value) => {
        if (counterRef.current) counterRef.current.textContent = Math.round(value).toLocaleString("en-GB")
        setShown(Math.min(TILES, Math.ceil((value / TARGET) * TILES)))
      },
      onComplete: () => {
        if (counterRef.current) counterRef.current.textContent = `${TARGET.toLocaleString("en-GB")}+`
        setDone(true)
      },
    })
    return () => controls.stop()
  }, [reduced, run])

  function replay() {
    if (reduced) return
    setShown(0)
    setDone(false)
    setRun((value) => value + 1)
  }

  return (
    <div
      className="relative [perspective:1200px]"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect()
        pointerX.set((event.clientX - box.left) / box.width - 0.5)
        pointerY.set((event.clientY - box.top) / box.height - 0.5)
      }}
      onPointerLeave={() => {
        pointerX.set(0)
        pointerY.set(0)
      }}
    >
      <motion.div
        style={reduced ? undefined : { rotateX, rotateY }}
        className="on-ink relative overflow-hidden rounded-lg border border-white/10 bg-ink p-4 shadow-raised sm:p-5"
        role="img"
        aria-label="Animation: a search runs and the number of results climbs past one thousand."
      >
        <div aria-hidden="true">
          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="truncate text-sm text-on-ink">
              {hero.query}
              <span className="blink ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-accent" />
            </span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-4">
            <p className="font-heading text-3xl font-bold leading-none tracking-tight text-accent sm:text-4xl">
              <span ref={counterRef}>0</span>
            </p>
            <p className="pb-1 text-xs font-medium uppercase tracking-widest text-on-ink-muted">{hero.counterLabel}</p>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1.5 sm:grid-cols-12">
            {Array.from({ length: TILES }, (_, index) => {
              const flagged = seeded(index, 4) > 0.82
              return (
                <motion.div
                  key={`${run}-${index}`}
                  initial={reduced ? false : { opacity: 0, scale: 0.4, y: 14 }}
                  animate={index < shown ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.4, y: 14 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`h-9 rounded-[5px] border p-1.5 ${
                    flagged ? "border-accent/60 bg-accent/15" : "border-white/10 bg-white/5"
                  }`}
                >
                  <span
                    className={`block h-1 rounded-full ${flagged ? "bg-accent" : "bg-white/30"}`}
                    style={{ width: `${45 + seeded(index, 2) * 50}%` }}
                  />
                  <span
                    className="mt-1 block h-1 rounded-full bg-white/15"
                    style={{ width: `${30 + seeded(index, 9) * 50}%` }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/95 to-transparent px-5 pb-5 pt-16 text-center"
        >
          <p className="font-heading text-2xl font-bold text-on-ink sm:text-3xl">{hero.punchline}</p>
          <p className="mt-1 text-sm text-on-ink-muted sm:text-base">{hero.punchlineSub}</p>
        </motion.div>
      </motion.div>

      {!reduced && (
        <button
          type="button"
          onClick={replay}
          className="mt-3 text-xs font-medium text-muted underline underline-offset-2 hover:text-brand"
        >
          Replay the search
        </button>
      )}
    </div>
  )
}
