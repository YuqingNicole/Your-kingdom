import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, Users, Calendar, Hotel, Bus, Check, X } from "lucide-react"

// This would normally come from a database or API
const getTour = (id: string) => {
  // 数据同步自 featured-tours.tsx，id: 5, 6, 7
  const tours = [
    {
      id: 5,
      title: "Xiaoshao Ancient Road Symphony with Blue",
      images: [
        "/images/ep1 copy/661744349108_.pic_hd.jpg",
        "/images/ep1 copy/681744349110_.pic_hd.jpg",
        "/images/ep1 copy/691744349111_.pic_hd.jpg",
        "/images/ep1 copy/701744349111_.pic_hd.jpg",
        "/images/ep1 copy/711744349112_.pic_hd.jpg",
        "/images/ep1 copy/721744350365_.pic_hd.jpg"
      ],
      duration: "One-day trip",
      location: "Xiaoshan District, Zhejiang",
      rating: 4.8,
      reviewCount: 12,
      price: 299,
      description: `Moss-Covered Path · A Literary Pilgrimage\nWander along this hidden trail in the heart of Jiangnan’s waterways, where relics like the Southern Song Imperial Trail and Caoshan Temple (est. 964 CE) beckon you to explore the ancient stories of scholars and emperors.\n\nMillennium Military Path · Echoes of History\nWalk the path where the Wu-Yue rivalry of the Spring and Autumn period once raged, straddling Xiaoshan and Shaoxing. Feel the echoes of ancient battles and the fusion of two rich cultures as you journey through history.\n\nTales of Plum Blossoms · Celebrating Ephemeral Beauty\nIn this enchanting place, plum blossoms bloom like poetry. Varieties such as Gongfen (Palace Pink), Zhusha (Cinnabar Red), Lü’e (Jade Calyx), Yudie (Jade Butterfly), and Meiren Mei (Beauty Plum) take turns gracing the landscape, each one a fleeting masterpiece, waiting to bloom again in glory.`,
      itinerary: [
        {
          day: 1,
          title: "Journey of Sincerity & Ancient Temples",
          description: "Depart from Shanghai, explore Liandong Village, mossy stone steps, Yunmen Temple, Caoshan Temple, and Kanpo Ridge Boundary Monument. Enjoy King Yue Zen Tea under a ginkgo tree.",
          activities: [
            "07:30 | Depart promptly at 7:30 AM in the center of Shanghai. The journey takes approximately 3 hours, including a 25-minute rest stop at a service area. Onboard briefing by the tour guide.",
            "11:00 | Arrive in Xiaoshan. Embark on the 'Journey of Sincerity,' starting from Liandong Village. The first leg follows the ancient secret trail used by the Yue army during their night raid against the Wu Kingdom in the Spring and Autumn period, where moss-covered stone steps whisper tales of history. Pass through cultural landmarks such as the Eastern Jin Dynasty-era Yunmen Temple and Northern Song Dynasty-era Caoshan Temple. Pause to savor the 'King Yue Zen Tea' beneath a thousand-year-old ginkgo tree. Ascend to the summit of Kanpo Ridge Boundary Monument, where you stand on one foot in Xiaoshan and the other in Shaoxing.",
            "16:30 | Arrive at Jishan Plum Garden. Immerse yourself in the ethereal charm of lingering plum blossoms, capturing the poetic beauty of fading petals.",
            "18:30 | Conclude the journey and return to Shanghai."
          ]
        }
      ],
      included: [
        "Transportation: Comfortable luxury bus, driver's road and bridge fuel parking fees, etc",
        "Material: Equip with emergency medical supplies",
        "Service: Full bilingual team leader, activity planning and organization fees",
        "Personal protection: Outdoor high-value 300000 yuan insurance"
      ],
      notIncluded: [
        "Lunch"
      ],
      notice: [
        "Travel notification: We will send it to you no later than 1 day before departure. If you have not received it, please contact our staff. The gathering time, location, service personnel and other information shall be subject to the 'Travel Notice'.",
        "Reservation restrictions: Individuals with cardiovascular and cerebrovascular diseases, a history of heart disease, pregnant women, and others with physical disabilities are advised to avoid participating in outdoor hiking activities. Elderly and minors aged 8-55 are required to participate with a guardian and report their travel status in advance.",
        "Event equipment: This event is a light hiking, and it is recommended to bring basic equipment such as hiking poles and anti slip shoes",
        "Pets must be brought in advance and a cleaning fee of 50 yuan must be paid"
      ],
      extra: "To protect the outdoor ecological environment, please respect nature and not be reckless.",
      transportation: {
        type: "Tour Bus",
        description: "Air-conditioned bus with professional driver for all transfers and sightseeing."
      },
      reviews: [
        {
          id: 1,
          name: "Guest A",
          country: "China",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 5,
          date: "April 2025",
          text: "Wonderful experience, great guide and beautiful scenery!"
        },
        {
          id: 2,
          name: "Guest B",
          country: "USA",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 4,
          date: "March 2025",
          text: "Very enjoyable trip. Will recommend to friends."
        }
      ],
      startDates: [
        "2025-05-01",
        "2025-05-15",
        "2025-06-01"
      ],
      maxGroupSize: 20
    },
    {
      id: 6,
      title: "Ascend to Panoramic Vistas of Masterpiece",
      images: [
        "/images/ep2 copy/3.jpg",
        "/images/ep2 copy/6.jpg"
      ],
      duration: "One-day trip",
      location: "Shaoxing, Zhejiang",
      rating: 4.7,
      reviewCount: 18,
      price: 229,
      popular: true,
      description: `Longmen Waterfall Secret Realm Hike\nEmbark on an exciting adventure to "East China's No.1 Waterfall," Longmen Waterfall. Hike 3 kilometers along the stream and feel the thunderous roar as the 30-meter waterfall crashes down.\n\nXingmei Jian Mountain Grandeur Adventure\nConquer Fuyang's highest peak, Xingmei Jian (1067 meters)! From the summit, enjoy panoramic views of the majestic mountains and the dance of the sea of clouds. This 12-kilometer loop trail offers moderate difficulty with an elevation gain of 1000 meters, perfect for those seeking adventure and nature's embrace.\n\nLongmen Ancient Town Cultural Stroll\nStep into the ancient town of Longmen, a place rich in history. Wander along the stone-paved streets, uncover the echoes of the Three Kingdoms era, and savor the authentic taste of local intangible heritage—handmade oil gluten. Immerse yourself in a unique blend of tradition and modern charm.`,
      itinerary: [
        {
          day: 1,
          title: "Longmen Waterfall & Xingmei Jian Adventure",
          description: "Depart from Shanghai, hike Longmen Waterfall, summit Xingmei Jian, explore Longmen Ancient Town, return to Shanghai.",
          activities: [
            "07:30 | Depart promptly at 7:30 AM in the center of Shanghai.",
            "10:30 | Arrive at Longmen Waterfall, embark on our streamside hike through cascading wonders.",
            "13:30 | Conquer Xingmei Peak's summit, savor breathtaking panoramic mountainscapes.",
            "18:00 | Return to Shanghai."
          ]
        }
      ],
      included: [
        "Transportation: Comfortable luxury bus, driver's road and bridge fuel parking fees, etc",
        "Material: Equip with emergency medical supplies",
        "Service: Full bilingual team leader, activity planning and organization fees",
        "Personal protection: Outdoor high-value 300,000 yuan insurance"
      ],
      notIncluded: [
        "Lunch"
      ],
      notice: [
        "Travel notification: We will send it to you no later than 1 day before departure. If you have not received it, please contact our staff. The gathering time, location, service personnel and other information shall be subject to the 'Travel Notice'.",
        "Reservation restrictions: Individuals with cardiovascular and cerebrovascular diseases, a history of heart disease, pregnant women, and others with physical disabilities are advised to avoid participating in outdoor hiking activities. Elderly and minors aged 8-55 are required to participate with a guardian and report their travel status in advance.",
        "Event equipment: This event is a light hiking, and it is recommended to bring basic equipment such as hiking poles and anti slip shoes",
        "Pets must be brought in advance and a cleaning fee of 50 yuan must be paid"
      ],
      extra: "To protect the outdoor ecological environment, please respect nature and not be reckless.",
      transportation: {
        type: "Tour Bus",
        description: "Air-conditioned bus with professional driver for all transfers and sightseeing."
      },
      reviews: [
        {
          id: 1,
          name: "Guest A",
          country: "China",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 5,
          date: "April 2025",
          text: "Wonderful experience, great guide and beautiful scenery!"
        },
        {
          id: 2,
          name: "Guest B",
          country: "USA",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 4,
          date: "March 2025",
          text: "Very enjoyable trip. Will recommend to friends."
        }
      ],
      startDates: [
        "2025-05-01",
        "2025-05-15",
        "2025-06-01"
      ],
      maxGroupSize: 20
    },
    {
      id: 7,
      title: "Encountering Fuzhi Mountain",
      images: [
        "/images/ep3 copy/1.jpg",
        "/images/ep3 copy/2.jpg",
        "/images/ep3 copy/3.jpg",
        "/images/ep3 copy/4.jpg"
      ],
      duration: "One-day trip",
      location: "Shengzhou, Shaoxing, Zhejiang",
      rating: 4.6,
      reviewCount: 5,
      price: 249,
      description: `Millennium Terraces · A Witness to Golden Agricultural Culture\nThough it’s not Wuyuan, the most magnificent rapeseed flower sea in Jiangnan can be found on the northern slope of Fuzhi Mountain! These ancient terraces, stretching across 2,300 acres, were built by generations of local farmers who shaped them to fit the natural terrain. The golden fields cascade down from the mountainside, creating a giant oil painting effect, surrounded by mist and clouds.\n\nGlacier Stone Waves · A Rock Climbing Geological Wonder\nThe stone wave formations on Fuzhi Mountain are the largest discovered in China’s low-latitude, low-altitude regions, making it a true natural wonder. These stone waves were formed by glaciers around 3 million years ago and are scattered across the northwest and northeast slopes of the mountain. The longest wave stretches up to 1,500 meters. Climb these stone waves with both hands and feet, and feel the ancient geological history that’s millions of years old.\n\nCentury-Old Village · A Hidden Trekking Escape in the Mountains\nDongcheng Ancient Village is named after the famous poet Xie Lingyun from the Eastern Jin dynasty, who wrote the famous poem, “Climbing this mountain, drinking wine and writing poetry, after drinking, I turn the cup.” The village is full of old houses, roads, and trees, with stone paths winding through terraced fields and bamboo forests. It offers a glimpse of century-old mountain life. If you have time, visit the old teahouse at the village entrance, sip some fresh tea, and listen to the villagers’ stories.`,
      itinerary: [
        {
          day: 1,
          title: "Terraces, Stone Waves & Ancient Village",
          description: "Depart from Shanghai, visit Fuzhi Mountain terraces, climb glacier stone waves, explore Dongcheng Ancient Village, return to Shanghai.",
          activities: [
            "07:30 | Depart Shanghai, chasing the morning light. Route: Shanghai → Jiaxing-Shaoxing Bridge Service Area →Fengjing Service Area (25-minute break; dining and coffee options available) → Fuzhi Mountain, Shaoxing",
            "11:45 | Arrive at the trailhead village. An ancient village cradled by terraced fields.",
            "12:45 | Rest at Stone Wave Pavilion. Picnic lunch (please bring your own meals) amidst the primordial rock formations.",
            "15:30 | Summit triumph. Take in the panoramic views from the 861-meter peak—your reward for the climb.",
            "18:00 | Conclude the journey, return to Shanghai, carrying memories of golden fields and ancient stones."
          ]
        }
      ],
      included: [
        "Transportation: Comfortable luxury bus, driver's road and bridge fuel parking fees, etc",
        "Material: Equip with emergency medical supplies",
        "Service: Full bilingual team leader, activity planning and organization fees",
        "Personal protection: Outdoor high-value 300,000 yuan insurance"
      ],
      notIncluded: [
        "Lunch"
      ],
      notice: [
        "Travel notification: We will send it to you no later than 1 day before departure. If you have not received it, please contact our staff. The gathering time, location, service personnel and other information shall be subject to the 'Travel Notice'.",
        "Reservation restrictions: Individuals with cardiovascular and cerebrovascular diseases, a history of heart disease, pregnant women, and others with physical disabilities are advised to avoid participating in outdoor hiking activities. Elderly and minors aged 8-55 are required to participate with a guardian and report their travel status in advance.",
        "Event equipment: This event is a light hiking, and it is recommended to bring basic equipment such as hiking poles and anti slip shoes",
        "Pets must be brought in advance and a cleaning fee of 50 yuan must be paid"
      ],
      extra: "To protect the outdoor ecological environment, please respect nature and not be reckless.",
      transportation: {
        type: "Tour Bus",
        description: "Air-conditioned bus with professional driver for all transfers and sightseeing."
      },
      reviews: [
        {
          id: 1,
          name: "Guest A",
          country: "China",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 5,
          date: "April 2025",
          text: "Wonderful experience, great guide and beautiful scenery!"
        },
        {
          id: 2,
          name: "Guest B",
          country: "USA",
          avatar: "/placeholder.svg?height=80&width=80",
          rating: 4,
          date: "March 2025",
          text: "Very enjoyable trip. Will recommend to friends."
        }
      ],
      startDates: [
        "2025-05-01",
        "2025-05-15",
        "2025-06-01"
      ],
      maxGroupSize: 20
    }
  ];
  return tours.find(t => String(t.id) === String(id));
}

