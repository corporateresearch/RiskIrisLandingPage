import { CheckIcon } from "./icons"

export default function MatchAccuracy() {
  return (
    <section className="py-24 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Match threshold</span>
                  <span className="text-sm text-text-primary font-medium">85%</span>
                </div>
                <div className="h-2 bg-surface-600 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] gradient-violet rounded-full" />
                </div>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>Loose</span>
                  <span>Strict</span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {[
                    { label: "Exact", pct: "12", color: "text-success" },
                    { label: "Fuzzy", pct: "34", color: "text-warning" },
                    { label: "No match", pct: "54", color: "text-text-muted" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className={`text-2xl font-bold ${item.color}`}>{item.pct}%</div>
                      <div className="text-xs text-text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fewer false positives.{" "}
              <span className="text-gradient">Faster triage.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Alert fatigue is the #1 operational pain in sanctions screening. Risk Iris gives
              you fine-grained control over match sensitivity so your team stops chasing ghosts.
            </p>
            <div className="space-y-4">
              {[
                "Adjustable fuzzy-match thresholds per list",
                "Scoring on every match — see confidence at a glance",
                "Whitelist and disposition — mark a false positive once, it stays resolved across every rescreen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
