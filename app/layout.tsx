import type { Metadata } from 'next'
import { Manrope, Work_Sans } from "next/font/google";
import './globals.css'

export const metadata: Metadata = {
  title: 'Belive - Documentation',
  description: 'Open source software for renting rooms, houses, and apartments.',
}

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${workSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
