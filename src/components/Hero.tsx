"use client"

import Image from "next/image"
import { ArrowRightIcon } from "./icons"
import WaitlistForm from "./WaitlistForm"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-violet-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Pre-launch — join the founding cohort
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Screen every name.
          <br />
          <span className="text-gradient">Defend every decision.</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Risk Iris scans adverse media across 11 risk categories and 11 languages, to help you make the right business decision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-base font-medium text-white gradient-violet-glow rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Join the waitlist
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById("see-it-in-action")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-base font-medium text-text-secondary glass rounded-xl hover:border-violet-500/30 hover:text-text-primary transition-all"
          >
            See it in action
          </button>
        </div>

        <div className="max-w-md mx-auto">
          <WaitlistForm variant="hero" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="glass-card rounded-2xl p-1.5 border border-white/10 shadow-2xl shadow-violet-500/10">
          <Image
            src="/assets/screenshot.png"
            alt="Risk Iris Sanctions Intelligence Dashboard"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
