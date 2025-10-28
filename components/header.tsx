"use client"

import Link from "next/link"
import { LusoxezLogo } from "./lusoxez-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { t } = useLanguage()
  const { totalItems, openCart } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <LusoxezLogo size="small" />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder={t.nav.search} className="w-full pl-10 bg-muted/50" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/categories" className="text-sm font-medium hover:text-accent transition-colors">
              {t.nav.categories}
            </Link>
            <Link href="/factories" className="text-sm font-medium hover:text-accent transition-colors">
              {t.nav.factories}
            </Link>
            <Link href="/bulk-orders" className="text-sm font-medium hover:text-accent transition-colors">
              {t.nav.bulkOrders}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              {t.nav.about}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
            <LanguageSelector />
            <Button className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
              {t.nav.signIn}
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder={t.nav.search} className="w-full pl-10 bg-muted/50" />
          </div>
        </div>
      </div>
    </header>
  )
}
