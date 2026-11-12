"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"
import { seeded } from "./util"

const ROWS = 22

/**
 * Problem scene: an analyst at a desk, scrolling a list that never ends.
 * As the section scrolls past, the hit counter climbs, the paper pile
 * grows and the analyst sinks. Drawn in SVG; no real names or articles.
 */
export function AnalystScene() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.35"] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  const slump = useTransform(progress, [0, 1], [0, 16])
  const headTilt = useTransform(progress, [0, 1], [0, 22])
  const browL = useTransform(progress, [0, 1], [0, 12])
  const browR = useTransform(progress, [0, 1], [0, -12])
  const mouth = useTransform(progress, [0, 0.5, 1], ["M146 176 q8 4 16 0", "M146 178 q8 0 16 0", "M146 181 q8 -6 16 0"])
  const sweat = useTransform(progress, [0.4, 0.8], [0, 1])
  const pile = useTransform(progress, [0, 1], [0.15, 1])
  const steam = useTransform(progress, [0, 0.6], [1, 0])
  const hits = useTransform(progress, (value) => Math.round(120 + value * 880).toLocaleString("en-GB"))

  const rows = Array.from({ length: ROWS * 2 }, (_, index) => ({
    y: index * 15,
    width: 70 + seeded(index % ROWS, 3) * 90,
    flagged: seeded(index % ROWS, 6) > 0.8,
  }))

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Animation: an analyst at a desk scrolls through an endless list of results and grows more and more frustrated as the count climbs towards one thousand."
      className="relative mx-auto w-full max-w-xl"
    >
      <svg viewBox="0 0 520 400" className="h-auto w-full" aria-hidden="true">
        <defs>
          <clipPath id="screen-clip">
            <rect x="262" y="96" width="196" height="132" rx="4" />
          </clipPath>
        </defs>

        {/* Room */}
        <rect x="10" y="20" width="500" height="330" rx="20" className="fill-subtle" />
        <rect x="40" y="48" width="92" height="74" rx="6" className="fill-canvas stroke-line" strokeWidth="2" />
        <path d="M86 48v74M40 85h92" className="stroke-line" strokeWidth="2" />
        <circle cx="64" cy="68" r="7" className="fill-accent" />

        {/* Clock: the hands race as the section scrolls */}
        <circle cx="196" cy="74" r="22" className="fill-canvas stroke-line-strong" strokeWidth="2" />
        <motion.path
          d="M196 74V58"
          className="stroke-heading"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ rotate: useTransform(progress, [0, 1], [0, 1080]), originX: 0.5, originY: 1 }}
        />
        <motion.path
          d="M196 74h10"
          className="stroke-brand"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ rotate: useTransform(progress, [0, 1], [0, 90]), originX: 0, originY: 0.5 }}
        />

        {/* Desk */}
        <rect x="30" y="268" width="460" height="14" rx="4" className="fill-brand" />
        <rect x="52" y="282" width="12" height="68" className="fill-brand-strong" />
        <rect x="456" y="282" width="12" height="68" className="fill-brand-strong" />

        {/* Monitor */}
        <rect x="252" y="86" width="216" height="152" rx="10" className="fill-ink" />
        <rect x="348" y="238" width="24" height="22" className="fill-line-strong" />
        <rect x="318" y="258" width="84" height="10" rx="4" className="fill-line-strong" />
        <g clipPath="url(#screen-clip)">
          <rect x="262" y="96" width="196" height="132" fill="#101d19" />
          <motion.g
            animate={reduced ? undefined : { y: [0, -ROWS * 15] }}
            transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          >
            {rows.map((row, index) => (
              <g key={index} transform={`translate(270 ${104 + row.y})`}>
                <rect
                  width="180"
                  height="11"
                  rx="3"
                  fill={row.flagged ? "rgba(212,225,87,0.22)" : "rgba(255,255,255,0.07)"}
                />
                <rect
                  x="5"
                  y="4"
                  width={row.width}
                  height="3"
                  rx="1.5"
                  fill={row.flagged ? "#d4e157" : "rgba(255,255,255,0.4)"}
                />
              </g>
            ))}
          </motion.g>
          <rect x="452" y="96" width="4" height="132" fill="rgba(255,255,255,0.08)" />
          <motion.rect
            x="452"
            width="4"
            height="14"
            rx="2"
            fill="#d4e157"
            style={{ y: useTransform(progress, [0, 1], [98, 104]) }}
          />
        </g>

        {/* Hit counter above the monitor */}
        <g transform="translate(262 62)">
          <rect width="196" height="20" rx="10" className="fill-ink" />
          <text x="12" y="14" fontSize="10" fill="#a9b8ae" fontWeight="600" letterSpacing="1">
            HITS TO REVIEW
          </text>
          <motion.text x="184" y="14" fontSize="11" fill="#d4e157" fontWeight="700" textAnchor="end">
            {hits}
          </motion.text>
        </g>

        {/* Paper pile grows */}
        <motion.g style={{ scaleY: pile, originY: 1 }}>
          {Array.from({ length: 9 }, (_, index) => (
            <rect
              key={index}
              x={420 + (index % 2) * 4}
              y={260 - index * 7}
              width="56"
              height="6"
              rx="1.5"
              className="fill-canvas stroke-line-strong"
              strokeWidth="1"
            />
          ))}
        </motion.g>

        {/* Coffee: the steam dies out */}
        <rect
          x="216"
          y="246"
          width="20"
          height="22"
          rx="3"
          className="fill-canvas stroke-line-strong"
          strokeWidth="2"
        />
        <path d="M236 252h5a5 5 0 0 1 0 10h-5" fill="none" className="stroke-line-strong" strokeWidth="2" />
        <motion.path
          d="M222 240c-3-5 3-7 0-12M230 240c-3-5 3-7 0-12"
          fill="none"
          className="stroke-muted"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: steam }}
        />

        {/* Chair */}
        <rect x="92" y="196" width="18" height="96" rx="8" className="fill-line-strong" />
        <rect x="96" y="286" width="112" height="12" rx="6" className="fill-line-strong" />
        <rect x="146" y="298" width="8" height="40" className="fill-line-strong" />
        <path d="M118 342h64" className="stroke-line-strong" strokeWidth="8" strokeLinecap="round" />

        {/* Analyst: slumps as the count climbs */}
        <motion.g style={{ y: slump }}>
          <path d="M112 290c0-56 14-86 42-86s42 30 42 86z" className="fill-brand" />
          <path
            d="M172 232c26 2 50 14 70 30"
            fill="none"
            className="stroke-brand"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="246" cy="264" r="8" fill="#e2b99a" />
          <rect x="226" y="262" width="34" height="8" rx="4" className="fill-line-strong" />
          <path
            d="M140 236c-10 14-12 26-8 40"
            fill="none"
            className="stroke-brand-strong"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <motion.g style={{ rotate: headTilt, originX: 0.45, originY: 0.93 }}>
            <rect x="146" y="188" width="16" height="18" rx="6" fill="#d9ab8b" />
            <circle cx="154" cy="162" r="30" fill="#e2b99a" />
            <path d="M124 160c0-24 14-36 32-36s30 12 28 32c-10-12-26-16-44-12-8 2-12 8-16 16z" fill="#1b2924" />
            <circle cx="146" cy="162" r="9" fill="none" stroke="#1b2924" strokeWidth="2.5" />
            <circle cx="170" cy="162" r="9" fill="none" stroke="#1b2924" strokeWidth="2.5" />
            <path d="M155 162h6" stroke="#1b2924" strokeWidth="2.5" />
            <circle cx="148" cy="163" r="2.5" fill="#1b2924" />
            <circle cx="172" cy="163" r="2.5" fill="#1b2924" />
            <motion.path
              d="M138 149h14"
              stroke="#1b2924"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ rotate: browL }}
            />
            <motion.path
              d="M164 149h14"
              stroke="#1b2924"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ rotate: browR }}
            />
            <motion.path d={mouth} fill="none" stroke="#1b2924" strokeWidth="2.5" strokeLinecap="round" />
            <motion.path d="M186 150c4 6 4 10 0 12-4-2-4-6 0-12z" fill="#7fb8d4" style={{ opacity: sweat }} />
          </motion.g>
        </motion.g>

        {/* Floor shadow */}
        <ellipse cx="260" cy="356" rx="220" ry="8" className="fill-line" />
      </svg>
    </div>
  )
}
