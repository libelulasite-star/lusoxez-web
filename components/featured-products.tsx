"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Package, ShoppingCart, Zap, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"

const products = [
  {
    id: 1,
    nameKey: "ledLighting",
    qualityKey: "premium",
    factory: "BrightTech Manufacturing",
    location: "Shenzhen, China",
    unitPrice: 45.0,
    quantityAvailable: 5000,
    moq: "100 units",
    rating: 4.8,
    reviews: 234,
    image: "/industrial-led-lights.jpg",
  },
  {
    id: 2,
    nameKey: "cottonTshirts",
    qualityKey: "certified",
    factory: "EcoTextile Factory",
    location: "Mumbai, India",
    unitPrice: 3.5,
    quantityAvailable: 15000,
    moq: "500 units",
    rating: 4.9,
    reviews: 567,
    image: "/cotton-tshirts.jpg",
  },
  {
    id: 3,
    nameKey: "cookwareSet",
    qualityKey: "topRated",
    factory: "Premium Kitchenware Co.",
    location: "Guangzhou, China",
    unitPrice: 28.0,
    quantityAvailable: 3200,
    moq: "200 units",
    rating: 4.7,
    reviews: 189,
    image: "/stainless-steel-cookware.png",
  },
  {
    id: 4,
    nameKey: "solarPanel",
    qualityKey: "verified",
    factory: "GreenEnergy Solutions",
    location: "Berlin, Germany",
    unitPrice: 120.0,
    quantityAvailable: 1500,
    moq: "50 units",
    rating: 4.9,
    reviews: 423,
    image: "/solar-panel-installation.png",
  },
]

export function FeaturedProducts() {
  const { t } = useLanguage()
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      nameKey: product.nameKey,
      name: t.products.productNames[product.nameKey as keyof typeof t.products.productNames],
      factory: product.factory,
      location: product.location,
      unitPrice: product.unitPrice,
      image: product.image,
      moq: product.moq,
    })
  }

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.products.title}</h2>
            <p className="text-muted-foreground">{t.products.subtitle}</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            {t.products.viewAll}
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={t.products.productNames[product.nameKey as keyof typeof t.products.productNames]}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                  {t.products.factoryDirect}
                </Badge>
              </div>

              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-base line-clamp-2 group-hover:text-accent transition-colors">
                  {t.products.productNames[product.nameKey as keyof typeof t.products.productNames]}
                </h3>

                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-accent">
                    {t.products.quality[product.qualityKey as keyof typeof t.products.quality]}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary">{product.factory}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {product.location}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="pt-2 border-t space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">${product.unitPrice.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground">/ {t.products.unit}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Package className="h-4 w-4 text-accent" />
                    <span className="font-medium text-accent">{product.quantityAvailable.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs">{t.products.available}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t.products.moq}: {product.moq}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t.products.addToCart}
                </Button>
                <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Zap className="h-4 w-4 mr-2" />
                  {t.products.buyNow}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            {t.products.viewAll}
          </Button>
        </div>
      </div>
    </section>
  )
}
