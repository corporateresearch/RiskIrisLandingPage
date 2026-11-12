"use client"

import { useSyncExternalStore } from "react"

type Theme = "light" | "dark"

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  return () => observer.disconnect()
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light")

/** Sliding switch between the light and dark themes. The choice is remembered. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme)
  const dark = theme === "dark"

  function toggle() {
    const next: Theme = dark ? "light" : "dark"
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem("theme", next)
    } catch {
      // Storage can be unavailable (private mode); the switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      onClick={toggle}
      className="relative inline-flex h-8 w-[3.75rem] shrink-0 items-center rounded-full border border-line-strong bg-subtle"
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-on-brand transition-transform duration-300 ${dark ? "translate-x-7" : ""}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {dark ? (
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
            </>
          )}
        </svg>
      </span>
    </button>
  )
}
