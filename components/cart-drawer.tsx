"use client"

import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus, ShoppingBag, Zap } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart()
  const { t } = useLanguage()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t.cart.title} ({totalItems} {totalItems === 1 ? t.cart.item : t.cart.items})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t.cart.empty}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.cart.emptyDescription}</p>
            <Button onClick={closeCart} className="bg-accent hover:bg-accent/90">
              {t.cart.continueShopping}
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg bg-card">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{item.factory}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-accent">${item.unitPrice.toFixed(2)}</span>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.cart.subtotal}</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>{t.cart.total}</span>
                  <span className="text-accent">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                <Zap className="h-5 w-5 mr-2" />
                {t.cart.buyNow}
              </Button>

              <Button variant="outline" className="w-full bg-transparent" onClick={closeCart}>
                {t.cart.continueShopping}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
