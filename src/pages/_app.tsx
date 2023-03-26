import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dmsans',
})

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
