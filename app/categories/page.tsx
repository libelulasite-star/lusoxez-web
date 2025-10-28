"use client"

import { Card } from "@/components/ui/card"
import { Shirt, Smartphone, Home, Wrench, Zap, Package } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const categories = [
  {
    slug: "electronics",
    icon: Smartphone,
    count: "12,450",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "/electronics-manufacturing.jpg",
  },
  {
    slug: "textiles-apparel",
    icon: Shirt,
    count: "8,320",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    image: "/textiles-factory.jpg",
  },
  {
    slug: "home-furniture",
    icon: Home,
    count: "6,780",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    image: "/furniture-workshop.jpg",
  },
  {
    slug: "industrial-equipment",
    icon: Wrench,
    count: "4,560",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    image: "/industrial-machinery.jpg",
  },
  {
    slug: "energy-power",
    icon: Zap,
    count: "3,210",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    image: "/solar-energy.jpg",
  },
  {
    slug: "packaging",
    icon: Package,
    count: "5,890",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    image: "/packaging-materials.jpg",
  },
]

export default function CategoriesPage() {
  const { t } = useLanguage()

  const getCategoryName = (slug: string) => {
    switch (slug) {
      case "electronics":
        return t.categories.electronics
      case "textiles-apparel":
        return t.categories.textilesApparel
      case "home-furniture":
        return t.categories.homeFurniture
      case "industrial-equipment":
        return t.categories.industrialEquipment
      case "energy-power":
        return t.categories.energyPower
      case "packaging":
        return t.categories.packaging
      default:
        return slug
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t.categories.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{t.categories.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={getCategoryName(category.slug)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div
                        className={`absolute bottom-4 left-4 p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {getCategoryName(category.slug)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} {t.categories.productsCount}
                      </p>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
