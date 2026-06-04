import type { Metadata } from "next"
import { Sora, Outfit } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Risk Iris — Screen Every Name. Defend Every Decision.",
  description:
    "Risk Iris screens adverse media across 11 risk categories and 10 languages, screens against 7 major sanctions lists, and produces grounded, cited AI summaries your compliance team can defend.",
  keywords: [
    "sanctions screening",
    "adverse media screening",
    "KYC",
    "AML",
    "due diligence",
    "compliance",
    "risk intelligence",
    "AI screening",
    "watchlist screening",
  ],
  openGraph: {
    title: "Risk Iris — Screen Every Name. Defend Every Decision.",
    description:
      "Adverse media and sanctions screening platform with grounded, cited AI analysis. 11 risk categories, 10 languages, 7 sanctions lists.",
    url: "https://riskiris.com",
    siteName: "Risk Iris",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Risk Iris — Screening intelligence platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Iris — Screen Every Name. Defend Every Decision.",
    description:
      "Adverse media and sanctions screening platform with grounded, cited AI analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://riskiris.com"),
  // PLACEHOLDER: Replace with actual app login URL
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable}`}>
      <body className="bg-surface-900 text-text-primary antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
