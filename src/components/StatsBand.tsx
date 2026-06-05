export default function StatsBand() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "Worldwide", label: "Official lists" },
            { value: "11", label: "Risk categories" },
            { value: "11", label: "Languages" },
            { value: "Minutes", label: "not hours" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
        { /* EDITABLE: Update stat numbers when they change */ }
      </div>
    </section>
  )
}
