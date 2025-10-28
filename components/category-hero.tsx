"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface CategoryHeroProps {
  name: string
  description: string
  heroImage: string
  features: string[]
  totalProducts: number
}

export function CategoryHero({ name, description, heroImage, features, totalProducts }: CategoryHeroProps) {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {totalProducts.toLocaleString()} {t.cart.products}
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{name}</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="flex items-center gap-3 border-border/50 bg-card p-4">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="font-medium text-card-foreground">{feature}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
