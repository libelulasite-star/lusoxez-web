"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Zap, Star, MapPin, Award } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { ProductDetailModal } from "./product-detail-modal"

const sampleProducts = [
  {
    id: 1,
    name: "Premium Product A",
    image: "/diverse-products-still-life.png",
    price: 45.0,
    moq: 100,
    rating: 4.8,
    reviews: 234,
    origin: "China",
    certification: ["CE", "RoHS"],
    available: 5000,
    factory: "TechFactory Co.",
  },
  {
    id: 2,
    name: "Quality Product B",
    image: "/diverse-products-still-life.png",
    price: 89.5,
    moq: 500,
    rating: 4.9,
    reviews: 567,
    origin: "Germany",
    certification: ["ISO 9001", "CE"],
    available: 3000,
    factory: "EuroManufacture GmbH",
  },
  {
    id: 3,
    name: "Industrial Product C",
    image: "/diverse-products-still-life.png",
    price: 125.0,
    moq: 200,
    rating: 4.7,
    reviews: 189,
    origin: "Japan",
    certification: ["ISO 9001"],
    available: 2000,
    factory: "Nippon Industries",
  },
  {
    id: 4,
    name: "Eco Product D",
    image: "/diverse-products-still-life.png",
    price: 67.0,
    moq: 50,
    rating: 4.6,
    reviews: 423,
    origin: "USA",
    certification: ["FSC", "GREENGUARD"],
    available: 8000,
    factory: "GreenTech USA",
  },
]

export function CategoryProducts({ categorySlug }: { categorySlug: string }) {
  const { addItem } = useCart()
  const { t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<(typeof sampleProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddToCart = (product: (typeof sampleProducts)[0]) => {
    addItem({
      id: product.id,
      nameKey: "product",
      name: product.name,
      factory: product.factory,
      location: product.origin,
      unitPrice: product.price,
      image: product.image,
      moq: `${product.moq} units`,
    })
  }

  const handleProductClick = (product: (typeof sampleProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="moq-low">MOQ: Low to High</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          <Badge variant="outline" className="text-sm">
            {sampleProducts.length} results
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all group">
            <Link href={`/product/${product.id}`} className="relative block cursor-pointer">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                {t.products.factoryDirect}
              </Badge>
            </Link>

            <div className="p-5">
              <Link href={`/product/${product.id}`}>
                <h3
                  className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{t.filters.origin}:</span>
                  <span className="font-medium">{product.origin}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Certified:</span>
                  <div className="flex gap-1">
                    {product.certification.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground">/ {t.products.unit}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    MOQ: {product.moq} {t.filters.units}
                  </span>
                  <span className="text-muted-foreground">
                    {product.available.toLocaleString()} {t.products.available}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t.products.addToCart}
                </Button>
                <Button className="flex-1 bg-accent hover:bg-accent/90" onClick={() => handleAddToCart(product)}>
                  <Zap className="h-4 w-4 mr-2" />
                  {t.products.buyNow}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
