import { companiesHouseUrl, formatDate, site } from "@/lib/site"

/** Registered company details as a definition list, from site.ts. */
export function CompanyDetails() {
  const rows: [string, React.ReactNode][] = [
    ["Registered name", site.legalName],
    ["Company type", site.company.type],
    ["Registered in", site.company.jurisdiction],
    ["Company number", site.company.number],
    [
      "Incorporated",
      <time key="date" dateTime={site.company.incorporated}>
        {formatDate(site.company.incorporated)}
      </time>,
    ],
    [
      "Registered office",
      <address key="office" className="not-italic">
        {site.company.registeredOffice.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>,
    ],
    [
      "Email",
      <a key="email" href={`mailto:${site.email}`} className="link">
        {site.email}
      </a>,
    ],
  ]

  return (
    <>
      <dl className="divide-y divide-line text-sm">
        {rows.map(([term, detail]) => (
          <div key={term} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="text-muted">{term}</dt>
            <dd className="text-heading">{detail}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm">
        <a href={companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="link">
          View the Companies House record
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </>
  )
}
