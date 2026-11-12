import { monogram, site } from "@/lib/site"
import { cn } from "@/components/ui/cn"

/** Brand mark and name, built from site.ts and the colour tokens. */
export function Wordmark({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-sm font-heading text-xs font-semibold tracking-tight",
          onInk ? "bg-on-ink text-ink" : "bg-brand text-on-brand",
        )}
      >
        {monogram}
      </span>
      <span className={cn("font-heading text-lg font-semibold tracking-tight", onInk ? "text-on-ink" : "text-heading")}>
        {site.name}
      </span>
    </span>
  )
}
