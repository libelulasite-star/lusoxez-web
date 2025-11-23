import Link from "next/link"
import { LusoxezLogo } from "./lusoxez-logo"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <LusoxezLogo className="mb-4" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              The world's leading platform for direct factory sourcing. Connecting manufacturers with consumers,
              retailers, and governments.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* For Buyers */}
          <div>
            <h3 className="font-semibold text-accent mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Find Factories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Request Quotes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Buyer Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="font-semibold text-accent mb-4">For Sellers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Register Factory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Seller Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Government */}
          <div>
            
            <ul className="space-y-2 text-sm">
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
              <li className="pt-2 border-t border-primary-foreground/20 mt-2">
                <p className="text-primary-foreground/60 text-xs mb-1">Government Contact:</p>
                <p className="text-accent font-medium">CEO - Bruno Cabral</p>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 Luzox. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
