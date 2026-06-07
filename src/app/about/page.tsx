import type { Metadata } from "next"
import AboutCompany from "@/components/AboutCompany"

export const metadata: Metadata = {
  title: "About — Risk Iris",
  description:
    "Learn about Risk Iris Limited, a London-based compliance technology company building adverse media and sanctions screening tools.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutCompany />
    </main>
  )
}
