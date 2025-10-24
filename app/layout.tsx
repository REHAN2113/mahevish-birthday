import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Happy Birthday My Love ❤️ | A Magical Celebration",
  description:
    "A romantic and magical birthday celebration website filled with love, animations, and beautiful memories. Made with endless love for the most special person.",
  keywords: "birthday, love, romantic, celebration, anniversary, special day",
  authors: [{ name: "Your Loving Partner" }],
  openGraph: {
    title: "Happy Birthday My Love ❤️",
    description: "A magical birthday celebration for the most special person",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🎂</text></svg>"
        />
      </head>
      <body className={`font-sans ${playfair.variable} ${sourceSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
