/** Shortcut to the next section. Scrolling works too; this just saves the effort. */
export function NextButton({
  href,
  children,
  onInk = false,
}: {
  href: string
  children: React.ReactNode
  onInk?: boolean
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 rounded-full border px-5 text-sm font-semibold transition-colors ${
        onInk
          ? "border-on-ink-muted text-on-ink hover:border-accent hover:text-accent"
          : "border-line-strong text-heading hover:border-brand hover:text-brand"
      }`}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </a>
  )
}
