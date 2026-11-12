import Image from "next/image"
import type { Screenshot } from "@/lib/site"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/components/ui/cn"

/**
 * Dark frame used for every product visual. Coded illustrations are
 * labelled "Illustration"; real captures are labelled "Product screenshot".
 */
function FrameShell({
  label,
  title,
  children,
  className,
}: {
  label: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure className={cn("on-ink overflow-hidden rounded-lg bg-ink shadow-raised", className)}>
      <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <span className="truncate text-xs text-on-ink-muted">{title}</span>
        <Badge tone="onInk" className="shrink-0">
          {label}
        </Badge>
      </figcaption>
      {children}
    </figure>
  )
}

export function IllustrationFrame({
  title,
  description,
  children,
  className,
}: {
  title: string
  /** Read by assistive technology in place of the decorative contents. */
  description: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <FrameShell label="Illustration" title={title} className={className}>
      <div role="img" aria-label={`Illustration: ${description}`}>
        <div aria-hidden="true" className="space-y-3 p-4 text-sm text-on-ink-muted sm:p-5">
          {children}
        </div>
      </div>
    </FrameShell>
  )
}

export function ScreenshotFrame({
  shot,
  sizes,
  priority = false,
  className,
}: {
  shot: Screenshot
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <FrameShell label="Product screenshot" title={shot.caption} className={className}>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </FrameShell>
  )
}
