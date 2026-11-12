import { cn } from "./cn"

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "li" | "article"
}) {
  return <Tag className={cn("rounded-md border border-line bg-canvas p-6 shadow-card", className)}>{children}</Tag>
}
