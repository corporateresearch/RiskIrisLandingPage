import Link from "next/link"
import { cn } from "./cn"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"

const variants = {
  primary: "bg-brand text-on-brand hover:bg-brand-strong",
  accent: "bg-accent text-on-accent shadow-card hover:bg-accent-strong",
  secondary: "border border-line-strong bg-canvas text-heading hover:border-brand hover:text-brand",
  onInk: "bg-on-ink text-ink hover:bg-white",
  onInkSecondary: "border border-on-ink-muted text-on-ink hover:border-on-ink",
} as const

const sizes = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
} as const

type Common = {
  children: React.ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}

type LinkProps = Common & { href: string; external?: boolean }
type ButtonProps = Common & {
  href?: undefined
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}

/** Renders a link when given href, otherwise a button. */
export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} disabled={props.disabled} className={classes}>
      {children}
    </button>
  )
}
