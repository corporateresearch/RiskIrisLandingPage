import { factsBand } from "@/content/home"
import { Container } from "@/components/ui/Container"

export function FactsBand() {
  return (
    <section aria-label="Coverage at a glance" className="border-y border-line bg-brand-soft py-12">
      <Container>
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {factsBand.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm font-medium text-body">{fact.label}</dt>
              <dd className="font-heading text-4xl font-semibold tracking-tight text-brand-strong">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
