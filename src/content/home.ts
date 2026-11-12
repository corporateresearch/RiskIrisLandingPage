import { counts, site } from "@/lib/site"

/** Home page copy: problem, solution, benefits, proof, call to action. */

export const stages = [
  { id: "hero", label: "Start" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "benefits", label: "Benefits" },
  { id: "proof", label: "Proof" },
  { id: "book", label: "Book a demo" },
] as const

export const hero = {
  title: "Before you sign a contract, know who you're signing with.",
  lead: `${site.name} checks the companies and people you do business with for negative news and sanctions, in ${counts.languages} languages.`,
  query: "Any company. Any person.",
  counterLabel: "hits to review",
  punchline: "1,000 hits to review?",
  punchlineSub: "Book a demo to see it in action.",
  next: "See the problem",
}

export const problem = {
  eyebrow: "The problem",
  title: "You cannot base decisions on uncertainty.",
  lead: "One company can return thousands of supposedly negative articles. Most are noise. A few matter. Somebody has to read them all to find out which.",
  example: {
    from: "500",
    fromLabel: "articles to read",
    to: "10",
    toLabel: "real findings",
    note: "An illustration of a typical search, not a measured statistic.",
  },
  pains: [
    { title: "Too many hits", body: "Thousands of articles on a single name, often against a deadline." },
    { title: "Flags you cannot trust", body: "False positives waste hours. False negatives are the ones that hurt." },
    { title: "Blind spots", body: "Reports published in other languages and scripts go unseen." },
    { title: "One name, many spellings", body: "The same person, written three ways, treated as three people." },
  ],
  next: "See the answer",
}

export const solution = {
  eyebrow: "The solution",
  title: "Less noise. Nothing important lost.",
  lead: "Narrow thousands of results down to what matters, and hand the routine part to automation, so an analyst's time goes on judgement.",
  points: [
    { title: "Human-centred", body: "Technology speeds up the search. A person makes the decision." },
    { title: "Evidence, not risk scores", body: "A score cannot explain itself. A sourced finding can." },
    { title: "Yours to overrule", body: "Disagree with the AI? Change it. Nothing is set in stone." },
  ],
  hint: "How it does this is something we show on a call, not on a web page.",
  next: "See what you gain",
}

export const benefits = {
  eyebrow: "The benefits",
  title: "What changes for your team",
  numbers: [
    { value: counts.languages, label: "languages" },
    { value: counts.riskCategories, label: "risk categories" },
  ],
  cards: [
    {
      icon: "clock",
      title: "Hours back",
      body: "Stop reading the same story twenty times to find the one that matters.",
    },
    {
      icon: "variants",
      title: "Name variants caught",
      body: "Different spellings of one name are searched as one name.",
    },
    {
      icon: "globe",
      title: "Research in the original language",
      body: "Built multilingual from the start, not translated afterwards.",
    },
    {
      icon: "link",
      title: "Every finding sourced",
      body: "Each finding links to where it was published. No invented citations.",
    },
    {
      icon: "scale",
      title: "The analyst in control",
      body: "No black-box verdicts. You see the evidence and you make the call.",
    },
    {
      icon: "document",
      title: "Reports you can edit",
      body: "Export to PDF or Word and change anything you disagree with.",
    },
  ],
  variantsTitle: "Same person. Different letters. Same findings.",
  next: "See what is at stake",
} as const

export const proof = {
  eyebrow: "The proof",
  title: "Third-party failures are expensive.",
  lead: "Penalties announced by regulators for sanctions, bribery and third-party failures. Each one links to the regulator's own announcement.",
  totalLabel: "in penalties across these cases",
  disclaimer: `These cases show what is at stake when a third party is not properly checked. They are not a claim that ${site.name} would have prevented them.`,
  next: "Book a demo",
}

export const closing = {
  title: ["Screen every name.", "Defend every decision."],
  lead: `A ${site.demo.durationMinutes}-minute call. Bring a name you want to check.`,
  cta: "Book a demo",
  note: "Access is granted after onboarding checks on each client.",
}
