"use client"

import Link from "next/link"
import { demoRequestSchema, TEAM_SIZES } from "@/lib/forms/schemas"
import { routes, site } from "@/lib/site"
import { Button } from "@/components/ui/Button"
import { Field } from "@/components/ui/Field"
import { ExternalIcon } from "@/components/ui/icons"
import { honeypotProps, useSubmission } from "./useSubmission"

const rules = demoRequestSchema

export function DemoRequestForm() {
  const { status, message, fieldErrors, onSubmit } = useSubmission("/api/demo-request", rules)

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-line bg-positive-soft p-6 sm:p-8">
        <h2 className="text-xl">Request received</h2>
        <p className="mt-3 text-sm">
          Thank you. The last step is to choose a time for your {site.demo.durationMinutes}-minute call. The booking
          page opens in a new tab.
        </p>
        <div className="mt-6">
          <Button href={site.bookingUrl} external size="lg">
            Choose a time
            <ExternalIcon className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">
          If none of the times suit you, email{" "}
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <input {...honeypotProps()} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={rules.name.label}
          name="name"
          autoComplete="name"
          required
          maxLength={rules.name.max}
          error={fieldErrors.name}
        />
        <Field
          label={rules.email.label}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={rules.email.max}
          error={fieldErrors.email}
        />
        <Field
          label={rules.company.label}
          name="company"
          autoComplete="organization"
          required
          maxLength={rules.company.max}
          error={fieldErrors.company}
        />
        <Field
          label={rules.role.label}
          name="role"
          autoComplete="organization-title"
          required
          maxLength={rules.role.max}
          error={fieldErrors.role}
        />
      </div>

      <Field
        as="select"
        label={rules.team_size.label}
        name="team_size"
        required
        options={TEAM_SIZES}
        placeholder="Select a team size"
        hint="How many people would use the product."
        error={fieldErrors.team_size}
      />

      <Field
        as="textarea"
        label={rules.note.label}
        name="note"
        optional
        maxLength={rules.note.max}
        hint="Anything you would like us to cover on the call."
        error={fieldErrors.note}
      />

      {status === "error" && (
        <div role="alert" className="rounded-sm border border-danger bg-danger-soft p-4 text-sm text-danger">
          <p className="font-medium">{message}</p>
          <p className="mt-1">
            You can still{" "}
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="font-medium underline">
              pick a time directly
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}

      <p className="text-xs text-muted">
        By sending this form you agree that we may use these details to arrange and follow up your demo, as set out in
        our{" "}
        <Link href={routes.privacy} className="link">
          privacy policy
        </Link>
        .
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" variant="accent" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a demo"}
        </Button>
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="link text-sm font-medium">
          Or pick a time
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </form>
  )
}
