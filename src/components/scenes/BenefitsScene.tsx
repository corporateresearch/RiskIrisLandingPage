"use client"

import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { benefits } from "@/content/home"
import { nameVariants } from "@/lib/site"

/** Counts up to a number the first time it scrolls into view. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const reduced = useReducedMotion()
  const target = Number.parseInt(value, 10)

  useEffect(() => {
    if (!inView || reduced || Number.isNaN(target)) return
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (current) => {
        if (ref.current) ref.current.textContent = String(Math.round(current))
      },
    })
    return () => controls.stop()
  }, [inView, reduced, target])

  return <span ref={ref}>{value}</span>
}

/** The two public figures, set as large light numerals. */
export function BenefitNumbers() {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-8">
      {benefits.numbers.map((item) => (
        <div key={item.label} className="flex flex-col-reverse">
          <dt className="mt-2 text-sm font-semibold text-muted">{item.label}</dt>
          <dd className="font-heading text-3xl font-light leading-none tracking-tight text-brand tabular-nums sm:text-4xl">
            <CountUp value={item.value} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Cycles through the spellings of one name to show they are treated as the same. */
export function VariantCycler() {
  const reduced = useReducedMotion()
  const [tick, setTick] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduced || paused) return
    const timer = setInterval(() => setTick((value) => value + 1), 2600)
    return () => clearInterval(timer)
  }, [reduced, paused])

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {nameVariants.map((entry) => {
          const current = entry.variants[tick % entry.variants.length]
          return (
            <div key={entry.script}>
              <div className="relative h-16 overflow-hidden" aria-hidden="true">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current}
                    lang={entry.lang}
                    initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center text-3xl font-medium text-brand"
                  >
                    <bdi>{current}</bdi>
                  </motion.span>
                </AnimatePresence>
              </div>
              <p className="sr-only" lang={entry.lang}>
                {entry.variants.join(" , ")}
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-heading">{entry.script}.</span> {entry.note}
              </p>
            </div>
          )
        })}
      </div>
      {!reduced && (
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="mt-2 inline-flex min-h-11 items-center text-xs font-medium text-muted underline underline-offset-4 hover:text-brand"
        >
          {paused ? "Play the name changes" : "Pause the name changes"}
        </button>
      )}
    </div>
  )
}
