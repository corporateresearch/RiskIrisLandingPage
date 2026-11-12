import { IllustrationFrame } from "./Frame"
import { Cite, Panel, SourceRow } from "./parts"
import { sample } from "./sample"

export function AnalysisIllustration({ className }: { className?: string }) {
  return (
    <IllustrationFrame
      className={className}
      title="AI analysis"
      description="an AI analysis of a sample company with a summary of findings, a timeline of events, and a numbered source link beside every finding."
    >
      <Panel title="Summary of findings">
        <p className="text-sm leading-relaxed text-on-ink">
          Published reports describe a regulatory inquiry into supplier contracts
          <Cite n={1} />, a contract dispute filed in court
          <Cite n={2} /> and questions raised about factory conditions
          <Cite n={3} />.
        </p>
      </Panel>

      <Panel title="Timeline">
        <ol className="relative space-y-3 border-l border-white/15 pl-4">
          {sample.timeline.map((item) => (
            <li key={item.date} className="relative">
              <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-on-ink" />
              <p className="text-xs">{item.date}</p>
              <p className="text-sm text-on-ink">
                {item.event}
                <Cite n={item.ref} />
              </p>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel title="Sources">
        <div className="space-y-2">
          {sample.findings.map((finding, index) => (
            <SourceRow key={finding.source} n={index + 1} source={`${finding.source}/article`} />
          ))}
        </div>
      </Panel>
    </IllustrationFrame>
  )
}
