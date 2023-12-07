import type { Metadata } from 'next'
import { Noto_Color_Emoji, Noto_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const notosans = Noto_Sans({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })
const notoemoji = Noto_Color_Emoji({ subsets: ['emoji'], weight: "400" })

export const metadata: Metadata = {
  title: 'slshptt',
  description: 'slashpotato\'s website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notosans.className}>
        <header id='header' className='Header'>
          <Link href={'/'} className='fixed'>slshptt</Link>
          <div className='flex justify-between w-full px-5'>
            <nav className='flex justify-between gap-2'>
              <button>a</button>
              <button>b</button>
            </nav>
            <nav className='flex justify-between gap-2'>
              <button>settings</button>
              <button>b</button>
            </nav>
          </div>
        </header>
        <div id='content' className='mt-16 w-screen min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
