import type { Metadata } from "next"
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: "Contact Us | Risk Iris",
  description: "Get in touch with the Risk Iris team for general inquiries, partnership opportunities, or waitlist support.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-12">
      <Contact />
    </main>
  )
}
