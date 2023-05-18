import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import { FiUser } from 'react-icons/fi'


export default function Navbar() {
  return (
    <nav className='shadow-sm h-16 bg-white '>
      <div className='flex gap-4 max-w-7xl mx-auto h-full'>
        <Link href="/" className='grid place-items-center'>
          <Image src="/luwjistik-logo.webp" height={32} width={125} alt="luwjistik logo" />
        </Link>

        <div className='h-full ml-8 w-full flex'>
          <ActiveLink href="/" title="Dashboard" />
          <ActiveLink href="/orders" title="Orders" />
          <ActiveLink href="/shipping-partners" title="Shipping Partners" />
          <ActiveLink href="/reports" title="Reports" />
          <ActiveLink href="/billings" title="Billings" />

          <div className='ml-auto grid place-items-center'>
            <div className='rounded-full p-2 border border-slate-200 bg-white hover:bg-slate-100 transition-colors'>
              <FiUser size={28} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
