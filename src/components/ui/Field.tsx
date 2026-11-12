import { cn } from "./cn"

const control =
  "block w-full rounded-sm border border-line-strong bg-canvas px-3.5 py-2.5 text-sm text-heading hover:border-muted aria-[invalid=true]:border-danger"

type Shared = {
  label: string
  name: string
  error?: string
  hint?: string
  optional?: boolean
  required?: boolean
  maxLength?: number
  className?: string
}

type InputProps = Shared & { as?: "input"; type?: "text" | "email"; autoComplete?: string }
type TextareaProps = Shared & { as: "textarea" }
type SelectProps = Shared & { as: "select"; options: readonly string[]; placeholder: string }

/** Labelled form control with hint and error text wired up for assistive technology. */
export function Field(props: InputProps | TextareaProps | SelectProps) {
  const { label, name, error, hint, optional, required, maxLength, className } = props
  const id = `field-${name}`
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined
  const shared = {
    id,
    name,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  } as const

  let input: React.ReactNode
  if (props.as === "textarea") {
    input = <textarea {...shared} maxLength={maxLength} className={cn(control, "min-h-28 resize-y")} />
  } else if (props.as === "select") {
    input = (
      <select {...shared} defaultValue="" className={cn(control, "min-h-11")}>
        <option value="">{props.placeholder}</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  } else {
    input = (
      <input
        {...shared}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        maxLength={maxLength}
        className={cn(control, "min-h-11")}
      />
    )
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-heading">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {input}
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
