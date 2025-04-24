import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our tour with Your Kingdom was the highlight of our trip to China. The guides were knowledgeable and friendly, and the itinerary was perfectly balanced between major attractions and hidden gems.",
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Canada",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The attention to detail was impressive. From hotel selection to restaurant recommendations, everything was top-notch. I especially appreciated the cultural insights our guide provided.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    country: "Australia",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "Shanghai can be overwhelming for first-time visitors, but Your Kingdom made it accessible and enjoyable. The private transportation was comfortable and the pace was perfect for our family.",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.country}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">{testimonial.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
