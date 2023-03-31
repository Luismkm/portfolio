import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dmsans',
})

import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      dynamic((await import('tw-elements')).default);
    };
    use();
  }, []);
  return (
    <main className={dmSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
