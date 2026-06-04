"use client"

import { useState } from "react"
import { BuildingIcon, MailIcon, MapPinIcon, ExternalLinkIcon } from "@/components/icons"

const contactInfo = [
  {
    icon: BuildingIcon,
    title: "Registered Office",
    details: [
      "14859, 182-184 High Street North",
      "London, United Kingdom",
      "E6 2JA",
    ],
  },
  {
    icon: MailIcon,
    title: "Email",
    details: [
      <span key="general">
        General inquiries:{" "}
        <a href="mailto:info@riskiris.com" className="text-violet-400 hover:text-violet-300 underline transition-colors">
          info@riskiris.com
        </a>
      </span>,
      <span key="waitlist">
        Waitlist support:{" "}
        <a href="mailto:mouataz@riskiris.com" className="text-violet-400 hover:text-violet-300 underline transition-colors">
          mouataz@riskiris.com
        </a>
      </span>,
    ],
  },
  {
    icon: MapPinIcon,
    title: "Company Details",
    details: [
      "RISK IRIS LIMITED",
      "Company number: 16747142",
      "Registered in England and Wales",
      "SIC: 74990 — Other professional, scientific and technical activities not elsewhere classified",
    ],
  },
]

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message, honeypot }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send message. Please try again.")
      } else {
        setStatus("success")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-surface-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">us</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Get in touch with the Risk Iris team. We&apos;ll respond as quickly as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((line, i) => (
                  <p key={i} className="text-sm text-text-secondary">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
          <p className="text-sm text-text-secondary mb-8">
            For general inquiries, partnership opportunities, or press enquiries.
          </p>

          {status === "success" ? (
            <div className="p-6 bg-success/10 border border-success/20 rounded-2xl text-center space-y-2">
              <h4 className="font-semibold text-success">Message Sent!</h4>
              <p className="text-sm text-text-secondary">
                Thank you for reaching out. We have received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-violet-400 hover:text-violet-300 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {status === "error" && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-sm text-error">
                  {errorMessage}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-700/50 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-500/50 transition-colors resize-y"
                  placeholder="Tell us more about your enquiry…"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 text-sm font-medium text-white gradient-violet rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 p-6 glass rounded-2xl">
          <h3 className="font-semibold mb-2">Companies House</h3>
          <p className="text-sm text-text-secondary mb-3">
            View our full company record on the UK Companies House register.
          </p>
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/16747142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            View company profile
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
