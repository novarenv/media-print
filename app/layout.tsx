import Sidebar from '../components/sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Media Print',
  description: 'Menyediakan jasa memuaskan bagi anda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <link rel="icon" type="image/png" href="/images/favicon.ico" />
      <body className='flex'>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
