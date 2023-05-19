'use client'

import { Toaster } from "react-hot-toast"

export default function ToasterClient({ children }: {children: React.ReactNode}) {
  return (
    <>
    <Toaster position="top-right" />
    {children}
    </>
  )
}
