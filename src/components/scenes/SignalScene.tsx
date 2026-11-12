"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { seeded } from "./util"

const NOISE = 110
const SIGNAL = 9
const CX = 300
const CY = 200

function NoiseDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const x = 20 + seeded(index, 1) * 560
  const y = 20 + seeded(index, 2) * 360
  const angle = Math.atan2(y - CY, x - CX)
  const dx = useTransform(progress, [0, 1], [0, Math.cos(angle) * 90])
  const dy = useTransform(progress, [0, 1], [0, Math.sin(angle) * 90])
  const opacity = useTransform(progress, [0, 0.7], [0.55, 0.05])
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={2 + seeded(index, 3) * 3}
      className="fill-line-strong"
      style={{ x: dx, y: dy, opacity }}
    />
  )
}

function SignalDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const startX = 40 + seeded(index, 11) * 520
  const startY = 30 + seeded(index, 12) * 340
  const angle = (index / SIGNAL) * Math.PI * 2 - Math.PI / 2
  const endX = CX + Math.cos(angle) * 120
  const endY = CY + Math.sin(angle) * 120
  const x = useTransform(progress, [0.15, 0.85], [startX, endX])
  const y = useTransform(progress, [0.15, 0.85], [startY, endY])
  const radius = useTransform(progress, [0.15, 0.85], [3, 9])
  const line = useTransform(progress, [0.7, 1], [0, 0.6])
  return (
    <>
      <motion.line x1={CX} y1={CY} x2={x} y2={y} className="stroke-brand" strokeWidth="1.5" style={{ opacity: line }} />
      <motion.circle cx={x} cy={y} r={radius} className="fill-accent stroke-brand" strokeWidth="2" />
    </>
  )
}

/**
 * Solution scene, deliberately abstract: a field of noise thins out as the
 * section scrolls, and a handful of points gather around a person at the
 * centre. It shows the outcome, not how the product works.
 */
export function SignalScene() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "center 0.45"] })
  const spring = useSpring(scrollYProgress, { stiffness: 70, damping: 20 })
  const fixed = useTransform(spring, () => 1)
  const progress = reduced ? fixed : spring
  const ring = useTransform(progress, [0.5, 1], [0, 1])

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Animation: a crowded field of points thins out until a few remain, gathered around a person at the centre."
      className="relative mx-auto w-full max-w-2xl"
    >
      <svg viewBox="0 0 600 400" className="h-auto w-full" aria-hidden="true">
        {Array.from({ length: NOISE }, (_, index) => (
          <NoiseDot key={index} index={index} progress={progress} />
        ))}
        <motion.circle
          cx={CX}
          cy={CY}
          r="120"
          fill="none"
          className="stroke-brand"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          style={{ opacity: ring }}
        />
        {Array.from({ length: SIGNAL }, (_, index) => (
          <SignalDot key={index} index={index} progress={progress} />
        ))}
        <motion.g style={{ opacity: ring, scale: ring }}>
          <circle cx={CX} cy={CY} r="44" className="fill-brand" />
          <circle cx={CX} cy={CY - 10} r="13" className="fill-on-brand" />
          <path d={`M${CX - 24} ${CY + 28}c0-16 10-24 24-24s24 8 24 24z`} className="fill-on-brand" />
        </motion.g>
      </svg>
    </div>
  )
}
