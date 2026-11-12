import { pricingSection } from "@/content/home"
import { pricing, routes } from "@/lib/site"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { CheckList } from "@/components/ui/CheckList"
import { Section, SectionHeader } from "@/components/ui/Section"

/** Rendered only when SHOW_PRICING is on. All figures come from site.ts. */
export function Pricing() {
  return (
    <Section id="pricing" tone="subtle" labelledBy="pricing-title">
      <div className="mb-4">
        <Badge tone="brand">{pricing.label}</Badge>
      </div>
      <SectionHeader
        id="pricing-title"
        eyebrow={pricingSection.eyebrow}
        title={pricingSection.title}
        lead={`Extra searches are ${pricing.currency}${pricing.extraSearchPrice} each.`}
      />
      <ul className="grid gap-5 lg:grid-cols-3">
        {pricing.tiers.map((tier) => (
          <Card as="li" key={tier.name} className="flex flex-col">
            <h3 className="text-lg">{tier.name}</h3>
            <p className="mt-3 text-body">
              <span className="font-heading text-3xl font-semibold tracking-tight text-heading">
                {pricing.currency}
                {tier.price}
              </span>{" "}
              <span className="text-sm">per {pricing.period}</span>
            </p>
            <CheckList items={[tier.searches, tier.users, ...tier.extras]} className="mt-6 flex-1" />
            <div className="mt-8">
              <Button href={routes.demo} variant="secondary" className="w-full">
                Book a demo
              </Button>
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
