import { BuildingIcon, MapPinIcon, ShieldIcon } from "./icons"
import { ExternalLinkIcon } from "./icons"

const companyData = {
  legalName: "RISK IRIS LIMITED",
  tradingName: "Risk Iris",
  companyNumber: "16747142",
  incorporated: "28 September 2025",
  status: "Active",
  registeredAddress: "14859, 182-184 High Street North, London, United Kingdom, E6 2JA",
  sicCode: "74990",
  sicDescription: "Other professional, scientific and technical activities not elsewhere classified",
  director: "Mouataz Hesham Mohamed Helmi Hassan",
  psc: "Mouataz Hesham Mohamed Helmi Hassan",
  jurisdiction: "England & Wales",
}

export default function AboutCompany() {
  return (
    <section id="about" className="py-24 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About the <span className="text-gradient">company</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Risk Iris is built by a London-based team with deep compliance and technology expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Company Information</h3>
            <dl className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Legal name</dt>
                <dd className="text-sm text-text-primary">{companyData.legalName}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Trading as</dt>
                <dd className="text-sm text-text-primary">{companyData.tradingName}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Company number</dt>
                <dd className="text-sm text-text-primary">{companyData.companyNumber}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Incorporated</dt>
                <dd className="text-sm text-text-primary">{companyData.incorporated}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Status</dt>
                <dd className="text-sm text-success flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  {companyData.status}
                </dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">SIC code</dt>
                <dd className="text-sm text-text-primary">{companyData.sicCode} — {companyData.sicDescription}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Director</dt>
                <dd className="text-sm text-text-primary">{companyData.director}</dd>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <dt className="text-sm text-text-muted shrink-0 w-40">Jurisdiction</dt>
                <dd className="text-sm text-text-primary">{companyData.jurisdiction}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Registered Office</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {companyData.registeredAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <ShieldIcon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Regulatory Status</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Risk Iris is a private limited company registered in England and Wales.
                    We are not authorised or regulated by the FCA. Our screening tool is designed
                    to assist compliance teams and must not be used as the sole basis for any
                    decision without human review.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                  <BuildingIcon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Companies House</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    Full company records are publicly available via Companies House.
                  </p>
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/16747142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View on Companies House
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
