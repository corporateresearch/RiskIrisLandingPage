import { counts, registeredOfficeLine, site } from "@/lib/site"

/** A block is a paragraph (string) or a bullet list. */
export type LegalBlock = string | { list: string[] }
export type LegalSection = { title: string; blocks: LegalBlock[] }
export type LegalDocument = {
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const contactBlock = `${site.legalName}, ${registeredOfficeLine}. Email: ${site.email}. Phone: ${site.phone.display}.`

export const privacy: LegalDocument = {
  title: "Privacy policy",
  description: `How ${site.legalName} collects, uses, keeps and deletes personal data, including demo requests and correspondence.`,
  updated: "2026-11-12",
  intro: `This policy explains what personal data ${site.legalName} ("${site.name}", "we", "us") collects, why, how long we keep it and what rights you have. We are the data controller.`,
  sections: [
    {
      title: "Who we are",
      blocks: [
        `${site.legalName} is a private limited company registered in ${site.company.jurisdiction} with company number ${site.company.number}. Our registered office is ${registeredOfficeLine}. You can reach us at ${site.email}.`,
      ],
    },
    {
      title: "Data we collect through this website",
      blocks: [
        {
          list: [
            "Demo requests: your name, work email address, company, role, team size and any note you add.",
            "Emails and calls: anything you send to us by email, your phone number if you call us, and our replies.",
            "Technical data: when a form is submitted, the sender's IP address is held briefly in memory to limit automated abuse. It is not stored with your request. Our hosting provider keeps standard server logs.",
          ],
        },
        "This website sets no cookies and loads no analytics, advertising or tracking scripts. Your choice of light or dark theme is saved in your own browser and is not sent to us.",
        "When you choose a time for a demo you leave this website for a booking page run by a third-party calendar provider. That provider handles the details you enter there under its own privacy policy.",
      ],
    },
    {
      title: "Data we process when you use the product",
      blocks: [
        "If you create an account, we process your account details, such as your name, business email address, company and billing details, in order to provide the service.",
        `The names you search for and the results returned are processed to provide the screening you asked for. Results are compiled from official public sanctions lists and from published media. You are responsible for having a lawful reason to screen the people and companies you search for.`,
      ],
    },
    {
      title: "Why we use your data and our lawful bases",
      blocks: [
        {
          list: [
            "To arrange and follow up a demo you asked for, to answer your messages, and to carry out onboarding checks before granting access to the product. Lawful basis: our legitimate interest in responding to enquiries, and taking steps at your request before entering into a contract.",
            "To provide the product to account holders. Lawful basis: performance of a contract.",
            "To keep the website and product secure and prevent abuse. Lawful basis: legitimate interests.",
            "To meet legal obligations, such as keeping accounting records. Lawful basis: legal obligation.",
          ],
        },
        "We do not use demo or contact details for marketing lists, and we do not make automated decisions about you.",
      ],
    },
    {
      title: "How long we keep it",
      blocks: [
        {
          list: [
            "Demo requests and correspondence: up to 12 months after our last contact with you, then deleted. If you become a customer, the details move into your account record.",
            "Account and screening data: for as long as your account is open, and then for as long as needed to meet legal, accounting or contractual obligations.",
            "You can ask us to delete your data sooner at any time.",
          ],
        },
      ],
    },
    {
      title: "Who we share it with",
      blocks: [
        "We do not sell, rent or trade personal data.",
        "We use service providers for hosting, data storage, email delivery and appointment booking. They process data on our instructions under written agreements. Some may process data outside the United Kingdom, in which case we rely on safeguards recognised under UK data protection law.",
        "We may disclose data where the law requires it.",
      ],
    },
    {
      title: "Your rights",
      blocks: [
        "Under UK data protection law you have the right to:",
        {
          list: [
            "ask for a copy of the personal data we hold about you;",
            "ask us to correct data that is inaccurate;",
            "ask us to delete your data;",
            "ask us to restrict how we use it, or object to our use of it;",
            "ask for your data in a portable format.",
          ],
        },
        `To use any of these rights, email ${site.email}. We will respond within one month. You also have the right to complain to the Information Commissioner's Office (ico.org.uk).`,
      ],
    },
    {
      title: "Changes to this policy",
      blocks: ["If we change this policy we will update this page and the date at the top."],
    },
    {
      title: "Contact",
      blocks: [contactBlock],
    },
  ],
}

export const terms: LegalDocument = {
  title: "Terms of service",
  description: `The terms that apply to the ${site.name} website and screening platform.`,
  updated: "2026-11-12",
  intro: `These terms apply to the website at ${site.domain} and to the ${site.name} screening platform, both provided by ${site.legalName} ("${site.name}", "we", "us").`,
  sections: [
    {
      title: "Agreement to these terms",
      blocks: [
        "By using our website or platform you agree to these terms. If you do not agree, you must not use them.",
      ],
    },
    {
      title: "Eligibility and accounts",
      blocks: [
        "Our services are for business and professional use. By using them you confirm that you are acting for a legal entity or in a professional capacity. You are responsible for keeping your account credentials safe and for activity under your account.",
      ],
    },
    {
      title: "What the service is, and what it is not",
      blocks: [
        `${site.name} provides adverse media screening and sanctions and watchlist screening, with AI analysis of the results. It covers ${counts.languages} languages and ${counts.riskCategories} risk categories. You acknowledge that:`,
        {
          list: [
            "the service is a screening support tool. It is not legal, regulatory or compliance advice;",
            "all results, including AI-generated summaries, require human review before any business decision, refusal or report is made;",
            "we are not authorised or regulated by the Financial Conduct Authority (FCA) or any other regulator, and using the service does not by itself make you compliant with any law.",
          ],
        },
      ],
    },
    {
      title: "Sources and accuracy",
      blocks: [
        'Results are drawn from official public sanctions lists and published media. Official lists can be subject to update delays, and published reports can be incomplete or wrong. We do not warrant that results are complete, accurate or up to date. The service is provided "as is" and "as available".',
      ],
    },
    {
      title: "Acceptable use",
      blocks: [
        "You must use the service lawfully, and only screen people and companies where you have a lawful reason to do so. You must not attempt to disrupt the service, gain unauthorised access to it, or resell it without our written agreement.",
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        `All intellectual property rights in the website and platform, including the software, design and brand names, belong to ${site.legalName}. You are granted a limited, non-transferable, revocable licence to use the platform in line with these terms while your subscription is active.`,
      ],
    },
    {
      title: "Limitation of liability",
      blocks: [
        `To the fullest extent permitted by law, ${site.legalName} is not liable for indirect or consequential loss, loss of profit, revenue, data or goodwill, or any loss arising from reliance on results provided by the service. Nothing in these terms limits liability that cannot be limited by law.`,
      ],
    },
    {
      title: "Governing law",
      blocks: [
        "These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute.",
      ],
    },
    {
      title: "Contact",
      blocks: [contactBlock],
    },
  ],
}
