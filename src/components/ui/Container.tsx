import { cn } from "./cn"

const widths = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
} as const

export function Container({
  children,
  width = "default",
  className,
}: {
  children: React.ReactNode
  width?: keyof typeof widths
  className?: string
}) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8", widths[width], className)}>{children}</div>
}
