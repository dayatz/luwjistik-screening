import React from 'react'
import { cn } from '~/lib/utils'


type Props = {
  message?: string
  variant: "error" | "success"
} & React.HTMLAttributes<HTMLDivElement>

const FieldMessage = React.forwardRef<HTMLDivElement, Props>(({
  message, variant, className, ...props
}, ref) => {
  if (!props.children && !message) return null
  return (
    <div ref={ref} className={cn('mb-0 text-sm', variant === 'error' ? 'text-red-400' : 'text-gray-300', className)} {...props}>
      {props.children ?? message}
    </div>
  )
})

FieldMessage.displayName = 'FieldMessage'

export default FieldMessage
