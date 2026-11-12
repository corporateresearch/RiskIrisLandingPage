"use client"

import { useState } from "react"
import { HONEYPOT_FIELD, validate, type FieldErrors, type Schema } from "@/lib/forms/schemas"

type Status = "idle" | "submitting" | "success" | "error"

/** Posts a form to an API route and tracks field errors and overall status. */
export function useSubmission<S extends Schema>(endpoint: string, schema: S) {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<S>>({})

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, unknown>

    const { errors } = validate(schema, data)
    setFieldErrors(errors)
    const firstInvalid = Object.keys(errors)[0]
    if (firstInvalid) {
      setStatus("error")
      setMessage("Please check the highlighted fields.")
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setStatus("submitting")
    setMessage("")
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean
        error?: string
        fields?: FieldErrors<S>
      } | null

      if (response.ok && result?.ok) {
        setStatus("success")
        return
      }
      setFieldErrors(result?.fields ?? {})
      setMessage(result?.error ?? "Something went wrong.")
      setStatus("error")
    } catch {
      setMessage("We could not reach the server.")
      setStatus("error")
    }
  }

  return { status, message, fieldErrors, onSubmit, reset: () => setStatus("idle") }
}

/** Hidden trap for automated submissions. Off-screen, unlabelled for people, skipped by the keyboard. */
export function honeypotProps() {
  return {
    type: "text",
    name: HONEYPOT_FIELD,
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": true,
    className: "absolute -left-[9999px] h-px w-px opacity-0",
  } as const
}
