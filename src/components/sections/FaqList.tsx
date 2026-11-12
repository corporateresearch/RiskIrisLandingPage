import type { FaqItem } from "@/content/faq"
import { ChevronDownIcon } from "@/components/ui/icons"

/**
 * Accessible accordion built on native details/summary: keyboard and screen
 * reader support come from the browser, and it works without JavaScript.
 */
export function FaqList({ items, headingLevel }: { items: FaqItem[]; headingLevel: "h3" }) {
  const Heading = headingLevel
  return (
    <div className="divide-y divide-line rounded-md border border-line bg-canvas shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-subtle sm:px-6">
            <Heading className="font-body text-base font-medium tracking-normal">{item.question}</Heading>
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-sm sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
