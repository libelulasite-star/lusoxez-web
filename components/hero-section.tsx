import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Store, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Tile Pattern Background */}
      <div className="absolute inset-0 tile-pattern opacity-10" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                Direct from Factory to You
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Connect Directly with Factories Worldwide
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Skip the middleman. Access wholesale prices from verified manufacturers. Perfect for consumers, retailers,
              and government procurement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                Register as Factory
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold text-accent">5,000+</div>
                <div className="text-sm text-primary-foreground/80">Factories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-primary-foreground/80">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">120+</div>
                <div className="text-sm text-primary-foreground/80">Countries</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors">
                <Factory className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">For Factories</h3>
                <p className="text-sm text-primary-foreground/80">Reach global markets directly</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors">
                <Store className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">For Retailers</h3>
                <p className="text-sm text-primary-foreground/80">Source products at wholesale prices</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">For Consumers</h3>
                <p className="text-sm text-primary-foreground/80">Buy direct and save money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
