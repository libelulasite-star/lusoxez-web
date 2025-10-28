import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryFilters } from "@/components/category-filters"
import { CategoryProducts } from "@/components/category-products"
import { CategoryHero } from "@/components/category-hero"
import { notFound } from "next/navigation"

const categories = {
  electronics: {
    name: "Electronics",
    totalProducts: 12450,
    description: "Cutting-edge electronic components and devices from Europe's leading manufacturers",
    heroImage: "/electronics-manufacturing.jpg",
    features: ["CE Certified Components", "Latest Technology", "Quality Assurance", "Technical Support"],
  },
  "textiles-apparel": {
    name: "Textiles & Apparel",
    totalProducts: 8320,
    description: "Premium fabrics and clothing from Portugal's renowned textile industry",
    heroImage: "/textiles-factory.jpg",
    features: ["Sustainable Materials", "European Craftsmanship", "Custom Orders", "Fast Production"],
  },
  "home-furniture": {
    name: "Home & Furniture",
    totalProducts: 6780,
    description: "Elegant furniture and home goods crafted by European artisans",
    heroImage: "/furniture-workshop.jpg",
    features: ["Handcrafted Quality", "Custom Designs", "Sustainable Wood", "Modern & Classic Styles"],
  },
  "industrial-equipment": {
    name: "Industrial Equipment",
    totalProducts: 4560,
    description: "Heavy-duty machinery and industrial solutions for your business",
    heroImage: "/industrial-machinery.jpg",
    features: ["ISO Certified", "Robust Engineering", "After-Sales Service", "Global Shipping"],
  },
  "energy-power": {
    name: "Energy & Power",
    totalProducts: 3210,
    description: "Renewable energy solutions and power systems from European innovators",
    heroImage: "/solar-energy.jpg",
    features: ["Green Technology", "High Efficiency", "Long Warranty", "Expert Installation"],
  },
  packaging: {
    name: "Packaging",
    totalProducts: 5890,
    description: "Eco-friendly packaging solutions for modern businesses",
    heroImage: "/packaging-materials.jpg",
    features: ["Recyclable Materials", "Custom Branding", "Bulk Discounts", "Fast Turnaround"],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <CategoryHero
        name={category.name}
        description={category.description}
        heroImage={category.heroImage}
        features={category.features}
        totalProducts={category.totalProducts}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <CategoryFilters categorySlug={params.slug} />
          </aside>
          <div className="lg:col-span-3">
            <CategoryProducts categorySlug={params.slug} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
