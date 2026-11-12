"use client"

import { motion, useReducedMotion } from "motion/react"
import { closing } from "@/content/home"

/** Closing headline: each word rises into place as the section comes into view. */
export function ClosingHeadline() {
  const reduced = useReducedMotion()
  let wordIndex = 0

  return (
    <h2
      id="book-title"
      className="font-heading font-bold leading-[1.02] tracking-tight [font-size:clamp(2.5rem,8vw,5.25rem)]"
    >
      {closing.title.map((line, lineIndex) => (
        <span key={line} className={`block ${lineIndex === 1 ? "text-accent" : "text-on-ink"}`}>
          {line.split(" ").map((word) => {
            const delay = wordIndex++ * 0.09
            return (
              <span key={word} className="inline-block overflow-hidden pb-[0.2em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduced ? false : { y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </h2>
  )
}

/** Slow concentric pulse behind the final call to action. */
export function ClosingPulse() {
  const reduced = useReducedMotion()
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {[0, 1, 2, 3].map((ring) => (
        <motion.span
          key={ring}
          className="absolute aspect-square w-[40rem] rounded-full border border-accent/25"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={reduced ? { scale: 0.5 + ring * 0.3, opacity: 0.25 } : { scale: [0.3, 1.8], opacity: [0.5, 0] }}
          transition={reduced ? { duration: 0 } : { duration: 9, repeat: Infinity, delay: ring * 2.25, ease: "linear" }}
        />
      ))}
    </div>
  )
}
