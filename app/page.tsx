import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Star, Users } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import FeaturedTours from "@/components/featured-tours"
import PromotionBanner from "@/components/promotion-banner"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <HeroCarousel />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
          <div className="bg-background/70 backdrop-blur-sm p-8 md:p-12 rounded-xl max-w-3xl">
            <h1 className="text-3xl md:text-5xl artistic-title mb-4">Discover the Magic of Shanghai</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto artistic-subtitle">
              Immerse yourself in the perfect blend of tradition and modernity with our curated travel experiences
            </p>
            <Button size="lg" className="text-base rounded-full px-8">
              Explore Tours
            </Button>
          </div>
        </div>
      </section>

      {/* 其余代码保持不变 */}
      {/* Search Section */}
      <section className="container">
        <div className="bg-muted rounded-xl p-6 md:p-8">
          <h2 className="text-2xl artistic-title mb-6 text-center artistic-heading">
            Find Your Perfect Shanghai Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Destination</label>
              <Select defaultValue="shanghai">
                <SelectTrigger className="rounded-full">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shanghai">Shanghai</SelectItem>
                  <SelectItem value="suzhou">Suzhou</SelectItem>
                  <SelectItem value="hangzhou">Hangzhou</SelectItem>
                  <SelectItem value="nanjing">Nanjing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Departure Date</label>
              <div className="relative">
                <Input type="date" className="w-full rounded-full" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Duration (Days)</label>
              <Select defaultValue="3">
                <SelectTrigger className="rounded-full">
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Day</SelectItem>
                  <SelectItem value="2">2 Days</SelectItem>
                  <SelectItem value="3">3 Days</SelectItem>
                  <SelectItem value="5">5 Days</SelectItem>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="10">10+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full rounded-full">Search Tours</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="container">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="text-3xl artistic-title artistic-heading">Popular Tour Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto artistic-subtitle">
            Discover our most sought-after experiences in and around Shanghai
          </p>
        </div>
        <FeaturedTours />
      </section>

      {/* Promotion Banner */}
      <section className="container">
        <PromotionBanner />
      </section>

      {/* Why Choose Us */}
      <section className="container">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="text-3xl artistic-title artistic-heading">Why Choose Your Kingdom</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto artistic-subtitle">
            We provide exceptional travel experiences with attention to every detail
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="premium-card border-0">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="artistic-subtitle">Local Expertise</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Our guides are local experts who provide authentic insights into Shanghai's culture and history.
              </p>
            </CardContent>
          </Card>
          <Card className="premium-card border-0">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="artistic-subtitle">Premium Service</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                We pride ourselves on attention to detail and personalized service for every guest.
              </p>
            </CardContent>
          </Card>
          <Card className="premium-card border-0">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="artistic-subtitle">Hassle-Free Travel</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                From visa assistance to transportation, we handle all the details so you can focus on enjoying your
                journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="elegant-gradient rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl artistic-title mb-4">Ready to Experience Shanghai?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80 artistic-subtitle">
            Contact our travel specialists to create your perfect itinerary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
              Browse Tours
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
