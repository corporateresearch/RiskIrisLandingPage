"use client"

import { useEffect, useRef } from "react"
import { cn } from "./cn"

/**
 * One shared IntersectionObserver for every revealed element. Content is
 * visible by default; only elements below the fold are hidden and then
 * revealed, and nothing is hidden when reduced motion is requested or
 * JavaScript is unavailable.
 */
let observer: IntersectionObserver | null = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.reveal = "shown"
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
  }
  return observer
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (element.getBoundingClientRect().top < window.innerHeight) return

    element.dataset.reveal = "pending"
    const shared = getObserver()
    shared.observe(element)
    return () => shared.unobserve(element)
  }, [])

  return ref
}

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
