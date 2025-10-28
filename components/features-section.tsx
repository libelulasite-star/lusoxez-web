import { Card } from "@/components/ui/card"
import { Shield, TrendingDown, Globe, Truck, Award, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Factories",
    description: "All manufacturers are thoroughly vetted and certified",
  },
  {
    icon: TrendingDown,
    title: "Wholesale Prices",
    description: "Save up to 60% by buying directly from the source",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access factories from over 120 countries worldwide",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "End-to-end shipping and customs assistance",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Third-party inspection and quality control services",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated support team for buyers and sellers",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative tile pattern */}
      <div className="absolute inset-0 tile-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Luzox?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for factory-direct sourcing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-accent/50">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
