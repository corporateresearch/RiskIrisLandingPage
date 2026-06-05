import { ShieldIcon } from "./icons"

export default function SecurityDataHandling() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your data,{" "}
              <span className="text-gradient">your control</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Risk Iris runs in-process. No third-party search brokers see your queries beyond
              the AI model call. Your screening data stays within your environment.
            </p>
            <div className="space-y-5">
              {[
                "In-process architecture — no data shared with intermediaries",
                "Self-hostable deployment for full data residency control",
                "UK-based data handling",
                "Only the AI model API call leaves your environment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldIcon className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted mt-8 italic border-t border-white/5 pt-4">
              SOC 2 and ISO 27001 certification are on our roadmap.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <h3 className="text-lg font-semibold mb-6">Data Flow</h3>
            <div className="space-y-4">
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-violet-400">1</span>
                </div>
                <div>
                  <span className="text-sm font-medium">You enter an entity</span>
                  <p className="text-xs text-text-muted">Name, jurisdiction, category</p>
                </div>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-violet-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-violet-400">2</span>
                </div>
                <div>
                  <span className="text-sm font-medium">In-process search</span>
                  <p className="text-xs text-text-muted">In-house search engine — no third-party brokers</p>
                </div>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-violet-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-violet-400">3</span>
                </div>
                <div>
                  <span className="text-sm font-medium">AI analysis (API call)</span>
                  <p className="text-xs text-text-muted">Only this step leaves your environment</p>
                </div>
              </div>
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-violet-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3 border-violet-500/20">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-violet-400">4</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-violet-300">Results delivered to you</span>
                  <p className="text-xs text-text-muted">Grounded report with citations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
