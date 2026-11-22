"use client"

import { animate, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef } from "react"
import { penalties, penaltiesTotalUsd, type Penalty } from "@/content/penalties"

const largest = Math.max(...penalties.map((item) => item.usd))
const VISIBLE = 4

function monthLabel(month: string) {
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${month}-01T00:00:00Z`),
  )
}

function billions(value: number) {
  return `$${(value / 1_000_000_000).toFixed(2)} billion`
}

/** The running total, counted up once when it scrolls into view. */
export function FinesTotal({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView || reduced) return
    const controls = animate(0, penaltiesTotalUsd, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (ref.current) ref.current.textContent = billions(value)
      },
    })
    return () => controls.stop()
  }, [inView, reduced])

  return (
    <p>
      <span
        ref={ref}
        className="block font-heading text-3xl font-light leading-none tracking-tight text-heading tabular-nums sm:text-4xl"
      >
        {billions(penaltiesTotalUsd)}
      </span>
      <span className="mt-3 block text-sm text-muted">{label}</span>
    </p>
  )
}

function Row({ item }: { item: Penalty }) {
  // Square-root scale, so small cases stay visible beside the largest.
  const width = Math.max(2, Math.sqrt(item.usd / largest) * 100)
  return (
    <li className="border-b border-line">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid gap-x-8 gap-y-1 py-3.5 transition-transform duration-150 hover:-translate-y-0.5 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,2.6fr)_auto] sm:items-baseline"
      >
        <span className="font-semibold text-heading group-hover:text-brand">{item.company}</span>
        <span className="text-sm">
          {item.summary}{" "}
          <span className="whitespace-nowrap text-muted">
            {item.regulator}, {monthLabel(item.month)}
          </span>
        </span>
        <span className="font-heading text-lg font-semibold text-brand tabular-nums sm:text-right">
          {item.amount}
          <span className="sr-only"> (opens the regulator&apos;s announcement in a new tab)</span>
        </span>
        <span aria-hidden="true" className="absolute -bottom-px left-0 h-0.5 bg-brand" style={{ width: `${width}%` }} />
      </a>
    </li>
  )
}

/**
 * Regulator penalties as a ledger. The largest cases are shown; the rest
 * open on request. Each row links to the regulator's announcement, and the
 * line under a row shows the size of its penalty.
 */
export function FinesLedger({ showAllLabel }: { showAllLabel: string }) {
  const rest = penalties.slice(VISIBLE)
  return (
    <div>
      <ol className="border-t border-line">
        {penalties.slice(0, VISIBLE).map((item) => (
          <Row key={item.company} item={item} />
        ))}
      </ol>
      {rest.length > 0 && (
        <details className="group/more">
          <summary className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-heading hover:text-brand">
            {showAllLabel}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-open/more:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <ol start={VISIBLE + 1} className="border-t border-line">
            {rest.map((item) => (
              <Row key={item.company} item={item} />
            ))}
          </ol>
        </details>
      )}
    </div>
  )
}
