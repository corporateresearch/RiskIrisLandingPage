import type { Metadata } from "next"
import Hero from "@/components/Hero"
import OfficialSources from "@/components/OfficialSources"
import FeatureGrid from "@/components/FeatureGrid"
import HowItWorks from "@/components/HowItWorks"
import UseCases from "@/components/UseCases"
import MatchAccuracy from "@/components/MatchAccuracy"
import RiskCategoriesCloud from "@/components/RiskCategoriesCloud"
import WhyRiskIris from "@/components/WhyRiskIris"
import SecurityDataHandling from "@/components/SecurityDataHandling"
import SeeItInAction from "@/components/SeeItInAction"
import StatsBand from "@/components/StatsBand"
import AboutCompany from "@/components/AboutCompany"
import EarlyAccessBand from "@/components/EarlyAccessBand"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import FinalCTA from "@/components/FinalCTA"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.riskiris.com/#organization",
        "name": "Risk Iris",
        "legalName": "RISK IRIS LIMITED",
        "url": "https://www.riskiris.com",
        "logo": "https://www.riskiris.com/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "14859, 182-184 High Street North",
          "addressLocality": "London",
          "postalCode": "E6 2JA",
          "addressCountry": "GB"
        },
        "companyNumber": "16747142",
        "foundingDate": "2025-09-28"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.riskiris.com/#website",
        "url": "https://www.riskiris.com",
        "name": "Risk Iris",
        "description": "Adverse media and sanctions screening platform with grounded, cited AI analysis.",
        "publisher": { "@id": "https://www.riskiris.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.riskiris.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.riskiris.com/#webpage",
        "url": "https://www.riskiris.com",
        "name": "Risk Iris — Screen Every Name. Defend Every Decision.",
        "description": "Risk Iris screens adverse media across 11 risk categories and 11 languages.",
        "isPartOf": { "@id": "https://www.riskiris.com/#website" }
      },
      {
        "@type": "QAPage",
        "@id": "https://www.riskiris.com/#faq",
        "isPartOf": { "@id": "https://www.riskiris.com/#webpage" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What data sources do you screen against?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Risk Iris screens against 7+ major sanctions and watchlists including OFAC, EU, UN, HMT, Interpol, and more. These lists are updated continuously to ensure you're always screening against the latest designations."
            }
          },
          {
            "@type": "Question",
            "name": "How does the AI avoid hallucination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI uses grounded generation with inline [Source N] citations. Every claim in the analysis links back to its source document. The prompt used for analysis is also inspectable, so you can verify the reasoning chain yourself. This transparency is central to our anti-hallucination approach."
            }
          },
          {
            "@type": "Question",
            "name": "What languages do you support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11 languages: English, Arabic (with full RTL support), Chinese (CJK), French, Spanish, Russian, Portuguese, German, Turkish, Japanese, and Urdu. Reports render natively in each script."
            }
          },
          {
            "@type": "Question",
            "name": "Where does my data go?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Risk Iris runs in-process. No third-party search brokers see your queries. The only external API call is to the AI model for analysis. You can also self-host for full data residency control."
            }
          },
          {
            "@type": "Question",
            "name": "Can I self-host?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The platform is designed to be self-hostable. Contact us through the waitlist for deployment details."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An API is on our roadmap. Currently Risk Iris is a standalone platform. Join the waitlist to be notified when API access becomes available."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have audit logging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On the roadmap. Currently the inspectable AI prompt and source citations serve as your decision record. Full audit trails with user-level logging are planned."
            }
          },
          {
            "@type": "Question",
            "name": "Are you SOC 2 or ISO 27001 certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not yet. Both SOC 2 and ISO 27001 certification are on our certification roadmap. We follow security best practices in our architecture and data handling."
            }
          },
          {
            "@type": "Question",
            "name": "How often do sanctions lists refresh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sanctions and watchlist feeds are monitored continuously. When a list updates, existing entities in your portfolio are automatically re-screened and you're alerted to any new matches."
            }
          }
        ]
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <OfficialSources />
      <HowItWorks />
      <FeatureGrid />
      <UseCases />
      <MatchAccuracy />
      <RiskCategoriesCloud />
      <WhyRiskIris />
      <SecurityDataHandling />
      <SeeItInAction />
      <StatsBand />
      <AboutCompany />
      <EarlyAccessBand />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
  )
}
