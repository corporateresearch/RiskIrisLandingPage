import { counts } from "@/lib/site"
import { IllustrationFrame } from "./Frame"
import { Chip, Cite, Panel, SearchBar, SourceRow } from "./parts"
import { sample } from "./sample"

/** Overview used beside the hero: a search, the findings and their sources in one view. */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <IllustrationFrame
      className={className}
      title="Screening overview"
      description={`a search for a sample company, showing a summary of findings with numbered source links, searched in ${counts.languages} languages and checked against ${counts.sanctionsLists} sanctions lists.`}
    >
      <SearchBar value={sample.subject} tag={sample.subjectType} />

      <div className="flex flex-wrap gap-2">
        <Chip active>{counts.languages} languages</Chip>
        <Chip active>{counts.riskCategories} risk categories</Chip>
        <Chip active>{counts.sanctionsLists} sanctions lists</Chip>
      </div>

      <Panel title="Summary of findings">
        <ul className="space-y-2.5">
          {sample.findings.map((finding, index) => (
            <li key={finding.title} className="text-sm text-on-ink">
              {finding.title}
              <Cite n={index + 1} />
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Sources">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {sample.findings.map((finding, index) => (
            <SourceRow key={finding.source} n={index + 1} source={finding.source} />
          ))}
        </div>
      </Panel>
    </IllustrationFrame>
  )
}
