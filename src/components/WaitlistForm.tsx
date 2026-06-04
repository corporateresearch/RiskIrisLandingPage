"use client"

import { useState, FormEvent } from "react"

interface WaitlistFormProps {
  variant?: "hero" | "band" | "final"
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus("success")
        setMessage("You're on the list. We'll be in touch.")
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or email us directly.")
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-xl p-4 text-center">
        <p className="text-sm text-success">✓ You&apos;re on the list. We&apos;ll be in touch.</p>
      </div>
    )
  }

  const isBand = variant === "band" || variant === "final"

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex ${isBand ? "flex-col sm:flex-row" : "flex-col"} gap-3`}>
        <input
          type="text"
          name="name"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors ${isBand ? "sm:flex-1" : ""}`}
          aria-label="Your name"
        />
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors ${isBand ? "sm:flex-1" : ""}`}
          aria-label="Email address"
        />
        { /* Honeypot — hidden from users, visible to bots */}
        <input
          type="text"
          name="website"
          className="absolute -left-[9999px]"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 text-sm font-medium text-white gradient-violet rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting…
            </span>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-error mt-2">{message}</p>
      )}
      <p className="text-xs text-text-muted mt-2">No spam. Unsubscribe anytime.</p>
    </form>
  )
}
