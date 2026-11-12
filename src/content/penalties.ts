/**
 * 2026 penalties for sanctions, bribery and third-party failures. Every
 * entry must link to the regulator's own announcement; do not add a case
 * without one. Amounts are as the regulator states them. usd is an
 * approximate conversion (GBP at 1.33, AED at 3.6725) used only for the
 * running total.
 */
export type Penalty = {
  company: string
  regulator: string
  /** ISO month, e.g. "2026-05". */
  month: string
  amount: string
  usd: number
  summary: string
  url: string
}

export const penalties: Penalty[] = [
  {
    company: "Bank of America",
    regulator: "FinCEN, with OCC and OFAC",
    month: "2026-10",
    amount: "$1.2 billion",
    usd: 1_200_000_000,
    summary: "Anti-money-laundering programme failures, with a separate sanctions settlement announced the same day.",
    url: "https://home.treasury.gov/news/press-releases/sb0657",
  },
  {
    company: "Adani Enterprises",
    regulator: "OFAC",
    month: "2026-05",
    amount: "$275 million",
    usd: 275_000_000,
    summary: "Bought gas through a Dubai-based trader despite signs that it originated in Iran.",
    url: "https://ofac.treasury.gov/recent-actions/20260518",
  },
  {
    company: "Applied Materials",
    regulator: "BIS",
    month: "2026-02",
    amount: "$252 million",
    usd: 252_000_000,
    summary: "Equipment routed through a subsidiary and re-exported to a restricted company without a licence.",
    url: "https://www.bis.gov/press-release/applied-materials-pay-252-million-penalty-bis-illegally-exporting-semiconductor-manufacturing-equipment",
  },
  {
    company: "Robert Bosch",
    regulator: "BIS",
    month: "2026-06",
    amount: "$36.2 million",
    usd: 36_184_680,
    summary: "Sensors and software supplied to restricted companies without a licence.",
    url: "https://www.bis.gov/press-release/robert-bosch-gmbh-bosch-pay-36-million-penalty-bis-violations-pertaining-shipments-huawei",
  },
  {
    company: "Ultra Electronics",
    regulator: "Serious Fraud Office",
    month: "2026-05",
    amount: "£10.1 million",
    usd: 13_410_590,
    summary: "Failure to prevent bribery on public contracts sought through agents.",
    url: "https://www.gov.uk/government/news/sfo-secures-10m-from-british-defence-supplier",
  },
  {
    company: "The Scoular Company",
    regulator: "US Department of Justice",
    month: "2026-07",
    amount: "$10.2 million",
    usd: 10_183_872,
    summary: "Customs brokers paid bribes to border officials on the company's behalf.",
    url: "https://www.justice.gov/opa/pr/agricultural-company-pay-over-10m-resolve-foreign-bribery-case",
  },
  {
    company: "Citibank, London branch",
    regulator: "OFSI",
    month: "2026-08",
    amount: "£4.7 million",
    usd: 6_294_665,
    summary: "970 payments made in breach of UK financial sanctions.",
    url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-citibank-na-london-branch",
  },
  {
    company: "A foreign bank branch in the UAE",
    regulator: "Central Bank of the UAE",
    month: "2026-06",
    amount: "AED 20 million",
    usd: 5_445_882,
    summary: "Repeated failures in its anti-money-laundering and sanctions framework.",
    url: "https://www.centralbank.ae/en/news-and-publications/news-and-insights/press-release/cbuae-imposes-a-financial-penalty-of-aed-20-000-000-on-a-branch-of-a-foreign-bank/",
  },
  {
    company: "Sabre Global Technologies",
    regulator: "OFSI",
    month: "2026-05",
    amount: "£1.0 million",
    usd: 1_331_224,
    summary: "Made funds and services available to a sanctioned airline.",
    url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-sabre-global-technologies-limited-sgtl",
  },
  {
    company: "Apple Distribution International",
    regulator: "OFSI",
    month: "2026-03",
    amount: "£390,000",
    usd: 518_700,
    summary: "Payments to a business owned by a sanctioned person.",
    url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-apple-distribution-international-limited",
  },
  {
    company: "Deutsche Bank, London branch",
    regulator: "OFSI",
    month: "2026-04",
    amount: "£165,000",
    usd: 219_450,
    summary: "Funds made available to a sanctioned person without a licence.",
    url: "https://assets.publishing.service.gov.uk/media/6a0c287bfcae986635db916d/DB_Penalty_Notice.pdf",
  },
]

export const penaltiesTotalUsd = penalties.reduce((sum, item) => sum + item.usd, 0)
