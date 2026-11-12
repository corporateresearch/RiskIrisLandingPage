import { DownloadIcon } from "@/components/ui/icons"
import { IllustrationFrame } from "./Frame"
import { Cite, SourceRow } from "./parts"
import { sample } from "./sample"

function Heading({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium uppercase tracking-wide text-on-ink-muted">{children}</p>
}

export function ReportIllustration({ className }: { className?: string }) {
  return (
    <IllustrationFrame
      className={className}
      title="Exported report"
      description="an exported screening report for a sample company, with a summary, a timeline and a list of sources."
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs">Report ready</span>
        <span className="inline-flex items-center gap-2 rounded-sm bg-on-ink px-3 py-1.5 text-xs font-medium text-ink">
          <DownloadIcon className="h-3.5 w-3.5" />
          Export report
        </span>
      </div>

      <div className="mx-auto max-w-md space-y-4 rounded-sm border border-white/15 bg-white/5 p-5">
        <div className="border-b border-white/10 pb-3">
          <p className="font-heading text-base font-semibold text-on-ink">Screening report</p>
          <p className="mt-0.5 text-xs">
            {sample.subject} · {sample.subjectType}
          </p>
        </div>

        <div className="space-y-2">
          <Heading>Summary of findings</Heading>
          <p className="text-xs leading-relaxed text-on-ink">
            Three published reports were found
            <Cite n={1} />
            <Cite n={2} />
            <Cite n={3} />. Each is listed below with its source.
          </p>
        </div>

        <div className="space-y-2">
          <Heading>Timeline</Heading>
          <ul className="space-y-1.5 text-xs">
            {sample.timeline.map((item) => (
              <li key={item.date} className="flex gap-3">
                <span className="w-16 shrink-0">{item.date}</span>
                <span className="text-on-ink">{item.event}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <Heading>Sources</Heading>
          {sample.findings.map((finding, index) => (
            <SourceRow key={finding.source} n={index + 1} source={`${finding.source}/article`} />
          ))}
        </div>
      </div>
    </IllustrationFrame>
  )
}
