import { counts, facts, formatDate, registeredOfficeLine, sanctionsListLabels, site } from "@/lib/site"

export type FaqItem = { question: string; answer: string; featured?: boolean }
export type FaqGroup = { title: string; items: FaqItem[] }

const lists = `${sanctionsListLabels.slice(0, -1).join(", ")} and ${sanctionsListLabels.at(-1)}`
const languages = `${facts.languages.slice(0, -1).join(", ")} and ${facts.languages.at(-1)}`
const categories = `${facts.riskCategories.slice(0, -1).join(", ")} and ${facts.riskCategories.at(-1)}`
  .toLowerCase()
  .replace("esg", "ESG")

/** Answers are plain text so the same content feeds the page and the FAQPage structured data. */
export const faqGroups: FaqGroup[] = [
  {
    title: "The product",
    items: [
      {
        question: `What does ${site.name} do?`,
        answer: `${site.name} runs adverse media screening and sanctions and watchlist screening on any company or person. It searches in ${counts.languages} languages across ${counts.riskCategories} risk categories, and uses AI analysis to produce a summary of findings, a timeline and event details, with a source link for every finding.`,
        featured: true,
      },
      {
        question: "Who is it for?",
        answer:
          "Consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams that research companies and people across countries and languages.",
      },
      {
        question: "Which languages are covered?",
        answer: `${counts.languages} languages: ${languages}.`,
        featured: true,
      },
      {
        question: "Which risk categories are covered?",
        answer: `${counts.riskCategories} categories: ${categories}.`,
      },
      {
        question: "Does it handle different spellings of the same name?",
        answer: `Yes. The platform recognises spelling and transliteration variants of names. For example, ${facts.nameVariants
          .map((entry) => entry.variants.join(" and "))
          .join(", or ")} are treated as variants of the same name.`,
      },
    ],
  },
  {
    title: "Sanctions screening",
    items: [
      {
        question: "Which sanctions lists are checked?",
        answer: `The platform checks ${counts.sanctionsLists} official sanctions lists: ${lists}.`,
        featured: true,
      },
      {
        question: "Can I screen a person as well as a company?",
        answer: "Yes. Adverse media screening and sanctions screening both work on any company or person.",
      },
    ],
  },
  {
    title: "Analysis and evidence",
    items: [
      {
        question: "What does the AI analysis give me?",
        answer:
          "A summary of findings, a timeline, event details, and a source link for every finding. The analysis organises the evidence so it is quicker to review. It does not replace the review.",
      },
      {
        question: `Does ${site.name} give a risk score?`,
        answer:
          "No. There are no black-box risk scores. The platform finds and organises the evidence, and your analyst makes the call.",
        featured: true,
      },
      {
        question: "Can I check what the analysis says?",
        answer: "Yes. Every finding links to its source, so you can read the original and judge it for yourself.",
      },
      {
        question: "Can I act on the results without reviewing them?",
        answer: `No. ${site.name} is a screening tool. All results require human review before any action, and the platform must not be the sole basis for a decision.`,
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        question: "How do I see the product?",
        answer: `Book a ${site.demo.durationMinutes}-minute demo. We will run a search live and walk you through the results, the analysis and the exported report. There is no commitment.`,
        featured: true,
      },
      {
        question: "Can I sign up without a demo?",
        answer:
          "Yes. The product is working today and has self-serve sign-up. A demo is the quickest way to see whether it fits your work before you start.",
      },
      {
        question: "What does it cost?",
        answer: "We will go through pricing on the demo call, based on how many searches and users you need.",
      },
    ],
  },
  {
    title: "Company and data",
    items: [
      {
        question: `Who is behind ${site.name}?`,
        answer: `${site.legalName} is a private limited company registered in ${site.company.jurisdiction}, company number ${site.company.number}, incorporated on ${formatDate(site.company.incorporated)}. The registered office is ${registeredOfficeLine}.`,
      },
      {
        question: `Is ${site.name} regulated by the FCA?`,
        answer: `No. ${site.name} is not authorised or regulated by the FCA. It is a tool that supports your own screening work.`,
      },
      {
        question: "What happens to the details I submit on this website?",
        answer: `We use them to arrange your demo or answer your message, and for nothing else. We do not sell them. You can ask us to delete them at any time by emailing ${site.email}. The privacy policy has the full detail.`,
      },
      {
        question: "Does this website use cookies?",
        answer: "No. This website sets no cookies and loads no analytics or tracking scripts.",
      },
    ],
  },
]

export const featuredFaq = faqGroups.flatMap((group) => group.items).filter((item) => item.featured)
