import { counts, facts } from "@/lib/site"
import { IllustrationFrame } from "./Frame"
import { Chip, Panel } from "./parts"

export function LanguagesIllustration({ className }: { className?: string }) {
  return (
    <IllustrationFrame
      className={className}
      title="Languages and name variants"
      description={`the ${counts.languages} languages searched, and two examples of names whose different spellings are treated as the same name.`}
    >
      <Panel title={`${counts.languages} languages`}>
        <div className="flex flex-wrap gap-2">
          {facts.languages.map((language) => (
            <Chip key={language}>{language}</Chip>
          ))}
        </div>
      </Panel>

      <Panel title="Name variants searched together">
        <ul className="space-y-3">
          {facts.nameVariants.map((entry) => (
            <li key={entry.script} className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="w-20 shrink-0 text-xs">{entry.script}</span>
              <span className="flex flex-wrap items-center gap-2">
                {entry.variants.map((variant, index) => (
                  <span key={variant} className="flex items-center gap-2">
                    {index > 0 && <span className="text-brand-on-ink">=</span>}
                    <span
                      lang={entry.lang}
                      dir="auto"
                      className="rounded-sm border border-white/15 bg-white/5 px-3 py-1 text-lg text-on-ink"
                    >
                      {variant}
                    </span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </IllustrationFrame>
  )
}
