import { cn } from "./cn"

const tones = {
  neutral: "border-line bg-canvas text-body",
  brand: "border-brand-line bg-brand-soft text-brand-strong",
  onInk: "border-white/15 bg-white/5 text-on-ink",
} as const

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode
  tone?: keyof typeof tones
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
