import { cn } from "./cn"

export function IconTile({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand [&>svg]:h-5 [&>svg]:w-5",
        className,
      )}
    >
      {children}
    </span>
  )
}
