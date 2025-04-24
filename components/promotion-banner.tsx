import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PromotionBanner() {
  return (
    <div className="elegant-gradient text-white rounded-xl overflow-hidden">
      <div className="container py-10 md:py-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl artistic-title mb-4">Spring Festival Special Offer</h2>
            <p className="mb-6 text-white/80 artistic-subtitle">
              Book any tour package before January 31st and get a 15% discount plus a free traditional Chinese
              calligraphy souvenir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild className="rounded-full">
                <Link href="/tours">View Eligible Tours</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-5xl md:text-6xl artistic-title mb-2">15%</div>
              <div className="text-xl md:text-2xl artistic-subtitle">DISCOUNT</div>
              <div className="text-sm mt-2 text-white/80">Limited time offer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
