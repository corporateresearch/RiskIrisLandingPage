import { closing } from "@/content/home"

/** Closing headline, shown at rest. */
export function ClosingHeadline() {
  return (
    <h2 id="book-title" className="text-2xl sm:text-3xl">
      {closing.title.map((line, index) => (
        <span key={line} className={`block ${index === 1 ? "text-accent" : ""}`}>
          {line}
        </span>
      ))}
    </h2>
  )
}
