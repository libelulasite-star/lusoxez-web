import { Card } from "@/components/ui/card"
import { Shirt, Smartphone, Home, Wrench, Zap, Package } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    icon: Smartphone,
    count: "12,450",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Textiles & Apparel",
    slug: "textiles-apparel",
    icon: Shirt,
    count: "8,320",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    name: "Home & Furniture",
    slug: "home-furniture",
    icon: Home,
    count: "6,780",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    name: "Industrial Equipment",
    slug: "industrial-equipment",
    icon: Wrench,
    count: "4,560",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    name: "Energy & Power",
    slug: "energy-power",
    icon: Zap,
    count: "3,210",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    name: "Packaging",
    slug: "packaging",
    icon: Package,
    count: "5,890",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover products from verified factories across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={`/category/${category.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-accent">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-4 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.count} products</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
