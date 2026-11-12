/**
 * Single source of truth for everything that changes on a rename:
 * brand name, legal name, domain, email, company details, logo paths and
 * the booking URL. Product facts live here too, so no number
 * is ever retyped in a component.
 *
 * Brand colours are the other half of a rename: see the @theme block in
 * src/app/globals.css.
 */

const name = "Risk Iris"
const domain = "riskiris.com"

export const site = {
  name,
  legalName: "RISK IRIS LIMITED",
  domain,
  url: `https://www.${domain}`,
  email: "mouataz@riskiris.dev",
  bookingUrl: "https://calendar.app.google/2dMF8t33nKf367yN7",
  locale: "en_GB",
  company: {
    type: "Private limited company",
    jurisdiction: "England and Wales",
    number: "16747142",
    /** ISO date; formatted for display with formatDate(). */
    incorporated: "2025-09-28",
    registeredOffice: ["14859, 182–184 High Street North", "London", "E6 2JA"],
    countryCode: "GB",
  },
  /** Generated from the name above and the colour tokens; see src/app. */
  logo: {
    icon: "/icon.svg",
    wordmarkOnLight: "/brand/wordmark-on-light.png",
    wordmarkOnDark: "/brand/wordmark-on-dark.png",
  },
  /** Paths appended to NEXT_PUBLIC_APP_URL for the product's own pages. */
  app: {
    loginPath: "/login",
    signupPath: "/signup",
  },
  demo: {
    durationMinutes: 30,
  },
} as const

/** Initials used for the generated icon and wordmark. */
export const monogram = name
  .split(/\s+/)
  .map((word) => word.charAt(0))
  .join("")
  .slice(0, 2)
  .toUpperCase()

export const facts = {
  languages: [
    "Arabic",
    "English",
    "French",
    "Spanish",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Chinese",
    "Japanese",
    "Hindi",
  ],
  riskCategories: [
    "Bribery and corruption",
    "Financial",
    "Legal",
    "ESG",
    "Political",
    "Data privacy",
    "Human and labour rights",
    "Supply chain and security",
    "Sanctions",
    "Health and safety",
    "Intellectual property",
  ],
  sanctionsLists: [
    { name: "OFAC", region: "US" },
    { name: "UK", region: "OFSI" },
    { name: "EU", region: null },
    { name: "UN", region: null },
    { name: "Canada", region: null },
    { name: "Australia", region: "DFAT" },
    { name: "Japan", region: null },
  ],
  analysisOutputs: ["Summary of findings", "Timeline", "Event details", "Source link for every finding"],
  nameVariants: [
    { script: "Arabic", lang: "ar", variants: ["أحمد", "احمد"] },
    { script: "Japanese", lang: "ja", variants: ["斎藤", "斉藤", "齋藤"] },
  ],
} as const

/** Display strings derived from the facts, so counts can never drift. */
export const counts = {
  languages: String(facts.languages.length),
  riskCategories: String(facts.riskCategories.length),
  sanctionsLists: `${facts.sanctionsLists.length}+`,
} as const

export const sanctionsListLabels = facts.sanctionsLists.map((list) =>
  list.region ? `${list.name} (${list.region})` : list.name,
)

/** Product app links appear only when NEXT_PUBLIC_APP_URL is set. */
const appBase = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, "") || null

export const appLinks = appBase
  ? { login: `${appBase}${site.app.loginPath}`, signup: `${appBase}${site.app.signupPath}` }
  : null

export const routes = {
  home: "/",
  demo: "/book-a-demo",
  faq: "/faq",
  about: "/about",
  contact: "/contact",
  press: "/press",
  privacy: "/privacy",
  terms: "/terms",
  howItWorks: "/#how-it-works",
  platform: "/#platform",
  tour: "/#product-tour",
  security: "/#security",
} as const

/**
 * Real product captures. A tour panel with an entry here shows the capture;
 * a panel without one shows a coded illustration labelled "Illustration".
 * To replace an illustration, add the webp to public/screenshots and add an
 * entry under the panel's key (search, analysis, languages, report).
 */
export type Screenshot = { src: string; width: number; height: number; alt: string; caption: string }

export const screenshots: {
  workspace: Screenshot
  tour: Partial<Record<"search" | "analysis" | "languages" | "report", Screenshot>>
} = {
  workspace: {
    src: "/screenshots/workspace-home.webp",
    width: 1252,
    height: 530,
    alt: "The workspace home screen, showing 11 risk categories and 11 languages",
    caption: "Product screenshot: workspace home",
  },
  tour: {},
}

export const companiesHouseUrl = `https://find-and-update.company-information.service.gov.uk/company/${site.company.number}`

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  )
}

export const registeredOfficeLine = site.company.registeredOffice.join(", ")

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString()
}
