import { platform } from "@/content/home"
import { facts } from "@/lib/site"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { IconTile } from "@/components/ui/IconTile"
import { Reveal } from "@/components/ui/Reveal"
import { Section, SectionHeader } from "@/components/ui/Section"
import { iconMap } from "./iconMap"

export function Platform() {
  return (
    <Section id="platform" tone="subtle" labelledBy="platform-title">
      <SectionHeader id="platform-title" eyebrow={platform.eyebrow} title={platform.title} lead={platform.lead} />
      <Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platform.features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <Card as="li" key={feature.title}>
                <IconTile>
                  <Icon />
                </IconTile>
                <h3 className="mt-4 text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm">{feature.body}</p>
              </Card>
            )
          })}
        </ul>
      </Reveal>

      <div className="mt-12">
        <h3 className="text-lg">{platform.categoriesTitle}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {facts.riskCategories.map((category) => (
            <li key={category}>
              <Badge tone="brand">{category}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
