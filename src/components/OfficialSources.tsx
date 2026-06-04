export default function OfficialSources() {
  const sources = [
    { name: "OFAC", label: "Office of Foreign Assets Control" },
    { name: "EU", label: "European Union" },
    { name: "UN", label: "United Nations" },
    { name: "HMT", label: "HM Treasury" },
    { name: "Interpol", label: "International Criminal Police Organization" },
    { name: "DFAT", label: "Australian Department of Foreign Affairs" },
    { name: "DFS", label: "New York State Department of Financial Services" },
  ]

  return (
    <section className="py-12 border-y border-white/5 bg-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-text-muted uppercase tracking-widest text-center mb-6">
          Data sources screened against
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {sources.map((source) => (
            <div
              key={source.name}
              className="flex items-center gap-2 text-text-muted group"
              title={source.label}
            >
              <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                {source.name}
              </span>
              <span className="hidden sm:inline text-xs text-text-muted/60">|</span>
              <span className="hidden sm:inline text-xs text-text-muted/60">{source.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
