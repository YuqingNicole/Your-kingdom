import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const destinations = [
  {
    id: "shanghai",
    name: "Shanghai",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Experience the perfect blend of traditional Chinese culture and modern innovation in China's most dynamic city.",
    highlights: ["The Bund", "Yu Garden", "Shanghai Tower", "French Concession", "Zhujiajiao Water Town"],
  },
  {
    id: "suzhou",
    name: "Suzhou",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Known as the 'Venice of the East', Suzhou is famous for its classical gardens, ancient canals, and silk production.",
    highlights: ["Humble Administrator's Garden", "Tiger Hill", "Pingjiang Road", "Suzhou Museum", "Tongli Water Town"],
  },
  {
    id: "hangzhou",
    name: "Hangzhou",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Home to the stunning West Lake, Hangzhou has been described by Marco Polo as 'the finest and most splendid city in the world'.",
    highlights: ["West Lake", "Lingyin Temple", "Longjing Tea Plantation", "Hefang Street", "Xixi Wetland"],
  },
  {
    id: "nanjing",
    name: "Nanjing",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "With over 2,500 years of history, Nanjing offers a deep dive into China's rich cultural heritage and modern development.",
    highlights: [
      "Ming Xiaoling Mausoleum",
      "Nanjing City Wall",
      "Purple Mountain",
      "Confucius Temple",
      "Nanjing Museum",
    ],
  },
]

export default function DestinationsPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl artistic-title mb-4 artistic-heading">Explore Our Destinations</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto artistic-subtitle">
          Discover the most captivating destinations in Eastern China, each offering unique experiences and cultural
          treasures
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden premium-card border-0">
            <div className="relative h-64">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h2 className="text-2xl artistic-title text-white">{destination.name}</h2>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">{destination.description}</p>
              <h3 className="font-medium mb-2 artistic-subtitle">Highlights:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mb-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild className="rounded-full">
                <Link href={`/destinations/${destination.id}`}>Explore {destination.name}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl artistic-title mb-4">Need Help Planning Your Trip?</h2>
            <p className="text-muted-foreground mb-6 artistic-subtitle">
              Our travel specialists can create a customized itinerary based on your interests, timeframe, and budget.
              Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full">Contact a Specialist</Button>
              <Button variant="outline" className="rounded-full">
                View Sample Itineraries
              </Button>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Travel planning" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
