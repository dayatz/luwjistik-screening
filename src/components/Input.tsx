import React from 'react'
import { cn } from '~/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border\
          bg-transparent px-3 py-2 text-sm ring-offset-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          Boolean(hasError) ? 'border-red-400' : 'border-slate-400',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Input
