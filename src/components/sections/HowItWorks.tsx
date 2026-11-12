import { howItWorks } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { Reveal } from "@/components/ui/Reveal"
import { Section, SectionHeader } from "@/components/ui/Section"

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-it-works-title">
      <SectionHeader
        id="how-it-works-title"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        lead={howItWorks.lead}
      />
      <Reveal>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <Card as="li" key={step.title}>
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand font-heading text-sm font-semibold text-on-brand"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm">{step.body}</p>
            </Card>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
