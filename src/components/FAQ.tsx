"use client"

import { useState } from "react"
import { ChevronDownIcon } from "./icons"

const faqs = [
  {
    q: "What data sources do you screen against?",
    a: "Risk Iris screens against 7 major sanctions and watchlists including OFAC, EU, UN, HMT, Interpol, and more. These lists are updated continuously to ensure you're always screening against the latest designations.",
  },
  {
    q: "How does the AI avoid hallucination?",
    a: "Our AI uses grounded generation with inline [Source N] citations. Every claim in the analysis links back to its source document. The prompt used for analysis is also inspectable, so you can verify the reasoning chain yourself. This transparency is central to our anti-hallucination approach.",
  },
  {
    q: "What languages do you support?",
    a: "11 languages: English, Arabic (with full RTL support), Chinese (CJK), French, Spanish, Russian, Portuguese, German, Turkish, Japanese, and Urdu. Reports render natively in each script.",
  },
  {
    q: "Where does my data go?",
    a: "Risk Iris runs in-process. No third-party search brokers see your queries. The only external API call is to the AI model for analysis. You can also self-host for full data residency control.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. The platform is designed to be self-hostable. Contact us through the waitlist for deployment details.",
  },
  {
    q: "Do you offer an API?",
    a: "An API is on our roadmap. Currently Risk Iris is a standalone platform. Join the waitlist to be notified when API access becomes available.",
  },
  {
    q: "Do you have audit logging?",
    a: "On the roadmap. Currently the inspectable AI prompt and source citations serve as your decision record. Full audit trails with user-level logging are planned.",
  },
  {
    q: "Are you SOC 2 or ISO 27001 certified?",
    a: "Not yet. Both SOC 2 and ISO 27001 certification are on our certification roadmap. We follow security best practices in our architecture and data handling.",
  },
  {
    q: "How often do sanctions lists refresh?",
    a: "Sanctions and watchlist feeds are monitored continuously. When a list updates, existing entities in your portfolio are automatically re-screened and you're alerted to any new matches.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm font-medium text-text-primary pr-4">{faq.q}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
