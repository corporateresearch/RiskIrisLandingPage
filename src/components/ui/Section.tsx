import { cn } from "./cn"
import { Container } from "./Container"

const tones = {
  canvas: "bg-canvas",
  subtle: "bg-subtle",
  ink: "on-ink bg-ink text-on-ink-muted",
} as const

export function Section({
  id,
  tone = "canvas",
  labelledBy,
  className,
  children,
}: {
  id?: string
  tone?: keyof typeof tones
  labelledBy?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  onInk = false,
}: {
  id?: string
  eyebrow?: string
  title: string
  lead?: React.ReactNode
  align?: "left" | "center"
  onInk?: boolean
}) {
  return (
    <div className={cn("mb-10 max-w-2xl sm:mb-12", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("mb-3 text-sm font-medium", onInk ? "text-brand-on-ink" : "text-brand")}>{eyebrow}</p>
      )}
      <h2 id={id} className={cn("text-2xl sm:text-3xl", onInk && "text-on-ink")}>
        {title}
      </h2>
      {lead && <p className={cn("mt-4 text-base sm:text-lg", onInk ? "text-on-ink-muted" : "text-body")}>{lead}</p>}
    </div>
  )
}
