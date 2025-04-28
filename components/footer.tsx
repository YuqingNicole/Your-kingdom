import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight">Your Kingdom</h3>
            <p className="text-sm text-muted-foreground">Premium inbound travel experiences in Shanghai and beyond.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-primary">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px] rounded-full h-9" />
              <Button type="submit" size="sm" className="rounded-full h-9">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Kingdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
