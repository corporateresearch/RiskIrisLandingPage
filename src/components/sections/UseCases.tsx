import { useCases } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { IconTile } from "@/components/ui/IconTile"
import { Reveal } from "@/components/ui/Reveal"
import { Section, SectionHeader } from "@/components/ui/Section"
import { iconMap } from "./iconMap"

export function UseCases() {
  return (
    <Section id="use-cases" tone="subtle" labelledBy="use-cases-title">
      <SectionHeader id="use-cases-title" eyebrow={useCases.eyebrow} title={useCases.title} lead={useCases.lead} />
      <Reveal>
        <ul className="grid gap-5 sm:grid-cols-2">
          {useCases.cases.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <Card as="li" key={item.title} className="flex gap-4">
                <IconTile>
                  <Icon />
                </IconTile>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.body}</p>
                </div>
              </Card>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
