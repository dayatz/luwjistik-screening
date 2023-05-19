import React from "react"
import { cn } from "~/lib/utils"

type Variant = "default" | "primary" | "outline" | "danger"
type Size = "large" | "medium" | "small"

type ButtonProps = {
  variant?: Variant
  size?: Size
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: { [k in Variant]: string } = {
  "default": "hover:bg-slate-100",
  "outline": "border-2 border-[var(--primary-color)] text-[var(--color-primary)]",
  "primary": "bg-[var(--primary-color)] text-gray-100 hover:bg-[var(--primary-color-h)]",
  "danger": "bg-red-400 text-slate-100"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = 'medium', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:opacity-50 shadow-sm gap-2',
          variantClasses[variant],
          size === 'small' ? 'h-8 py-1 px-2': '',
          size === 'medium' ? 'h-10 py-2 px-4': '',
          className
        )}
        {...props}
      />
    )
  })

Button.displayName = 'Button'

export default Button
