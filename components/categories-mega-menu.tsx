"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Shirt, Smartphone, Home, Wrench, Zap, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const categories = [
  {
    name: "electronics",
    slug: "electronics",
    icon: Smartphone,
    subcategories: ["smartphones", "computers", "audio", "cameras", "accessories"],
  },
  {
    name: "textilesApparel",
    slug: "textiles-apparel",
    icon: Shirt,
    subcategories: ["menClothing", "womenClothing", "childrenClothing", "sportswear", "accessories"],
  },
  {
    name: "homeFurniture",
    slug: "home-furniture",
    icon: Home,
    subcategories: ["livingRoom", "bedroom", "kitchen", "outdoor", "decor"],
  },
  {
    name: "industrialEquipment",
    slug: "industrial-equipment",
    icon: Wrench,
    subcategories: ["machinery", "tools", "safety", "automation", "materials"],
  },
  {
    name: "energyPower",
    slug: "energy-power",
    icon: Zap,
    subcategories: ["solar", "batteries", "generators", "led", "renewable"],
  },
  {
    name: "packaging",
    slug: "packaging",
    icon: Package,
    subcategories: ["boxes", "bags", "labels", "protective", "custom"],
  },
]

export function CategoriesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="ghost" className="gap-2 font-semibold text-base hover:text-accent hover:bg-accent/10">
        {t.nav.allCategories}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[800px] bg-background border-2 border-accent/20 rounded-lg shadow-2xl z-50 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.slug}
                  className="p-6 hover:bg-accent/5 transition-colors border-r border-b border-muted last:border-r-0"
                >
                  <Link href={`/category/${category.slug}`} className="flex items-center gap-3 mb-4 group">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm group-hover:text-accent transition-colors">
                      {t.categories[category.name as keyof typeof t.categories]}
                    </h3>
                  </Link>
                  <ul className="space-y-2">
                    {category.subcategories.map((sub) => (
                      <li key={sub}>
                        <Link
                          href={`/category/${category.slug}?sub=${sub}`}
                          className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 transition-all inline-block"
                        >
                          {
                            t.subcategories[category.name as keyof typeof t.subcategories][
                              sub as keyof typeof t.subcategories.electronics
                            ]
                          }
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
