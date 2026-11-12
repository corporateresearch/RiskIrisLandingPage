"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/Button"
import { CloseIcon, MenuIcon } from "@/components/ui/icons"
import type { NavLink } from "./navigation"

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Small-screen navigation: a modal dialog with a focus trap and Escape to close. */
export function MobileMenu({
  links,
  loginLink,
  demoHref,
}: {
  links: NavLink[]
  loginLink: NavLink | null
  demoHref: string
}) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const toggle = toggleRef.current
    if (!panel) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    panel.querySelector<HTMLElement>(FOCUSABLE)?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !panel.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    const media = window.matchMedia("(min-width: 1024px)")
    const onResize = () => {
      if (media.matches) setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    media.addEventListener("change", onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      media.removeEventListener("change", onResize)
      toggle?.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-heading"
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-5 w-5" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-canvas"
        >
          <div className="flex h-16 shrink-0 items-center justify-end border-b border-line px-5 sm:px-8">
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-heading"
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="px-5 py-6 sm:px-8">
            <ul className="divide-y divide-line">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close} className="block py-4 text-lg font-medium text-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
              {loginLink && (
                <li>
                  <a href={loginLink.href} className="block py-4 text-lg font-medium text-heading">
                    {loginLink.label}
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-8" onClick={close}>
              <Button href={demoHref} size="lg" className="w-full">
                Book a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
