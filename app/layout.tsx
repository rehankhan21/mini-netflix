import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'
import MovieApiContextProvider from '@/contexts/api-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Netflix',
  description: 'Next Netflix App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MovieApiContextProvider>
        <Navbar />
          {children}
        </MovieApiContextProvider>
      </body>
    </html>
  )
}
