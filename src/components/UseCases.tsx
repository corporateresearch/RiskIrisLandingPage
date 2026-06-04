import { ChevronRightIcon } from "./icons"

export default function UseCases() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for the workflows that{" "}
            <span className="text-gradient">matter most</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From first touch to deep dive, Risk Iris adapts to how compliance teams actually work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-xs text-violet-300 mb-5">
              Primary
            </div>
            <h3 className="text-2xl font-bold mb-3">Client & Vendor Onboarding</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Screen every new entity at onboarding volume. Auto-triage lets analysts focus only
              on flagged hits while the rest pass through cleanly. KYC-aligned and built for speed.
            </p>
            <ul className="space-y-3">
              {["Volume screening with automated triage", "KYC workflow alignment", "Instant PDF reports for case files"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <ChevronRightIcon className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-xs text-violet-300 mb-5">
              Primary
            </div>
            <h3 className="text-2xl font-bold mb-3">Enhanced Due Diligence</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Deep, cited, multilingual reports for high-risk or PEP entities. The AI grounds every
              finding in source material so your EDD decisions are defensible from day one.
            </p>
            <ul className="space-y-3">
              {["Grounded AI with inline source citations", "10-language adverse media coverage", "Comprehensive PDF for regulatory review"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <ChevronRightIcon className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-text-muted">Also used for:</span>
          {["Ongoing Monitoring", "M&A Due Diligence", "Investigations"].map((item) => (
            <span key={item} className="px-4 py-1.5 glass rounded-full text-sm text-text-secondary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
