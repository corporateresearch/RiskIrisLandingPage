import Link from "next/link"
import { security } from "@/content/home"
import { routes } from "@/lib/site"
import { CheckIcon } from "@/components/ui/icons"
import { Reveal } from "@/components/ui/Reveal"
import { Section, SectionHeader } from "@/components/ui/Section"

export function Security() {
  return (
    <Section id="security" labelledBy="security-title">
      <SectionHeader id="security-title" eyebrow={security.eyebrow} title={security.title} lead={security.lead} />
      <Reveal>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {security.commitments.map((item) => (
            <li key={item.title} className="flex gap-3">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <div>
                <h3 className="font-body text-base font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-1.5 text-sm">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="mt-10 text-sm text-muted">
        The detail is in the{" "}
        <Link href={routes.privacy} className="link">
          privacy policy
        </Link>
        .
      </p>
    </Section>
  )
}
