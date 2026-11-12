import { appLinks, companiesHouseUrl, routes } from "@/lib/site"

export type NavLink = { label: string; href: string; external?: boolean }

export const primaryNav: NavLink[] = [
  { label: "How it works", href: routes.howItWorks },
  { label: "Platform", href: routes.platform },
  { label: "FAQ", href: routes.faq },
  { label: "About", href: routes.about },
]

export const loginLink: NavLink | null = appLinks ? { label: "Log in", href: appLinks.login, external: true } : null
export const signupLink: NavLink | null = appLinks ? { label: "Sign up", href: appLinks.signup, external: true } : null

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: routes.howItWorks },
      { label: "Platform", href: routes.platform },
      { label: "Product tour", href: routes.tour },
      { label: "Security and data", href: routes.security },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Contact", href: routes.contact },
      { label: "Press", href: routes.press },
      { label: "Companies House record", href: companiesHouseUrl, external: true },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Book a demo", href: routes.demo },
      ...(signupLink ? [signupLink] : []),
      ...(loginLink ? [loginLink] : []),
      { label: "Privacy policy", href: routes.privacy },
      { label: "Terms of service", href: routes.terms },
    ],
  },
]
