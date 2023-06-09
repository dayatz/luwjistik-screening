import { getServerSession } from 'next-auth'
import '../globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { redirect } from 'next/navigation'

import Providers from '~/components/Providers'
import Navbar from '~/components/Navbar'
import ToasterClient from '~/components/ToasterClient'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Luwjistik',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  console.log(session)
  if (!session?.user) {
    return redirect('/login')
  }

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterClient>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ToasterClient>
      </body>
    </html>
  )
}
