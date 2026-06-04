import { SearchIcon, ShieldIcon, BrainIcon, GlobeIcon, BellIcon, DocumentIcon } from "./icons"

const features = [
  {
    icon: SearchIcon,
    title: "Adverse Media Screening",
    description: "Searches 11 risk categories across 10 languages simultaneously — no more stitching together multiple tools.",
  },
  {
    icon: BrainIcon,
    title: "AI Triage",
    description: "Noise reduction so analysts review only genuine red flags. Handles the volume so your team can focus.",
  },
  {
    icon: ShieldIcon,
    title: "Grounded Risk Analysis",
    description: "Anti-hallucination AI with inline [Source N] citations. Every claim traces back to its source document.",
  },
  {
    icon: GlobeIcon,
    title: "Sanctions Matching",
    description: "Fuzzy matching against 7 major watchlists plus Interpol Red Notices catches name variants automatically.",
  },
  {
    icon: BellIcon,
    title: "Continuous Rescreening",
    description: "Refreshed lists auto-rescreen existing entities. New match? Instant alert. Disposition once, stays cleared.",
  },
  {
    icon: DocumentIcon,
    title: "Multilingual PDF Report",
    description: "One-click branded report in 10 languages including Arabic (RTL) and CJK. Drop it straight into case files.",
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need for{" "}
            <span className="text-gradient">defensible screening</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From initial search to exportable report — a single platform that replaces the patchwork.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
