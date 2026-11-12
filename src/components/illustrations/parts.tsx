import { cn } from "@/components/ui/cn"
import { LinkIcon, SearchIcon } from "@/components/ui/icons"

/** Building blocks shared by the coded product illustrations. */

export function Panel({
  title,
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("rounded-md border border-white/10 bg-white/5 p-4", className)}>
      {title && <p className="mb-3 text-xs font-medium uppercase tracking-wide text-on-ink-muted">{title}</p>}
      {children}
    </div>
  )
}

export function Chip({
  children,
  active = false,
  className,
}: {
  children: React.ReactNode
  active?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs",
        active ? "border-brand-on-ink text-brand-on-ink" : "border-white/15 text-on-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SearchBar({ value, tag }: { value: string; tag: string }) {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-white/5 px-3.5 py-2.5">
      <SearchIcon className="h-4 w-4 shrink-0 text-on-ink-muted" />
      <span className="min-w-0 flex-1 truncate text-sm text-on-ink">{value}</span>
      <Chip>{tag}</Chip>
    </div>
  )
}

/** Numbered citation marker, as used beside each finding. */
export function Cite({ n }: { n: number }) {
  return (
    <span className="mx-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-sm bg-brand-on-ink px-1 align-text-bottom text-xs font-medium text-ink">
      {n}
    </span>
  )
}

export function SourceRow({ n, source, className }: { n: number; source: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 text-xs", className)}>
      <Cite n={n} />
      <LinkIcon className="h-3.5 w-3.5 shrink-0 text-brand-on-ink" />
      <span className="truncate text-brand-on-ink underline underline-offset-2">{source}</span>
    </div>
  )
}
