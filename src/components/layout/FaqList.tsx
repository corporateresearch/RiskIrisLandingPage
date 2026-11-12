import type { FaqItem } from "@/content/faq"
import { ChevronDownIcon } from "@/components/ui/icons"

/** Accessible accordion on native details/summary: works with keyboard, screen readers and no JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-raised shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-subtle sm:px-6">
            <h3 className="font-body text-base font-semibold tracking-normal">{item.question}</h3>
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-sm sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
