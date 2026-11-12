import { companiesHouseUrl, routes } from "@/lib/site"

export type NavLink = { label: string; href: string; external?: boolean }

export const primaryNav: NavLink[] = [
  { label: "About", href: routes.about },
  { label: "FAQ", href: routes.faq },
  { label: "Press", href: routes.press },
  { label: "Contact", href: routes.contact },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [...primaryNav, { label: "Companies House record", href: companiesHouseUrl, external: true }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: routes.privacy },
      { label: "Terms of service", href: routes.terms },
    ],
  },
]
