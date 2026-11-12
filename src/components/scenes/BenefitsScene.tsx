"use client"

import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { benefits } from "@/content/home"
import { nameVariants } from "@/lib/site"

const icons: Record<string, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  variants: <path d="M4 7h7M7.5 4v3M5 7c.5 3 2.5 5.5 5.5 7M10 7c-.5 3-2.5 5.5-6 7M13 20l3.5-9 3.5 9M14.2 17h4.6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  scale: <path d="M12 4v16M7 20h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z" />,
  document: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6" />,
}

/** Counts up to a number the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const reduced = useReducedMotion()
  const target = Number.parseInt(value, 10)

  useEffect(() => {
    if (!inView || reduced || Number.isNaN(target)) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (current) => {
        if (ref.current) ref.current.textContent = String(Math.round(current))
      },
    })
    return () => controls.stop()
  }, [inView, reduced, target])

  return <span ref={ref}>{value}</span>
}

/** A card that tilts towards the pointer. */
function TiltCard({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(y, { stiffness: 200, damping: 18 })
  const rotateY = useSpring(x, { stiffness: 200, damping: 18 })

  return (
    <motion.li
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect()
        x.set(((event.clientX - box.left) / box.width - 0.5) * 12)
        y.set(((event.clientY - box.top) / box.height - 0.5) * -12)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-lg border border-line bg-raised p-6 shadow-card transition-colors hover:border-brand"
    >
      {children}
    </motion.li>
  )
}

/** Cycles through the spellings of one name to show they are treated as the same. */
function VariantCycler() {
  const reduced = useReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => setTick((value) => value + 1), 1800)
    return () => clearInterval(timer)
  }, [reduced])

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {nameVariants.map((entry) => {
        const current = entry.variants[tick % entry.variants.length]
        return (
          <div key={entry.script} className="rounded-lg border border-line bg-raised p-6 text-center shadow-card">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{entry.script}</p>
            <div className="relative mt-3 h-16" aria-hidden="true">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={current}
                  lang={entry.lang}
                  dir="auto"
                  initial={reduced ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-brand"
                >
                  {current}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="sr-only" lang={entry.lang}>
              {entry.variants.join(" , ")}
            </p>
            <p className="mt-3 text-sm">{entry.note}</p>
          </div>
        )
      })}
    </div>
  )
}

export function BenefitsScene() {
  return (
    <div className="space-y-12">
      <dl className="grid grid-cols-2 gap-4 sm:gap-6">
        {benefits.numbers.map((item) => (
          <div key={item.label} className="flex flex-col-reverse rounded-lg bg-pine p-6 text-center sm:p-10">
            <dt className="mt-1 text-sm font-semibold uppercase tracking-widest text-on-pine">{item.label}</dt>
            <dd className="font-heading text-4xl font-bold leading-none text-accent [font-size:clamp(3.75rem,12vw,7rem)]">
              <CountUp value={item.value} />
            </dd>
          </div>
        ))}
      </dl>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.cards.map((card) => (
          <TiltCard key={card.title}>
            <span
              aria-hidden="true"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition-transform group-hover:scale-110 group-hover:rotate-6"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[card.icon]}
              </svg>
            </span>
            <h3 className="mt-4 text-lg">{card.title}</h3>
            <p className="mt-2 text-sm">{card.body}</p>
          </TiltCard>
        ))}
      </ul>

      <div>
        <h3 className="mb-5 text-xl">{benefits.variantsTitle}</h3>
        <VariantCycler />
      </div>
    </div>
  )
}
