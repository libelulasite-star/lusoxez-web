import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Luzox - Factory Direct Marketplace | Mercado Direto de Fábrica",
  description:
    "Connect directly with factories worldwide. Wholesale prices for consumers, retailers, and governments. | Conecte-se diretamente com fábricas em todo o mundo. Preços de atacado para consumidores, retalhistas e governos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <CartProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <CartDrawer />
            <Analytics />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
