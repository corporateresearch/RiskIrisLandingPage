import { counts, formatDate, nameVariants, registeredOfficeLine, site } from "@/lib/site"

export type FaqItem = { question: string; answer: string }
export type FaqGroup = { title: string; items: FaqItem[] }

/** Answers are plain text so the same content feeds the page and the FAQPage structured data. */
export const faqGroups: FaqGroup[] = [
  {
    title: "The product",
    items: [
      {
        question: `What does ${site.name} do?`,
        answer: `${site.name} checks the companies and people you do business with for negative news and sanctions, in ${counts.languages} languages and across ${counts.riskCategories} risk categories. It is built for the research that happens before a contract is signed.`,
      },
      {
        question: "Who is it for?",
        answer:
          "Consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams that research companies and people across countries and languages.",
      },
      {
        question: "What problem does it solve?",
        answer:
          "A search on one company can return thousands of supposedly negative articles. Most are irrelevant, and the ones that matter are easy to miss. The product is built to cut the time spent on the irrelevant ones without losing the important ones.",
      },
      {
        question: "Does it handle different spellings of the same name?",
        answer: `Yes. Spelling and transliteration variants of a name are recognised. For example, ${nameVariants
          .map((entry) => entry.variants.join(" and "))
          .join(", or ")} are searched as the same name.`,
      },
      {
        question: "Can I see exactly how it works?",
        answer: `Yes, on a demo call. We show the product live on a name you choose. We do not publish the detail of how it works on this website.`,
      },
    ],
  },
  {
    title: "AI and evidence",
    items: [
      {
        question: `Does ${site.name} give a risk score?`,
        answer:
          "No, by design. A score cannot explain why it is high, medium or low, and an analyst cannot defend it. The product finds and organises the evidence, and the analyst makes the call.",
      },
      {
        question: "How do you deal with AI hallucinations?",
        answer:
          "Every finding links to the source it came from, so anything the AI says can be checked against the original. The analyst can change or remove any AI statement, and the report can be edited before it is used.",
      },
      {
        question: "Does a result mean the person or company did something wrong?",
        answer:
          "No. Results are signals for a person to review, not verdicts. A sanctions match is a possible match until it is checked. Negative news can describe an allegation that was never proven.",
      },
      {
        question: "Can I act on the results without reviewing them?",
        answer: `No. ${site.name} is a screening tool. All results require human review before any action, and the platform must not be the sole basis for a decision.`,
      },
      {
        question: "What do I get at the end?",
        answer:
          "A report of the findings with their source links, which you can export as a PDF or as an editable Word document.",
      },
    ],
  },
  {
    title: "Why now",
    items: [
      {
        question: "Why does this matter more than it used to?",
        answer:
          "Regulators in the United Kingdom and the Middle East are raising expectations for third-party checks and for documenting the reasoning behind them. Recent penalties for sanctions, bribery and third-party failures run from hundreds of thousands to more than a billion dollars. The home page lists examples with links to each regulator's announcement.",
      },
      {
        question: "Which regions do you focus on?",
        answer: "The United Kingdom and the Middle East.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        question: "How do I see the product?",
        answer: `Book a ${site.demo.durationMinutes}-minute demo. Bring a name you want to check and we will run it live.`,
      },
      {
        question: "Can I sign up straight away?",
        answer:
          "The product is live. Access is granted after onboarding checks on each client, so the first step is a demo call.",
      },
      {
        question: "What does it cost?",
        answer: "We go through pricing on the demo call, based on how many searches and users you need.",
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
        answer: `We use them to arrange your demo and for nothing else. We do not sell them. You can ask us to delete them at any time by emailing ${site.email}. The privacy policy has the full detail.`,
      },
      {
        question: "Does this website use cookies?",
        answer:
          "No. This website sets no cookies and loads no analytics or tracking scripts. It remembers your light or dark theme choice in your browser only.",
      },
    ],
  },
]
