import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star } from "lucide-react"

const tours = [
  {
    id: 1,
    title: "Shanghai Highlights Tour",
    image: "/placeholder.svg?height=300&width=500",
    duration: "1 Day",
    location: "Shanghai",
    rating: 4.9,
    reviewCount: 128,
    price: 99,
    popular: true,
  },
  {
    id: 2,
    title: "Shanghai & Suzhou 3-Day Experience",
    image: "/placeholder.svg?height=300&width=500",
    duration: "3 Days",
    location: "Shanghai, Suzhou",
    rating: 4.8,
    reviewCount: 96,
    price: 299,
    popular: false,
  },
  {
    id: 3,
    title: "Shanghai Cultural Immersion",
    image: "/placeholder.svg?height=300&width=500",
    duration: "2 Days",
    location: "Shanghai",
    rating: 4.7,
    reviewCount: 84,
    price: 189,
    popular: true,
  },
  {
    id: 4,
    title: "Shanghai & Hangzhou Combo",
    image: "/placeholder.svg?height=300&width=500",
    duration: "4 Days",
    location: "Shanghai, Hangzhou",
    rating: 4.9,
    reviewCount: 72,
    price: 399,
    popular: false,
  },
]

export default function FeaturedTours() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tours.map((tour) => (
        <Card key={tour.id} className="overflow-hidden group premium-card border-0">
          <div className="relative h-48">
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {tour.popular && <Badge className="absolute top-2 right-2 bg-primary rounded-full px-3">Popular</Badge>}
          </div>
          <CardHeader className="p-4">
            <Link href={`/tours/${tour.id}`} className="hover:underline">
              <h3 className="font-bold text-lg line-clamp-2">{tour.title}</h3>
            </Link>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{tour.rating}</span>
              <span className="text-muted-foreground text-sm">({tour.reviewCount} reviews)</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div>
              <span className="text-xl font-bold">${tour.price}</span>
              <span className="text-muted-foreground text-sm"> / person</span>
            </div>
            <Button size="sm" asChild className="rounded-full">
              <Link href={`/tours/${tour.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
