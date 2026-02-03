import type React from "react"
import type { Metadata, Viewport } from "next"
import { Press_Start_2P, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "p7xLabs | Privacy-Native Finance Layer on Solana",
  description:
    "The first privacy-native finance layer built on Solana. Transact, swap, invest, and manage portfolios without exposing your wallet or strategy.",
  icons: { icon: "/images/p7xLabs.png" },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#4F46E5",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pressStart.variable} ${spaceMono.variable} font-mono antialiased bg-[#0A0A1A]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
