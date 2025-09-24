import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "La Estancia Steakhouse - Argentinean/Uruguayan Cuisine in Minneapolis",
  description:
    "Best Steakhouse in Minneapolis - Experience authentic Argentinean/Uruguayan cuisine at La Estancia Steakhouse. Premium steaks, traditional dishes, and exceptional dining in Minneapolis.",
  generator: "v0.app",
  icons: {
    icon: "/images/la-estancia-logo-transparent.png",
  },
  openGraph: {
    images: "/images/la-estancia-logo-transparent.png",
  },
  twitter: {
    images: "/images/la-estancia-logo-transparent.png",
  },
  keywords: ["La Estancia Steakhouse", "Best Steakhouse in Minneapolis", "Authentic Argentinean/Uruguayan Cuisine", "Minneapolis Steakhouse", "Minneapolis Steakhouse Deals", "Minneapolis Steakhouse Deals", "Minneapolis Steakhouse Deals"],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.laestanciasteakhouse.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
