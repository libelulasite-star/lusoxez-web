"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Zap, Star, MapPin, Award, Package, Clock, Shield } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"

interface Product {
  id: number
  name: string
  image: string
  price: number
  moq: number
  rating: number
  reviews: number
  origin: string
  certification: string[]
  available: number
  factory: string
}

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const { addItem } = useCart()
  const { t } = useLanguage()

  if (!product) return null

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-border">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-96 object-cover" />
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                {t.products.factoryDirect}
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-lg font-semibold ml-1">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} {t.productDetail.customerReviews})
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</span>
                <span className="text-muted-foreground">/ {t.products.unit}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>
                  {t.productDetail.minimumOrder}: {product.moq} {t.filters.units}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>
                  {product.available.toLocaleString()} {t.productDetail.unitsAvailable}
                </span>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{t.filters.origin}:</span>
                <span>{product.origin}</span>
              </div>

              <div className="flex items-start gap-2">
                <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <span className="font-medium">{t.productDetail.certifications}:</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {product.certification.map((cert) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{t.productDetail.verifiedFactory}:</span>
                <span>{product.factory}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{t.productDetail.shippingTime}:</span>
                <span>7-14 {t.productDetail.businessDays}</span>
              </div>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button onClick={handleAddToCart} variant="outline" className="flex-1 bg-transparent">
                <ShoppingCart className="h-4 w-4 mr-2" />
                {t.products.addToCart}
              </Button>
              <Button onClick={handleAddToCart} className="flex-1 bg-accent hover:bg-accent/90">
                <Zap className="h-4 w-4 mr-2" />
                {t.products.buyNow}
              </Button>
            </div>

            <Button variant="ghost" className="w-full" onClick={onClose}>
              {t.productDetail.closeModal}
            </Button>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t.productDetail.description}</h3>
            <p className="text-muted-foreground">
              High-quality {product.name.toLowerCase()} manufactured by {product.factory}. This product meets all
              international quality standards and comes with full certification documentation.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.productDetail.specifications}</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">{t.filters.origin}:</span>
                <span className="ml-2 font-medium">{product.origin}</span>
              </div>
              <div>
                <span className="text-muted-foreground">MOQ:</span>
                <span className="ml-2 font-medium">{product.moq} units</span>
              </div>
              <div>
                <span className="text-muted-foreground">{t.productDetail.warranty}:</span>
                <span className="ml-2 font-medium">12 months</span>
              </div>
              <div>
                <span className="text-muted-foreground">{t.filters.certification}:</span>
                <span className="ml-2 font-medium">{product.certification.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
