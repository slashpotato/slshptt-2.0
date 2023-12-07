/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Geologica } from 'next/font/google'
import './globals.css'
import './icons.css'
import HeaderTitle from '@/components/Header'

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geologica.className}>
        <header id='header' className='Header'>
          <HeaderTitle/>
          <div className='flex justify-between w-full px-5'>
            <nav className='flex justify-between material-symbols-rounded'>
              <Link className='mr-1 material-symbols-rounded' href={'/projects'}>extension</Link>
              <Link className='mr-1 material-symbols-rounded' href={'/tools'}>handyman</Link>
            </nav>
            <nav className='flex justify-between material-symbols-rounded'>
              <Link className='ml-1 material-symbols-rounded' href={'/settings'}>settings</Link>
              <Link className='ml-1 material-symbols-rounded' href={'/'}>apps</Link>
            </nav>
          </div>
        </header>
        <div id='content' className='w-screen min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
