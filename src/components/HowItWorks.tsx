"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Enter an entity",
    description: "Name, jurisdiction, and optional category. That's all you need to start.",
  },
  {
    number: "02",
    title: "Search & auto-flag",
    description: "Platform scans sanctions lists and adverse media across 11 categories and 10 languages. Fuzzy matching catches name variants.",
  },
  {
    number: "03",
    title: "AI analysis",
    description: "Grounded triage flags genuine red acts, surfaces [Source N] citations, and shows transparent reasoning.",
  },
  {
    number: "04",
    title: "Export",
    description: "One-click multilingual PDF report. Drops straight into case files, vendor records, and audit folders.",
  },
]

export default function HowItWorks() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Four steps from entity to defensible report.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <span className="text-4xl font-bold text-violet-600/40">{step.number}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-violet-500/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
