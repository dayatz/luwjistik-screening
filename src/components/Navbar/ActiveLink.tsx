'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

type Props = {
  href: string
  title: string
  exact?: boolean
}

export default function ActiveLink({ href, title, exact }: Props) {
  const pathname = usePathname()

  let isActive = pathname.startsWith(href) 
  if (exact) {
    isActive = pathname == href
  }
  return (
    <Link href={href} className={cn(
      'h-full grid place-items-center px-6 hover:bg-slate-50 border-b-2 transition-colors',
      isActive
        ? 'border-b-[var(--primary-color)] bg-slate-100 text-slate-800'
        : 'bg-white text-slate-500 border-b-transparent'
    )}>{title}</Link>
  )
}
