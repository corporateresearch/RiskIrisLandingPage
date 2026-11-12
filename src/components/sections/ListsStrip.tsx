import { listsStrip } from "@/content/home"
import { sanctionsListLabels } from "@/lib/site"
import { Badge } from "@/components/ui/Badge"
import { Container } from "@/components/ui/Container"

export function ListsStrip() {
  return (
    <section aria-labelledby="lists-title" className="border-b border-line py-8">
      <Container className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        <h2 id="lists-title" className="shrink-0 font-body text-sm font-medium tracking-normal text-muted">
          {listsStrip.title}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {sanctionsListLabels.map((label) => (
            <li key={label}>
              <Badge>{label}</Badge>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
