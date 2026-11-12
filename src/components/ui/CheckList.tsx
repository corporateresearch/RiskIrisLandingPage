import { cn } from "./cn"
import { CheckIcon } from "./icons"

export function CheckList({
  items,
  onInk = false,
  className,
}: {
  items: readonly React.ReactNode[]
  onInk?: boolean
  className?: string
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm">
          <CheckIcon className={cn("mt-1 h-4 w-4 shrink-0", onInk ? "text-brand-on-ink" : "text-brand")} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
