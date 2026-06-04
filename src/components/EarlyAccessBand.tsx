"use client"

import { ArrowRightIcon } from "./icons"
import WaitlistForm from "./WaitlistForm"

export default function EarlyAccessBand() {
  return (
    <section id="waitlist" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center glow-violet">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Be first. <span className="text-gradient">Shape the roadmap.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
            Join the founding cohort. Get early access to Risk Iris, a direct line to the
            product team, and priority onboarding when we launch.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <WaitlistForm variant="band" />
          </div>
          <p className="text-xs text-text-muted">
            No spam. No pitch decks. Just early access.
          </p>
        </div>
      </div>
    </section>
  )
}
