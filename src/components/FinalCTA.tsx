"use client"

import { ArrowRightIcon } from "./icons"
import WaitlistForm from "./WaitlistForm"

export default function FinalCTA() {
  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Ready to cut the noise?
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Join the waitlist for early access to Risk Iris.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="final" />
        </div>
      </div>
    </section>
  )
}
