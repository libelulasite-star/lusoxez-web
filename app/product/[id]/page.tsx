"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingCart,
  Zap,
  Star,
  MapPin,
  Award,
  Package,
  Shield,
  Truck,
  ChevronLeft,
  Heart,
  Share2,
} from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

// Sample product data - in a real app, this would come from an API
const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Premium Product A",
    image: "/diverse-products-still-life.png",
    images: [
      "/diverse-products-still-life.png",
      "/diverse-products-still-life.png",
      "/diverse-products-still-life.png",
      "/diverse-products-still-life.png",
    ],
    price: 45.0,
    moq: 100,
    rating: 4.8,
    reviews: 234,
    origin: "China",
    certification: ["CE", "RoHS"],
    available: 5000,
    factory: "TechFactory Co.",
    description:
      "High-quality premium product manufactured with the finest materials and cutting-edge technology. This product meets all international quality standards and comes with full certification documentation. Perfect for both commercial and industrial applications.",
    specifications: {
      Material: "Premium Grade Steel",
      Weight: "2.5 kg",
      Dimensions: "30 x 20 x 15 cm",
      Warranty: "12 months",
      "Lead Time": "7-14 days",
      Packaging: "Individual box packaging",
    },
    customerReviews: [
      {
        name: "John Smith",
        rating: 5,
        date: "2025-01-15",
        comment:
          "Excellent quality product. Exactly as described. Fast shipping and great communication with the factory.",
      },
      {
        name: "Maria Garcia",
        rating: 4,
        date: "2025-01-10",
        comment: "Good product overall. Quality is solid and price is competitive. Would recommend for bulk orders.",
      },
      {
        name: "Hans Mueller",
        rating: 5,
        date: "2025-01-05",
        comment: "Outstanding! We ordered 500 units and every single one met our quality standards. Will order again.",
      },
    ],
  },
  "2": {
    id: 2,
    name: "Quality Product B",
    image: "/diverse-products-still-life.png",
    images: ["/diverse-products-still-life.png"],
    price: 89.5,
    moq: 500,
    rating: 4.9,
    reviews: 567,
    origin: "Germany",
    certification: ["ISO 9001", "CE"],
    available: 3000,
    factory: "EuroManufacture GmbH",
    description: "Premium European quality product with exceptional durability and performance.",
    specifications: {
      Material: "Aluminum Alloy",
      Weight: "1.8 kg",
      Dimensions: "25 x 18 x 12 cm",
      Warranty: "24 months",
      "Lead Time": "10-20 days",
      Packaging: "Eco-friendly packaging",
    },
    customerReviews: [],
  },
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = productData[resolvedParams.id] || productData["1"]
  const { addItem } = useCart()
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(product.moq)

  const handleAddToCart = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/categories"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {t.nav.categories}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                {t.products.factoryDirect}
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-accent" : "border-border hover:border-accent/50"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-3 text-balance">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-lg font-semibold ml-2">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} {t.productDetail.customerReviews})
                </span>
              </div>
            </div>

            <Separator />

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-accent">${product.price.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground">/ {t.products.unit}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>
                    {t.productDetail.minimumOrder}: {product.moq} {t.filters.units}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>
                    {product.available.toLocaleString()} {t.productDetail.unitsAvailable}
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Factory & Origin Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <div>
                  <span className="text-sm text-muted-foreground">{t.productDetail.verifiedFactory}</span>
                  <p className="font-semibold">{product.factory}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <span className="text-sm text-muted-foreground">{t.filters.origin}</span>
                  <p className="font-semibold">{product.origin}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <span className="text-sm text-muted-foreground">{t.productDetail.certifications}</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {product.certification.map((cert: string) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-accent" />
                <div>
                  <span className="text-sm text-muted-foreground">{t.productDetail.shippingTime}</span>
                  <p className="font-semibold">7-14 {t.productDetail.businessDays}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button onClick={handleAddToCart} variant="outline" size="lg" className="flex-1 bg-transparent">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t.products.addToCart}
                </Button>
                <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-accent hover:bg-accent/90">
                  <Zap className="h-5 w-5 mr-2" />
                  {t.products.buyNow}
                </Button>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="space-y-8">
          {/* Description */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">{t.productDetail.description}</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </Card>

          {/* Specifications */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">{t.productDetail.specifications}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value as string}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Customer Reviews */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">{t.productDetail.customerReviews}</h2>
            {product.customerReviews.length > 0 ? (
              <div className="space-y-6">
                {product.customerReviews.map((review: any, idx: number) => (
                  <div key={idx} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="font-semibold text-accent">{review.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No reviews yet. Be the first to review this product!
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
