import { counts, facts } from "@/lib/site"
import { CheckIcon } from "@/components/ui/icons"
import { IllustrationFrame } from "./Frame"
import { Chip, Panel, SearchBar } from "./parts"
import { sample } from "./sample"

export function SearchResultsIllustration({ className }: { className?: string }) {
  return (
    <IllustrationFrame
      className={className}
      title="Search results"
      description={`search results for a sample company, listing adverse media findings by risk category, language and source, with checks against ${counts.sanctionsLists} sanctions lists.`}
    >
      <SearchBar value={sample.subject} tag={sample.subjectType} />

      <div className="flex flex-wrap gap-2">
        <Chip active>All categories</Chip>
        {sample.findings.map((finding) => (
          <Chip key={finding.category}>{finding.category}</Chip>
        ))}
      </div>

      <Panel title="Adverse media">
        <ul className="divide-y divide-white/10">
          {sample.findings.map((finding) => (
            <li key={finding.title} className="py-3 first:pt-0 last:pb-0">
              <p className="text-sm font-medium text-on-ink">{finding.title}</p>
              <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                <Chip active>{finding.category}</Chip>
                <span>{finding.language}</span>
                <span className="text-brand-on-ink underline underline-offset-2">{finding.source}</span>
                <span>{finding.date}</span>
              </p>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={`Sanctions lists checked (${counts.sanctionsLists})`}>
        <div className="flex flex-wrap gap-2">
          {facts.sanctionsLists.map((list) => (
            <Chip key={list.name}>
              <CheckIcon className="h-3 w-3" />
              {list.name}
            </Chip>
          ))}
        </div>
      </Panel>
    </IllustrationFrame>
  )
}
