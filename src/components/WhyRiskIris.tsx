import { BrainIcon, GlobeIcon, ShieldIcon, CheckIcon } from "./icons"

const pillars = [
  {
    icon: BrainIcon,
    title: "Grounded, Cited & Inspectable AI",
    description:
      "Not a black box. Risk Iris surfaces the review prompt alongside [Source N] citations so every finding is traceable and reproducible. Built to resist hallucination and prompt injection — because unsupported claims have no place in compliance.",
    details: ["Anti-hallucination architecture", "Inline source citations on every finding", "Inspectable prompt for full transparency"],
  },
  {
    icon: GlobeIcon,
    title: "11 Languages, One Platform",
    description:
      "Adverse media screening across English, Arabic (RTL), Chinese (CJK), French, Spanish, Russian, Portuguese, German, Turkish, and Urdu. Reports render natively in each script — no broken layouts, no missing characters.",
    details: ["Full RTL support for Arabic", "CJK character rendering", "Native PDF output in all 10 languages"],
  },
  {
    icon: ShieldIcon,
    title: "All Major Sanctions Lists, One Search",
    description:
      "OFAC, EU, UN, HMT, Interpol and more in a single query. No stitching together multiple tools or juggling subscriptions. Fuzzy matching catches name variants automatically.",
    details: ["7 major watchlists in one search", "Interpol Red Notice lookups", "Fuzzy matching for name variant detection"],
  },
]

export default function WhyRiskIris() {
  return (
    <section id="why-risk-iris" className="py-24 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Risk Iris</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Three pillars that set us apart from the patchwork of tools most teams rely on.
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckIcon className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="glass-card rounded-2xl overflow-hidden h-full flex items-center justify-center min-h-[300px] relative bg-surface-900/20">
                  {i === 0 && (
                    <img
                      src="/assets/AI_sources.png"
                      alt="AI transparency visual"
                      className="w-full h-auto max-h-[350px] object-contain p-4"
                    />
                  )}
                  {i === 1 && (
                    <img
                      src="/assets/language_coverage_map.png"
                      alt="Language coverage map"
                      className="w-full h-auto max-h-[400px] object-contain p-4"
                    />
                  )}
                  {i === 2 && (
                    <img
                      src="/assets/sanctions_comparison.png"
                      alt="Sanctions list comparison"
                      className="w-full h-auto max-h-[350px] object-contain p-4"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
