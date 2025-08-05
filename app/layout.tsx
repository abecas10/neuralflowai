import "./globals.css"

import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import siteMetadata from './metadata.json'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = siteMetadata['/']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
        <body
          className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
        >
          {children}
        </body>
    </html>
  )
}
