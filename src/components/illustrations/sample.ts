import { facts } from "@/lib/site"

/**
 * Sample data for the coded illustrations. The subject, findings and
 * sources are invented and use the reserved ".example" domain, so nothing
 * here refers to a real company, person or publication.
 */
export const sample = {
  subject: "Sample Trading Ltd",
  subjectType: "Company",
  findings: [
    {
      title: "Regulator opens inquiry into supplier contracts",
      category: facts.riskCategories[0],
      language: facts.languages[2],
      source: "news.example",
      date: "14 Mar 2023",
    },
    {
      title: "Court filing names company in contract dispute",
      category: facts.riskCategories[2],
      language: facts.languages[1],
      source: "courts.example",
      date: "02 Nov 2023",
    },
    {
      title: "Report raises questions over factory conditions",
      category: facts.riskCategories[6],
      language: facts.languages[3],
      source: "daily.example",
      date: "19 Feb 2024",
    },
  ],
  timeline: [
    { date: "Mar 2023", event: "Inquiry into supplier contracts reported", ref: 1 },
    { date: "Nov 2023", event: "Contract dispute filed in court", ref: 2 },
    { date: "Feb 2024", event: "Report on factory conditions published", ref: 3 },
  ],
} as const