export default function TourPage({ params }: { params: { id: string } }) {
  const tour = getTour(params.id);

  if (!tour) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold text-red-600">Tour not found.</h1>
        <p>The tour you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl artistic-title mb-2">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Max {tour.maxGroupSize} people</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{tour.rating}</span>
                <span className="text-muted-foreground">({tour.reviewCount} reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground artistic-subtitle">{tour.description}</p>
          </div>

          <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
            <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {tour.images.slice(1, 3).map((image, index) => (
              <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${tour.title} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <Tabs defaultValue="itinerary" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">What's Included</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="itinerary" className="pt-4">
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <Card key={day.day} className="premium-card border-0">
                    <CardHeader className="pb-2">
                      <Badge className="w-fit mb-1 rounded-full">Day {day.day}</Badge>
                      <CardTitle className="artistic-subtitle">{day.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{day.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium artistic-subtitle">Activities:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {day.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="included" className="pt-4">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="premium-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 artistic-subtitle">
                      <Check className="h-5 w-5 text-green-500" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="premium-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 artistic-subtitle">
                      <X className="h-5 w-5 text-red-500" />
                      What's Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-6">
                {tour.reviews.map((review) => (
                  <Card key={review.id} className="premium-card border-0">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h3 className="font-medium">{review.name}</h3>
                            <p className="text-sm text-muted-foreground">{review.country}</p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20 premium-card border-0">
            <CardHeader>
              <CardTitle className="artistic-title">Book This Tour</CardTitle>
              <CardDescription className="artistic-subtitle">Select your preferred date and options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-2xl font-bold mb-1 artistic-title">${tour.price}</div>
                <div className="text-sm text-muted-foreground">per person</div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Departure Date</label>
                <select className="w-full p-2 border rounded-full">
                  {tour.startDates.map((date, index) => (
                    <option key={index} value={date}>
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Travelers</label>
                <select className="w-full p-2 border rounded-full">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} {i === 0 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span>Tour Price</span>
                  <span>${tour.price} × 1</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${tour.price}</span>
                </div>
              </div>

              <Button className="w-full rounded-full">Book Now</Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>No payment required now</p>
                <p>Free cancellation up to 7 days before departure</p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
  <Button variant="outline" size="sm" className="rounded-full">
    Contact Us
  </Button>
</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
