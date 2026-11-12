"use client"

import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { proof } from "@/content/home"
import { penalties, penaltiesTotalUsd } from "@/content/penalties"

const largest = Math.max(...penalties.map((item) => item.usd))

function monthLabel(month: string) {
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${month}-01T00:00:00Z`),
  )
}

function billions(value: number) {
  return `$${(value / 1_000_000_000).toFixed(2)} billion`
}

/**
 * Proof scene: regulator penalties with a running total. Each row links to
 * the regulator's announcement. Bars use a square-root scale so the small
 * cases stay visible beside the largest.
 */
export function FinesScene() {
  const ref = useRef<HTMLDivElement>(null)
  const totalRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const reduced = useReducedMotion()
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (!inView || reduced) return
    const controls = animate(0, penaltiesTotalUsd, {
      duration: 2.6,
      ease: "easeOut",
      onUpdate: (value) => {
        if (totalRef.current) totalRef.current.textContent = billions(value)
      },
    })
    return () => controls.stop()
  }, [inView, reduced])

  return (
    <div ref={ref}>
      <p className="font-heading font-bold leading-none tracking-tight text-heading [font-size:clamp(2.75rem,9vw,5.5rem)]">
        <span ref={totalRef}>{billions(penaltiesTotalUsd)}</span>
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted">
        {proof.totalLabel} · approximate, converted to US dollars
      </p>

      <ol className="mt-10 space-y-2">
        {penalties.map((item, index) => {
          const width = Math.max(4, Math.sqrt(item.usd / largest) * 100)
          const dimmed = active !== null && active !== index
          return (
            <motion.li
              key={item.company}
              initial={reduced ? false : { opacity: 0, x: -24 }}
              animate={inView || reduced ? { opacity: dimmed ? 0.45 : 1, x: 0 } : undefined}
              transition={{ duration: 0.4, delay: reduced || active !== null ? 0 : index * 0.08 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onPointerEnter={() => setActive(index)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                className="group relative block overflow-hidden rounded-md border border-line bg-raised p-4 hover:border-brand sm:px-5"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 bg-brand-soft"
                  initial={reduced ? false : { width: 0 }}
                  animate={inView || reduced ? { width: `${width}%` } : undefined}
                  transition={{ duration: 0.9, delay: reduced ? 0 : 0.2 + index * 0.08, ease: "easeOut" }}
                />
                <span className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="font-heading text-lg font-bold text-heading">{item.company}</span>
                  <span className="font-heading text-lg font-bold text-brand">{item.amount}</span>
                </span>
                <span className="relative mt-1 block text-sm">{item.summary}</span>
                <span className="relative mt-2 flex flex-wrap items-center gap-x-3 text-xs text-muted">
                  <span>{item.regulator}</span>
                  <span aria-hidden="true">·</span>
                  <span>{monthLabel(item.month)}</span>
                  <span className="ml-auto font-semibold text-brand underline underline-offset-2">
                    Regulator&apos;s announcement
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
