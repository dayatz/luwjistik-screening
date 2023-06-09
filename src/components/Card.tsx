import React from 'react'
import { cn } from '~/lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref}
        className={
          cn('p-6 rounded-lg border bg-white text-gray-800 shadow-sm', className)
        }
        {...props} />
    )
  })

Card.displayName = "Card"

export default Card
