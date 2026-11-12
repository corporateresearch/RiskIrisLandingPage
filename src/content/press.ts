import { counts, site } from "@/lib/site"

/**
 * Press releases. Facts only: no invented customers, figures or quotes.
 * A quote is attributed by role, never by name.
 */
export type PressRelease = {
  slug: string
  /** ISO date. */
  date: string
  dateline: string
  title: string
  summary: string
  body: string[]
  quote: { text: string; role: string }
  bodyAfterQuote: string[]
}

export const pressReleases: PressRelease[] = [
  {
    slug: "launch",
    date: "2026-11-12",
    dateline: "London",
    title: `${site.name} launches multilingual adverse media and sanctions screening built around evidence, not risk scores`,
    summary: `The platform checks companies and people for negative news and sanctions in ${counts.languages} languages, and leaves the judgement to the analyst.`,
    body: [
      `${site.name} today launched its screening platform for firms that research companies and people before doing business with them. It covers adverse media and sanctions screening in ${counts.languages} languages and across ${counts.riskCategories} risk categories.`,
      "The product is aimed at a problem familiar to anyone who has run a due diligence check. A search on a single large company can return thousands of supposedly negative articles. Most are irrelevant. A few matter. An analyst has to read through them to find out which, often against a deadline, and the tools that try to shortcut the work tend to do so with flags and scores that cannot be explained to a client or a regulator.",
      "That leaves two kinds of error. False positives cost time: harmless results sent for review. False negatives cost far more: a real risk that was never seen. Both get worse when the reporting is in a language or script the tool handles poorly, or when the same name is spelt several ways.",
      `${site.name} takes a different position. It does not produce risk scores. It searches in the language the reporting was published in, recognises spelling and transliteration variants of a name, and presents findings with a link to the source of each one. AI is used to speed up the research, and the analyst can overrule or edit anything it produces. Reports can be exported as a PDF or as an editable Word document.`,
    ],
    quote: {
      text: `Compliance teams don't need another risk score they can't explain. They need the evidence, in the language it was published in, and the time to judge it. That is what we built ${site.name} to give them.`,
      role: "Co-founder",
    },
    bodyAfterQuote: [
      "The launch comes as regulators raise expectations for third-party checks. In the United Kingdom, the failure to prevent fraud offence has been in force since September 2025, and firms are increasingly expected to document the reasoning behind their due diligence. Regulators in the Middle East have tightened their own anti-money-laundering rules over the same period. Penalties announced in 2026 for sanctions, bribery and third-party failures have ranged from hundreds of thousands of pounds to more than a billion dollars.",
      `${site.name} is built for consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams, in the United Kingdom and the Middle East.`,
      `The product is live from today. Access is granted after onboarding checks on each client. Firms can book a ${site.demo.durationMinutes}-minute demonstration on the company's website.`,
      `${site.name} is a screening tool. It is not authorised or regulated by the FCA, and all results require human review before any action.`,
    ],
  },
]
