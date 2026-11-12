/**
 * Single source of truth for everything that changes on a rename:
 * brand name, legal name, domain, email, phone, company details, logo
 * paths and the booking URL. Product facts live here too, so no number is
 * ever retyped in a component.
 *
 * Brand colours are the other half of a rename: see src/app/globals.css.
 */

const name = "Risk Iris"
const domain = "riskiris.com"

export const site = {
  name,
  legalName: "RISK IRIS LIMITED",
  domain,
  url: `https://www.${domain}`,
  email: "mouataz@riskiris.dev",
  phone: { display: "+44 20 3432 3772", href: "tel:+442034323772" },
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
  demo: { durationMinutes: 30 },
} as const

/** Initials used for the generated icon and wordmark. */
export const monogram = name
  .split(/\s+/)
  .map((word) => word.charAt(0))
  .join("")
  .slice(0, 2)
  .toUpperCase()

/**
 * Public product facts. Only the counts are published; the lists of
 * languages, categories and sources are deliberately not on the site.
 */
export const counts = { languages: "11", riskCategories: "11" } as const

/** The one public example of name-variant recognition. */
export const nameVariants = [
  { script: "Arabic", lang: "ar", variants: ["أحمد", "احمد"], note: "The same name, with and without the hamza." },
  {
    script: "Japanese",
    lang: "ja",
    variants: ["斎藤", "斉藤", "齋藤"],
    note: "Three accepted ways to write one surname.",
  },
] as const

export const routes = {
  home: "/",
  demo: "/book-a-demo",
  faq: "/faq",
  about: "/about",
  contact: "/contact",
  press: "/press",
  privacy: "/privacy",
  terms: "/terms",
} as const

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
