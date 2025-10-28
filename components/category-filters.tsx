"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

const filterConfigs = {
  electronics: {
    filters: [
      {
        title: "Brand",
        options: ["Samsung", "Apple", "Huawei", "Xiaomi", "LG", "Sony"],
      },
      {
        title: "Warranty",
        options: ["1 Year", "2 Years", "3 Years", "5 Years"],
      },
      {
        title: "Certification",
        options: ["CE", "FCC", "RoHS", "ISO 9001", "UL"],
      },
      {
        title: "Origin",
        options: ["China", "South Korea", "Taiwan", "Japan", "USA"],
      },
      {
        title: "Screen Size",
        options: ['5"-6"', '6"-7"', '7"-10"', '10"+'],
      },
    ],
  },
  "textiles-apparel": {
    filters: [
      {
        title: "Size",
        options: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
      {
        title: "Color",
        options: ["Black", "White", "Blue", "Red", "Green", "Yellow", "Gray"],
      },
      {
        title: "Material",
        options: ["Cotton", "Polyester", "Silk", "Wool", "Linen", "Denim"],
      },
      {
        title: "Gender",
        options: ["Men", "Women", "Unisex", "Kids"],
      },
      {
        title: "Origin",
        options: ["China", "Bangladesh", "Vietnam", "India", "Turkey"],
      },
      {
        title: "Certification",
        options: ["OEKO-TEX", "GOTS", "Fair Trade", "ISO 9001"],
      },
    ],
  },
  "home-furniture": {
    filters: [
      {
        title: "Dimensions",
        options: ["Small (< 100cm)", "Medium (100-200cm)", "Large (200-300cm)", "Extra Large (> 300cm)"],
      },
      {
        title: "Material",
        options: ["Wood", "Metal", "Plastic", "Glass", "Fabric", "Leather"],
      },
      {
        title: "Style",
        options: ["Modern", "Classic", "Minimalist", "Industrial", "Scandinavian"],
      },
      {
        title: "Color",
        options: ["Natural Wood", "White", "Black", "Gray", "Brown", "Beige"],
      },
      {
        title: "Origin",
        options: ["China", "Italy", "Germany", "Vietnam", "Malaysia"],
      },
      {
        title: "Certification",
        options: ["FSC", "CARB", "ISO 14001", "GREENGUARD"],
      },
    ],
  },
  "industrial-equipment": {
    filters: [
      {
        title: "Power Capacity",
        options: ["< 10kW", "10-50kW", "50-100kW", "100-500kW", "> 500kW"],
      },
      {
        title: "Type",
        options: ["Machinery", "Tools", "Pumps", "Compressors", "Generators"],
      },
      {
        title: "Certification",
        options: ["CE", "ISO 9001", "ISO 14001", "ATEX", "UL"],
      },
      {
        title: "Origin",
        options: ["China", "Germany", "USA", "Japan", "Italy"],
      },
      {
        title: "Warranty",
        options: ["1 Year", "2 Years", "3 Years", "5 Years"],
      },
    ],
  },
  "energy-power": {
    filters: [
      {
        title: "Power Output",
        options: ["< 100W", "100W-1kW", "1kW-10kW", "10kW-100kW", "> 100kW"],
      },
      {
        title: "Type",
        options: ["Solar Panels", "Batteries", "Inverters", "Generators", "Wind Turbines"],
      },
      {
        title: "Certification",
        options: ["CE", "UL", "TÜV", "IEC", "ISO 9001"],
      },
      {
        title: "Origin",
        options: ["China", "Germany", "USA", "Japan", "South Korea"],
      },
      {
        title: "Warranty",
        options: ["5 Years", "10 Years", "15 Years", "20 Years", "25 Years"],
      },
    ],
  },
  packaging: {
    filters: [
      {
        title: "Material",
        options: ["Cardboard", "Plastic", "Paper", "Metal", "Glass", "Biodegradable"],
      },
      {
        title: "Size",
        options: ["Small (< 10cm)", "Medium (10-30cm)", "Large (30-50cm)", "Extra Large (> 50cm)"],
      },
      {
        title: "Type",
        options: ["Boxes", "Bags", "Bottles", "Containers", "Wrapping"],
      },
      {
        title: "Certification",
        options: ["FSC", "Recyclable", "Biodegradable", "FDA Approved"],
      },
      {
        title: "Origin",
        options: ["China", "USA", "Germany", "India", "Vietnam"],
      },
    ],
  },
}

interface FilterSectionProps {
  title: string
  options: string[]
}

function FilterSection({ title, options }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border-b border-border pb-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-accent transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={`${title}-${option}`} />
              <Label
                htmlFor={`${title}-${option}`}
                className="text-sm font-normal cursor-pointer hover:text-accent transition-colors"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function CategoryFilters({ categorySlug }: { categorySlug: string }) {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const config = filterConfigs[categorySlug as keyof typeof filterConfigs]

  if (!config) {
    return null
  }

  const filteredFilters = config.filters.filter((filter) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      filter.title.toLowerCase().includes(query) ||
      filter.options.some((option) => option.toLowerCase().includes(query))
    )
  })

  return (
    <Card className="p-6 sticky top-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">{t.filters.title}</h2>
        <Badge variant="secondary" className="text-xs">
          {t.filters.clearAll}
        </Badge>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t.filters.searchFilters}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-3">{t.filters.priceRange}</h3>
        <Slider defaultValue={[0, 100]} max={100} step={1} className="mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$0</span>
          <span>$10,000+</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-3">{t.filters.moq}</h3>
        <Slider defaultValue={[0, 100]} max={1000} step={10} className="mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1 {t.filters.units}</span>
          <span>1000+ {t.filters.units}</span>
        </div>
      </div>

      {filteredFilters.map((filter) => (
        <FilterSection key={filter.title} title={filter.title} options={filter.options} />
      ))}
    </Card>
  )
}
