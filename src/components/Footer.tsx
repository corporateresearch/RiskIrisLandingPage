import Link from "next/link"
import { MapPinIcon, LinkedinIcon } from "./icons"

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Companies House", href: "https://find-and-update.company-information.service.gov.uk/company/16747142" },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-semibold">
                Risk <span className="text-gradient">Iris</span>
              </span>
            </Link>
            <div className="flex items-start gap-2 mb-4">
              <MapPinIcon className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
              <p className="text-xs text-text-muted">
                London, UK
              </p>
            </div>
            <p className="text-xs text-text-muted leading-relaxed mb-4">
              <strong>RISK IRIS LIMITED</strong>
              <br />
              Company number 16747142
              <br />
              Registered in England and Wales
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http")
                  const isPlaceholder = link.href === "#"
                  if (isExternal || isPlaceholder) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-text-muted leading-relaxed mb-4">
            <strong>Disclaimer:</strong> Risk Iris is a screening tool. All results require human
            review before action. Data is sourced from official public lists which may be subject
            to update delays. Risk Iris is not authorised or regulated by the FCA. This platform
            is designed to assist compliance teams and must not be used as the sole basis for any
            decision without human review.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {year} RISK IRIS LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
