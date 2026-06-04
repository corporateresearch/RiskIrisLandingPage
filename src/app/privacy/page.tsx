import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Risk Iris",
  description: "Privacy Policy for Risk Iris compliance screening platform.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-text-secondary text-sm">Last updated: June 4, 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-text-secondary leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">1. Introduction</h2>
            <p>
              RISK IRIS LIMITED (&quot;Risk Iris&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, process, and protect personal data in connection with our compliance screening services, website, and business relations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">2. The Types of Data We Process</h2>
            <p>
              We process data under two main categories:
            </p>
            <div className="space-y-2">
              <p><strong>A. Account and Administrative Data:</strong> Information about our users (compliance officers, clients, waitlist registrants), including name, business email address, company affiliation, billing details, and interaction logs.</p>
              <p><strong>B. Screening Data:</strong> Information inputted by our users for screening purposes (e.g., search target names, aliases) and the resulting screening profiles compiled from publicly available sanctions watchlists, regulatory enforcement lists, Politically Exposed Persons (PEP) registers, and open-source media articles.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">3. Legal Basis and Purposes of Processing</h2>
            <p>
              We process personal data to fulfill our contractual obligations with clients, to comply with legal responsibilities, and for our legitimate business interest in providing anti-money laundering (AML) and compliance risk management tools.
            </p>
            <p>
              We use the data to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage accounts, verify users, and provide access to the platform.</li>
              <li>Execute queries against sanctions databases and analyze public news for adverse media mentions.</li>
              <li>Optimize and improve our NLP categorization, noise reduction filters, and search capabilities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">4. Data Retention and Security</h2>
            <p>
              We prioritize data security. All data transmitted to or from our servers is encrypted in transit (TLS) and at rest. Screening logs and inputs are stored securely and kept only as long as necessary to perform the screening service, satisfy client contract requirements, or meet statutory storage obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">5. Sharing of Data</h2>
            <p>
              We do not sell, rent, or trade your personal data. We may share data with trusted third-party service providers (such as hosting, database, and payment processing partners) who operate strictly under data protection agreements in compliance with UK GDPR and relevant regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">6. Your Rights Under UK GDPR / GDPR</h2>
            <p>
              Depending on your location, you have rights regarding your personal data, including the right to request access, rectification, erasure, restriction of processing, and portability of your personal data. To exercise any of these rights, please contact our data compliance officer at the email address listed below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-text-primary">7. Contact Information</h2>
            <p>
              If you have any questions or complaints about our privacy practices, please contact us at:
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
