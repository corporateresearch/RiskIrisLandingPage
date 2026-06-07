import type { Metadata } from "next"
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "FAQ — Risk Iris",
  description:
    "Frequently asked questions about Risk Iris — sanctions screening, adverse media, AI analysis, data handling, self-hosting, and more.",
  alternates: {
    canonical: "/faq",
  },
}

export default function FAQPage() {
  return (
    <main className="pt-20">
      <FAQ />
    </main>
  )
}
