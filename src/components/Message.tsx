'use client';
import React from "react"
import { FiX } from "react-icons/fi";
import { cn } from "~/lib/utils";

type Props = {
  message?: string
  show: boolean
  variant: "error" | "success"
}

const defaultMsg = 'Something went wrong, contact our support and try again later.'
export default function Message({ message = defaultMsg, show, variant }: Props) {
  const [showState, setShow] = React.useState(show)
  if (!showState) return null
  return (
    <div className={cn(
      'p-3 rounded-md border  relative',
      variant === 'error' ? 'border-red-400 text-red-400':
        variant === 'success' ? 'border-green-400 text-green-400': ''
    )}>
      {message}
      <div className="absolute right-0 top-0 p-2 hover:cursor-pointer" onClick={() => {
        setShow(s => !s)
      }}>
        <FiX size={22} />
      </div>
    </div>
  )
}
