import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { RestaurantSchema, LocalBusinessSchema } from "@/components/schema-markup"
import "./globals.css"

export const metadata: Metadata = {
  title: "La Estancia Steakhouse - Best Argentinian Restaurant Minneapolis | Twin Cities",
  description:
    "Best Steakhouse in Minneapolis - Experience authentic Argentinian/Uruguayan cuisine at La Estancia. Serving Minneapolis, St Paul, Edina, and Twin Cities with premium steaks, private dining, and catering.",
  generator: "v0.app",
  icons: {
    icon: "/images/main_logo.png",
    shortcut: "/images/main_logo.png",
    apple: "/images/main_logo.png",
  },
  openGraph: {
    title: "La Estancia Steakhouse - Best Argentinian Restaurant Minneapolis",
    description: "Authentic Argentinian steakhouse serving Minneapolis, St Paul, Edina, and Twin Cities metro area.",
    images: ["/images/main_logo.png"],
    url: "https://www.laestanciasteakhouse.com",
    siteName: "La Estancia Steakhouse",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "La Estancia Steakhouse - Best Argentinian Restaurant Minneapolis",
    description: "Authentic Argentinian steakhouse serving Twin Cities metro area",
    images: ["/images/main_logo.png"],
  },
  keywords: [
    "La Estancia Steakhouse", "Best Steakhouse Minneapolis", "Argentinian restaurant Minneapolis", 
    "steakhouse St Paul", "Argentinian restaurant Edina", "Twin Cities steakhouse", 
    "private dining Minneapolis", "catering Minneapolis", "Minneapolis fine dining",
    "Argentinian cuisine", "Uruguayan restaurant", "parrillada Minneapolis", 
    "empanadas Minneapolis", "chimichurri", "Malbec wine", "South American restaurant"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.laestanciasteakhouse.com",
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.9216;-93.2781",
    "ICBM": "44.9216, -93.2781"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <RestaurantSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
