import { counts, facts, sanctionsListLabels, site } from "@/lib/site"

const listSentence = `${sanctionsListLabels.slice(0, -1).join(", ")} and ${sanctionsListLabels.at(-1)}`

export const hero = {
  title: ["Screen every name.", "Defend every decision."],
  lead: `${site.name} runs adverse media and sanctions screening on any company or person, in ${counts.languages} languages and across ${counts.riskCategories} risk categories. Every finding links to its source, so your analysts can check the evidence and stand behind the conclusion.`,
  primaryCta: "Book a demo",
  secondaryCta: "See how it works",
  trustLine: `${site.demo.durationMinutes}-minute call · No commitment`,
}

export const listsStrip = {
  title: `Checks names against ${counts.sanctionsLists} official sanctions lists`,
}

export const howItWorks = {
  eyebrow: "How it works",
  title: "From a name to an evidence file in four steps",
  lead: "The platform does the searching and the organising. The judgement stays with your analyst.",
  steps: [
    {
      title: "Enter a name",
      body: "Start with the name of the company or person you are researching.",
    },
    {
      title: "Search",
      body: `The platform searches adverse media in ${counts.languages} languages across ${counts.riskCategories} risk categories, and checks the name against ${counts.sanctionsLists} official sanctions lists. Spelling and transliteration variants are included.`,
    },
    {
      title: "Read the analysis",
      body: "AI analysis arranges what was found into a summary of findings, a timeline and event details. Every finding has a link to its source.",
    },
    {
      title: "Decide and export",
      body: "Your analyst reads the evidence and makes the call. Export a report to keep with the file.",
    },
  ],
}

export const platform = {
  eyebrow: "Platform",
  title: "What the platform does",
  lead: "Two kinds of screening in one search, with the evidence laid out for review.",
  features: [
    {
      icon: "search",
      title: "Adverse media screening",
      body: `Search published media for reports about any company or person, across ${counts.riskCategories} risk categories.`,
    },
    {
      icon: "lists",
      title: "Sanctions and watchlist screening",
      body: `Check the same name against ${counts.sanctionsLists} official sanctions lists: ${listSentence}.`,
    },
    {
      icon: "globe",
      title: `${counts.languages} languages`,
      body: `${facts.languages.slice(0, -1).join(", ")} and ${facts.languages.at(-1)}.`,
    },
    {
      icon: "variants",
      title: "Name variants",
      body: "Recognises spelling and transliteration variants of a name, so one search covers the different ways it is written.",
    },
    {
      icon: "link",
      title: "AI analysis with sources",
      body: "A summary of findings, a timeline and event details, with a source link for every finding.",
    },
    {
      icon: "scale",
      title: "No black-box risk scores",
      body: "The platform finds and organises the evidence. It does not grade the subject. Your analyst makes the call.",
    },
  ],
  categoriesTitle: `The ${counts.riskCategories} risk categories`,
} as const

export const tour = {
  eyebrow: "Product tour",
  title: "What you see when you run a search",
  lead: "The four views an analyst works through, from results to report.",
  panels: [
    {
      key: "search",
      title: "Search results",
      body: "One search returns adverse media results and sanctions list checks for the name you entered, so both sit side by side for review.",
      points: [
        `Adverse media across ${counts.riskCategories} risk categories`,
        `Checks against ${counts.sanctionsLists} official sanctions lists`,
      ],
    },
    {
      key: "analysis",
      title: "AI analysis with source citations",
      body: "The analysis sets out what was found and where it came from. You can follow any finding back to the page it was published on.",
      points: facts.analysisOutputs,
    },
    {
      key: "languages",
      title: `${counts.languages} languages and name variants`,
      body: "Names are written differently from one language and one publication to the next. The platform recognises spelling and transliteration variants, so they are searched together.",
      points: [`${counts.languages} languages searched`, "Spelling and transliteration variants recognised"],
    },
    {
      key: "report",
      title: "Exported report",
      body: "When the review is done, export the findings as a report and keep it with your case file.",
      points: ["Export when your review is complete", "A record to keep with the file"],
    },
  ],
} as const

export const useCases = {
  eyebrow: "Use cases",
  title: "Built for teams that research companies and people across borders",
  lead: "The work is the same whether it is for a client or for your own organisation: find what has been reported, check the lists, and record the evidence.",
  cases: [
    {
      icon: "briefcase",
      title: "Consultancies",
      body: "Research counterparties, partners and acquisition targets as part of a client engagement, in the languages they are reported in.",
    },
    {
      icon: "document",
      title: "Due diligence providers",
      body: "Run a first pass across languages and categories before deeper research, with sources you can cite in your own report.",
    },
    {
      icon: "search",
      title: "Boutique investigation firms",
      body: "See reported events about a subject in order, and follow each one back to where it was published.",
    },
    {
      icon: "users",
      title: "In-house compliance teams",
      body: "Screen customers, suppliers and other third parties, and keep the evidence behind each decision.",
    },
  ],
} as const

export const security = {
  eyebrow: "Security and data handling",
  title: "Plain commitments about your data",
  lead: "What we do and do not do, without the jargon.",
  commitments: [
    {
      title: "No cookies or trackers on this website",
      body: "This site sets no cookies and loads no analytics, advertising or tracking scripts.",
    },
    {
      title: "Your details are used to reply to you",
      body: "When you request a demo or send a message, we use what you tell us to arrange the call and answer your question. We do not sell it or pass it on for marketing.",
    },
    {
      title: "Deleted on request",
      body: `Email ${site.email} and we will delete the details you have given us.`,
    },
    {
      title: "Every finding can be checked",
      body: "Each finding in the product links to its source, so nothing has to be taken on trust.",
    },
    {
      title: "No automated verdicts",
      body: "The product does not produce risk scores and does not decide for you. Your analyst reviews the evidence and makes the call.",
    },
    {
      title: "Clear about what we are",
      body: `${site.name} is a screening tool from a company registered in ${site.company.jurisdiction}. It is not authorised or regulated by the FCA, and results need human review before any action.`,
    },
  ],
}

export const factsBand = [
  { value: counts.sanctionsLists, label: "official sanctions lists" },
  { value: counts.riskCategories, label: "risk categories" },
  { value: counts.languages, label: "languages" },
]

export const faqTeaser = {
  eyebrow: "FAQ",
  title: "Common questions",
  linkLabel: "Read all questions",
}

export const finalCta = {
  title: "See it on a name you choose",
  lead: `Book a ${site.demo.durationMinutes}-minute demo. We will run a search live and walk through the results, the analysis and the report.`,
  cta: "Book a demo",
  trustLine: hero.trustLine,
}

export const pricingSection = {
  eyebrow: "Pricing",
  title: "Plans",
}
