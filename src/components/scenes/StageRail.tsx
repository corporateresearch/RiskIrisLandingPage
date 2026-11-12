"use client"

import { useEffect, useState } from "react"
import { stages } from "@/content/home"

/** Progress rail at the side of the home page: shows which stage is on screen and jumps between them. */
export function StageRail() {
  const [active, setActive] = useState<string>(stages[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    for (const stage of stages) {
      const element = document.getElementById(stage.id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Page sections" className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
      <ol className="space-y-3">
        {stages.map((stage, index) => {
          const current = stage.id === active
          return (
            <li key={stage.id}>
              <a
                href={`#${stage.id}`}
                aria-current={current ? "step" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={`text-xs font-semibold transition-opacity ${
                    current
                      ? "text-heading opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {String(index).padStart(2, "0")} {stage.label}
                </span>
                <span
                  className={`block h-3 rounded-full transition-all ${current ? "w-8 bg-brand" : "w-3 bg-line-strong group-hover:bg-brand"}`}
                />
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
