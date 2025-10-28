import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Factory, Globe, TrendingDown, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/european-factories-industrial.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Connecting European Factories Directly to the World
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Luzox is revolutionizing B2B commerce by uniting manufacturers across Europe, with a special focus on
              Portugal's rich industrial heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At <span className="font-bold text-accent">Luzox</span>, we believe that exceptional European
                manufacturing should be accessible to everyone, without the burden of excessive intermediary costs and
                complex tax structures. Our platform eliminates unnecessary middlemen, connecting buyers directly with
                trusted factories across Europe.
              </p>
              <p className="text-lg leading-relaxed">
                By focusing on <span className="font-semibold">direct factory-to-buyer commerce</span>, we help
                businesses and consumers access premium European products at fair prices. No hidden markups, no
                complicated supply chains—just transparent, efficient trade that benefits both manufacturers and buyers.
              </p>
              <p className="text-lg leading-relaxed">
                Portugal, with its centuries-old tradition of craftsmanship and modern manufacturing excellence, stands
                at the heart of our vision. From textiles to electronics, furniture to industrial equipment, Portuguese
                factories represent quality, innovation, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Why Choose Luzox?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <TrendingDown className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Lower Costs</h3>
              <p className="text-muted-foreground">
                Eliminate intermediary markups and access factory-direct pricing. Save up to 40% compared to traditional
                distribution channels.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Reduced Taxes & Fees</h3>
              <p className="text-muted-foreground">
                Streamlined cross-border trade within Europe means fewer tax complications and reduced administrative
                costs for your business.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Factory className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Direct Factory Access</h3>
              <p className="text-muted-foreground">
                Connect directly with verified European manufacturers. Build relationships, customize orders, and ensure
                quality control from the source.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">European Quality</h3>
              <p className="text-muted-foreground">
                Access products that meet strict European manufacturing standards, with certifications and quality
                guarantees you can trust.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Faster Delivery</h3>
              <p className="text-muted-foreground">
                Shorter supply chains mean faster delivery times. Get your products when you need them, without lengthy
                international shipping delays.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Support Local Industry</h3>
              <p className="text-muted-foreground">
                Help preserve European manufacturing jobs and expertise by buying directly from the factories that make
                the products you need.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portugal Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">Why Portugal?</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Portugal has emerged as a manufacturing powerhouse in Europe, combining traditional craftsmanship with
                cutting-edge technology. From the textile mills of the north to the furniture workshops of the center,
                Portuguese factories deliver exceptional quality at competitive prices.
              </p>
              <p className="text-lg leading-relaxed">
                The country's strategic location, skilled workforce, and commitment to innovation make it an ideal hub
                for European manufacturing. By partnering with Portuguese factories through Luzox, you gain access to
                this excellence while supporting sustainable, local production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Supply Chain?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Join thousands of businesses already benefiting from direct factory access.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">Browse Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
