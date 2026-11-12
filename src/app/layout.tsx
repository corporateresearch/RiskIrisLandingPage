import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { JsonLd } from "@/lib/JsonLd"
import { socialMetadata } from "@/lib/metadata"
import { absoluteUrl, counts, site } from "@/lib/site"

// Only the weights the design uses: headings 700; body 400, 500 and 600.
const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--face-heading",
  display: "swap",
})
const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--face-body",
  display: "swap",
})

/** Applies the saved or system theme before first paint, so there is no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`

const description = `${site.name} checks the companies and people you do business with for negative news and sanctions, in ${counts.languages} languages and across ${counts.riskCategories} risk categories. Evidence, not risk scores.`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Adverse media and sanctions screening`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: site.logo.icon, type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  ...socialMetadata(`${site.name} | Adverse media and sanctions screening`, description, "/"),
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: absoluteUrl(site.logo.wordmarkOnLight),
  email: site.email,
  telephone: site.phone.display,
  foundingDate: site.company.incorporated,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.company.registeredOffice[0],
    addressLocality: site.company.registeredOffice[1],
    postalCode: site.company.registeredOffice[2],
    addressCountry: site.company.countryCode,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${heading.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-brand"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={organization} />
      </body>
    </html>
  )
}
