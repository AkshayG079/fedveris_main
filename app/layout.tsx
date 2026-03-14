import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast";

import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'FIDVERIS - Premium Digital Solutions',
  description: 'Reliable Technology Solutions for Businesses Ready to Grow',
  icons: {
    icon: '/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary-bg font-sans text-primary-text">
        <Toaster position="top-right" />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="grow pt-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}