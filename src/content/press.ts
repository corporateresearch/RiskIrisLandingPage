/**
 * Press releases. The press page renders a release only when it carries a
 * real, attributable founder quote. Ship with none; never add a placeholder.
 */
export type PressRelease = {
  slug: string
  /** ISO date, e.g. "2026-01-15". */
  date: string
  title: string
  summary: string
  body: string[]
  founderQuote: { text: string; name: string; role: string }
}

export const pressReleases: PressRelease[] = []
