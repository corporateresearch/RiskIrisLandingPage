"use client"

import Link from "next/link"
import { contactSchema } from "@/lib/forms/schemas"
import { routes, site } from "@/lib/site"
import { Button } from "@/components/ui/Button"
import { Field } from "@/components/ui/Field"
import { honeypotProps, useSubmission } from "./useSubmission"

const rules = contactSchema

export function ContactForm() {
  const { status, message, fieldErrors, onSubmit, reset } = useSubmission("/api/contact", rules)

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-line bg-positive-soft p-6 sm:p-8">
        <h2 className="text-xl">Message sent</h2>
        <p className="mt-3 text-sm">Thank you. We have your message and will reply by email.</p>
        <div className="mt-6">
          <Button type="button" variant="secondary" onClick={reset}>
            Send another message
          </Button>
        </div>
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
      </div>
      <Field
        label={rules.subject.label}
        name="subject"
        optional
        maxLength={rules.subject.max}
        error={fieldErrors.subject}
      />
      <Field
        as="textarea"
        label={rules.message.label}
        name="message"
        required
        maxLength={rules.message.max}
        error={fieldErrors.message}
      />

      {status === "error" && (
        <div role="alert" className="rounded-sm border border-danger bg-danger-soft p-4 text-sm text-danger">
          <p className="font-medium">{message}</p>
          <p className="mt-1">
            You can also email{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}

      <p className="text-xs text-muted">
        By sending this form you agree that we may use these details to reply to you, as set out in our{" "}
        <Link href={routes.privacy} className="link">
          privacy policy
        </Link>
        .
      </p>

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  )
}
