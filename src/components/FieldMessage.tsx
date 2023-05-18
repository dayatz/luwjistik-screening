import React from 'react'
import { cn } from '~/lib/utils'


type Props = {
  message: string
  variant: "error" | "success"
} & React.HTMLAttributes<HTMLDivElement>

const FieldMessage = React.forwardRef<HTMLDivElement, Props>(({
  message, variant, className, ...props
}, ref) => {
  return (
    <div ref={ref} className={cn('mb-0 text-sm', variant === 'error' ? 'text-red-400' : 'text-gray-300', className)} {...props}>
      {props.children ?? message}
    </div>
  )
})

export default FieldMessage
