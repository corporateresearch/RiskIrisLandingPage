import { tour } from "@/content/home"
import { screenshots } from "@/lib/site"
import { AnalysisIllustration } from "@/components/illustrations/AnalysisIllustration"
import { ScreenshotFrame } from "@/components/illustrations/Frame"
import { LanguagesIllustration } from "@/components/illustrations/LanguagesIllustration"
import { ReportIllustration } from "@/components/illustrations/ReportIllustration"
import { SearchResultsIllustration } from "@/components/illustrations/SearchResultsIllustration"
import { CheckList } from "@/components/ui/CheckList"
import { cn } from "@/components/ui/cn"
import { Reveal } from "@/components/ui/Reveal"
import { Section, SectionHeader } from "@/components/ui/Section"

const illustrations = {
  search: SearchResultsIllustration,
  analysis: AnalysisIllustration,
  languages: LanguagesIllustration,
  report: ReportIllustration,
} as const

const visualSizes = "(min-width: 1024px) 560px, 100vw"

export function ProductTour() {
  return (
    <Section id="product-tour" labelledBy="product-tour-title">
      <SectionHeader id="product-tour-title" eyebrow={tour.eyebrow} title={tour.title} lead={tour.lead} />

      <div className="space-y-14 lg:space-y-20">
        {tour.panels.map((panel, index) => {
          const Illustration = illustrations[panel.key]
          const shot = screenshots.tour[panel.key]
          return (
            <Reveal key={panel.key} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <p className="text-sm font-medium text-brand">
                  {index + 1} of {tour.panels.length}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl">{panel.title}</h3>
                <p className="mt-4">{panel.body}</p>
                <CheckList items={panel.points} className="mt-6" />
              </div>
              {shot ? <ScreenshotFrame shot={shot} sizes={visualSizes} /> : <Illustration />}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-14 lg:mt-20">
        <ScreenshotFrame shot={screenshots.workspace} sizes="(min-width: 1152px) 1088px, 100vw" />
      </Reveal>
    </Section>
  )
}
