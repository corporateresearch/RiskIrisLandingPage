/** Shortcut to the next section. Scrolling works too; this just saves the effort. */
export function NextButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong px-6 text-sm font-semibold text-heading transition-[transform,border-color,color] duration-150 hover:-translate-y-px hover:border-brand hover:text-brand active:translate-y-px"
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1"
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
