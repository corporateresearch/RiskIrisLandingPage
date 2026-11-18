import { site } from "@/lib/site"
import { cn } from "@/components/ui/cn"

/** Brand shield & iris emblem */
export function BrandEmblem({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8 shrink-0 transition-transform group-hover:scale-105", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`shieldGrad-${onInk ? "ink" : "norm"}`} x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={onInk ? "#dfeee7" : "#0f5c4a"} />
          <stop offset="100%" stopColor={onInk ? "#6fd3b0" : "#0a4436"} />
        </linearGradient>
      </defs>

      {/* Rounded container */}
      <rect
        width="32"
        height="32"
        rx="8"
        className={onInk ? "fill-on-ink" : "fill-brand"}
      />

      {/* Shield outline */}
      <path
        d="M16 5.5L7.5 9.5V15.5C7.5 21.5 11.2 25.8 16 27C20.8 25.8 24.5 21.5 24.5 15.5V9.5L16 5.5Z"
        className={onInk ? "stroke-ink/30 fill-ink/10" : "stroke-white/30 fill-white/10"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Iris contour */}
      <path
        d="M9.5 16C11.5 12 13.8 10 16 10C18.2 10 20.5 12 22.5 16C20.5 20 18.2 22 16 22C13.8 22 11.5 20 9.5 16Z"
        className={onInk ? "stroke-accent-text" : "stroke-accent"}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Aperture scanner ring */}
      <circle
        cx="16"
        cy="16"
        r="3.8"
        className={onInk ? "stroke-accent-text" : "stroke-accent"}
        strokeWidth="1"
        strokeDasharray="2 1.5"
      />

      {/* Center pupil */}
      <circle
        cx="16"
        cy="16"
        r="1.8"
        className={onInk ? "fill-ink" : "fill-on-brand"}
      />
    </svg>
  )
}

/** Brand mark and name, built from site.ts and the colour tokens. */
export function Wordmark({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandEmblem onInk={onInk} />
      <span className={cn("font-heading text-lg font-bold tracking-tight", onInk ? "text-on-ink" : "text-heading")}>
        {site.name}
      </span>
    </span>
  )
}
