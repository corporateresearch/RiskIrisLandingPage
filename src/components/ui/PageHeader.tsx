import { Container } from "./Container"

/** Page title block for every page except the home page. Holds the one h1. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  width = "default",
}: {
  eyebrow?: string
  title: string
  lead?: React.ReactNode
  width?: "default" | "narrow"
}) {
  return (
    <header className="border-b border-line bg-subtle py-12 sm:py-16">
      <Container width={width}>
        {eyebrow && <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl sm:text-4xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base text-body sm:text-lg">{lead}</p>}
      </Container>
    </header>
  )
}
