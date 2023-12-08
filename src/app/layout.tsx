/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import { Geologica } from 'next/font/google'
import './globals.css'
import './icons.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"

const Path = dynamic(() => import('@/components/Path'), { ssr: false })
const Apps = dynamic(() => import('@/components/Apps/AppsMenu'), { ssr: false })

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export const metadata: Metadata = {
  title: 'slshptt',
  description: 'slashpotato\'s website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geologica.className}>
        <header id='header' className='Header'>
          <Link className='fixed' href='/'>slshptt</Link>
          <div className='flex justify-between items-center w-full h-full px-5'>
            <nav className='flex justify-between items-center material-symbols-rounded'>
              <Link className='mr-1 my-auto' href={'/projects'}>extension</Link>
              <Link className='mr-1 my-auto' href={'/tools'}>handyman</Link>
              <Path/>
            </nav>
            <nav className='flex justify-between items-center material-symbols-rounded'>
              <Link className='ml-1 my-auto' href={'/settings'}>settings</Link>
              <Apps/>
            </nav>
          </div>
        </header>
        <div id='content' className='w-screen min-h-screen'>
          {children}
          <SpeedInsights/>
        </div>
      </body>
    </html>
  )
}
