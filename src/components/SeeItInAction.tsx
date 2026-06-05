"use client"

import Image from "next/image"
import { DocumentIcon, ArrowRightIcon } from "./icons"

export default function SeeItInAction() {
  return (
    <section id="see-it-in-action" className="py-24 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See it in <span className="text-gradient">action</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real output from the live platform. No mockups, no prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Search Results",
              desc: "Multi-language adverse media results with category filters",
              image: "/assets/search_results_view.png",
            },
            {
              label: "AI Analysis Panel",
              desc: "Grounded summary with [Source N] citations",
              image: "/assets/ai_analysis_panel.png",
            },
            {
              label: "David Ferrera Risk Report",
              desc: "Complete compliance profile highlighting watchlist flags and adverse media",
              image: "/assets/david_ferrera_report_monitor.png",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-violet-500/20 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-surface-900/50 relative border-b border-white/5">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={600}
                  height={337}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 mt-auto">
                <h3 className="font-semibold mb-1 text-text-primary">{item.label}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
