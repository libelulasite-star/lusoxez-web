import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden bg-primary text-primary-foreground border-0">
          {/* Tile pattern background */}
          <div className="absolute inset-0 tile-pattern opacity-10" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Ready to Start Sourcing Directly from Factories?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
                Join thousands of businesses and consumers who are already saving money and building direct
                relationships with manufacturers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
