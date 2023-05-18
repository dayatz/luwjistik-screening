import React from "react"
import { cn } from "~/lib/utils"

type Variant = "default" | "primary" | "outline"

type ButtonProps = {
  variant?: Variant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: { [k in Variant]: string } = {
  "default": "",
  "outline": "border-2 border-[var(--primary-color)] text-[var(--color-primary)]",
  "primary": "bg-[var(--primary-color)] text-gray-200 hover:bg-[var(--primary-color)]/80"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('h-10 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:opacity-50 py-2 px-4 shadow-sm gap-2', variantClasses[variant], className)}
        {...props}
      />
    )
  })

export default Button
