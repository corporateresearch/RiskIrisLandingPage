"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { MenuIcon, CloseIcon } from "./icons"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false)
  }, [])

  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Risk Iris home">
            <span className="text-lg font-semibold text-text-primary">
              Risk <span className="text-gradient">Iris</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToWaitlist}
              className="px-5 py-2 text-sm font-medium text-white gradient-violet rounded-lg hover:opacity-90 transition-opacity"
            >
              Join the waitlist
            </button>
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-surface-900/95 backdrop-blur-xl md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex flex-col items-center gap-6 pt-12 px-4"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); scrollToWaitlist() }}
              className="px-8 py-3 text-base font-medium text-white gradient-violet rounded-lg hover:opacity-90 transition-opacity mt-4"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
