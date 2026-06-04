"use client"

import { useEffect, useRef, useState } from "react"

const categories = [
  "Bribery & Corruption",
  "Financial",
  "Legal",
  "ESG",
  "Data Privacy",
  "Human & Labour",
  "Supply Chain Security",
  "Sanctions",
  "Political",
  "Health & Safety",
  "Intellectual Property",
]

export default function RiskCategoriesCloud() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Screen across{" "}
            <span className="text-gradient">11 risk categories</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every search sweeps all categories simultaneously. No need to guess where risk might hide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {categories.map((category, i) => (
            <span
              key={category}
              className={`px-5 py-2.5 glass rounded-full text-sm text-text-secondary transition-all duration-500 hover:border-violet-500/30 hover:text-violet-300 hover:scale-105 cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
