import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Risk Iris",
  description: "Terms of Service for Risk Iris compliance screening platform.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-text-secondary text-sm">Last updated: June 4, 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-text-secondary leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by RISK IRIS LIMITED (&quot;Risk Iris&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including our website at riskiris.com and the Risk Iris screening platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">2. Eligibility and Account Registry</h2>
            <p>
              Our services are designed exclusively for business and professional use. By using our services, you warrant that you are registering on behalf of a legal entity or acting in a professional capacity. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">3. Use of Services and Compliance Disclaimer</h2>
            <p>
              Risk Iris provides adverse media, PEP, and sanctions screening search and triage tools driven by AI. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our services are screening support tools only. They do not constitute legal advice, regulatory advice, or formal compliance recommendations.</li>
              <li>All screening matches, outputs, and AI-generated summaries <strong>require human review and disposition</strong> before any business action, block, or reporting decision is made.</li>
              <li>We are not authorised or regulated by the UK Financial Conduct Authority (FCA) or any other regulatory body. Use of the services does not guarantee compliance with AML, Counter-Terrorist Financing, or Sanctions laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">4. Data Sourcing and Accuracy</h2>
            <p>
              We source data from official public watchlists, government databases, and public news sources. While we strive to maintain high-recall accuracy and frequent database refreshes, we cannot warrant that the data is always complete, free of errors, or up-to-date. The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">5. Intellectual Property Rights</h2>
            <p>
              All intellectual property rights in the Risk Iris platform, layout, designs, proprietary algorithms, and brand names belong to RISK IRIS LIMITED. You are granted a limited, non-transferable, revocable license to access and use the platform in accordance with these terms during your active subscription period.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, RISK IRIS LIMITED shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your reliance on screening reports or data provided by the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction to settle any disputes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">8. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              <strong>RISK IRIS LIMITED</strong>
              <br />
              14859, 182-184 High Street North, London, United Kingdom, E6 2JA
              <br />
              Email: <a href="mailto:info@riskiris.com" className="text-violet-400 hover:underline">info@riskiris.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
