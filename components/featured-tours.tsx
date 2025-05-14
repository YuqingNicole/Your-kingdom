import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star } from "lucide-react"

export const tours = [
  {
    id: 5,
    title: "Xiaoshao Ancient Road Symphony with Blue",
    image: "/images/ep1 copy/661744349108_.pic_hd.jpg",
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
    popular: false,
    description: `Moss-Covered Path · A Literary Pilgrimage\nWander along this hidden trail in the heart of Jiangnan’s waterways, where relics like the Southern Song Imperial Trail and Caoshan Temple (est. 964 CE) beckon you to explore the ancient stories of scholars and emperors.\n\nMillennium Military Path · Echoes of History\nWalk the path where the Wu-Yue rivalry of the Spring and Autumn period once raged, straddling Xiaoshan and Shaoxing. Feel the echoes of ancient battles and the fusion of two rich cultures as you journey through history.\n\nTales of Plum Blossoms · Celebrating Ephemeral Beauty\nIn this enchanting place, plum blossoms bloom like poetry. Varieties such as Gongfen (Palace Pink), Zhusha (Cinnabar Red), Lü’e (Jade Calyx), Yudie (Jade Butterfly), and Meiren Mei (Beauty Plum) take turns gracing the landscape, each one a fleeting masterpiece, waiting to bloom again in glory.`,
    itinerary: [
      "07:30 | Depart promptly at 7:30 AM in the center of Shanghai. The journey takes approximately 3 hours, including a 25-minute rest stop at a service area. Onboard briefing by the tour guide.",
      "11:00 | Arrive in Xiaoshan. Embark on the 'Journey of Sincerity,' starting from Liandong Village. The first leg follows the ancient secret trail used by the Yue army during their night raid against the Wu Kingdom in the Spring and Autumn period, where moss-covered stone steps whisper tales of history. Pass through cultural landmarks such as the Eastern Jin Dynasty-era Yunmen Temple and Northern Song Dynasty-era Caoshan Temple. Pause to savor the 'King Yue Zen Tea' beneath a thousand-year-old ginkgo tree. Ascend to the summit of Kanpo Ridge Boundary Monument, where you stand on one foot in Xiaoshan and the other in Shaoxing.",
      "16:30 | Arrive at Jishan Plum Garden. Immerse yourself in the ethereal charm of lingering plum blossoms, capturing the poetic beauty of fading petals.",
      "18:30 | Conclude the journey and return to Shanghai."
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
    accommodation: {
      name: "Standard Local Hotel",
      rating: 4,
      description: "Comfortable hotel accommodation with breakfast included."
    },
    transportation: {
      type: "Tour Bus",
      description: "Air-conditioned bus with professional driver for all transfers and sightseeing."
    },
    reviews: [
      {
        id: 1,
        name: "Yujie",
        country: "China",
        avatar: "/placeholder.svg?height=80&width=80",
        rating: 5,
        date: "April 2025",
        text: "Wonderful experience, great guide and beautiful scenery!"
      },
      {
        id: 2,
        name: "Nicole",
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
    image: "/images/ep2 copy/3.jpg",
    images: [
      "/images/ep2 copy/3.jpg",
      "/images/ep2 copy/6.jpg",
    ],
    duration: "One-day trip",
    location: "Shaoxing, Zhejiang",
    rating: 4.7,
    reviewCount: 18,
    price: 229,
    popular: true,
    description: `Longmen Waterfall Secret Realm Hike
Embark on an exciting adventure to "East China's No.1 Waterfall," Longmen Waterfall. Hike 3 kilometers along the stream and feel the thunderous roar as the 30-meter waterfall crashes down.

Xingmei Jian Mountain Grandeur Adventure
Conquer Fuyang's highest peak, Xingmei Jian (1067 meters)! From the summit, enjoy panoramic views of the majestic mountains and the dance of the sea of clouds. This 12-kilometer loop trail offers moderate difficulty with an elevation gain of 1000 meters, perfect for those seeking adventure and nature's embrace.

Longmen Ancient Town Cultural Stroll
Step into the ancient town of Longmen, a place rich in history. Wander along the stone-paved streets, uncover the echoes of the Three Kingdoms era, and savor the authentic taste of local intangible heritage—handmade oil gluten. Immerse yourself in a unique blend of tradition and modern charm.`,
    itinerary: [
      "07:30 | Depart promptly at 7:30 AM in the center of Shanghai.",
      "10:30 | Arrive at Longmen Waterfall, embark on our streamside hike through cascading wonders.",
      "13:30 | Conquer Xingmei Peak's summit, savor breathtaking panoramic mountainscapes.",
      "18:00 | Return to Shanghai."
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
    accommodation: {
      name: "Standard Local Hotel",
      rating: 4,
      description: "Comfortable hotel accommodation with breakfast included."
    },
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
    image: "/images/ep3 copy/1.jpg",
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
    popular: false,
    description: `Millennium Terraces · A Witness to Golden Agricultural Culture
Though it’s not Wuyuan, the most magnificent rapeseed flower sea in Jiangnan can be found on the northern slope of Fuzhi Mountain! These ancient terraces, stretching across 2,300 acres, were built by generations of local farmers who shaped them to fit the natural terrain. The golden fields cascade down from the mountainside, creating a giant oil painting effect, surrounded by mist and clouds.

Glacier Stone Waves · A Rock Climbing Geological Wonder
The stone wave formations on Fuzhi Mountain are the largest discovered in China’s low-latitude, low-altitude regions, making it a true natural wonder. These stone waves were formed by glaciers around 3 million years ago and are scattered across the northwest and northeast slopes of the mountain. The longest wave stretches up to 1,500 meters. Climb these stone waves with both hands and feet, and feel the ancient geological history that’s millions of years old.

Century-Old Village · A Hidden Trekking Escape in the Mountains
Dongcheng Ancient Village is named after the famous poet Xie Lingyun from the Eastern Jin dynasty, who wrote the famous poem, “Climbing this mountain, drinking wine and writing poetry, after drinking, I turn the cup.” The village is full of old houses, roads, and trees, with stone paths winding through terraced fields and bamboo forests. It offers a glimpse of century-old mountain life. If you have time, visit the old teahouse at the village entrance, sip some fresh tea, and listen to the villagers’ stories.`,
    itinerary: [
      "07:30 | Depart Shanghai, chasing the morning light. Route: Shanghai → Jiaxing-Shaoxing Bridge Service Area →Fengjing Service Area (25-minute break; dining and coffee options available) → Fuzhi Mountain, Shaoxing",
      "11:45 | Arrive at the trailhead village. An ancient village cradled by terraced fields.",
      "12:45 | Rest at Stone Wave Pavilion. Picnic lunch (please bring your own meals) amidst the primordial rock formations.",
      "15:30 | Summit triumph. Take in the panoramic views from the 861-meter peak—your reward for the climb.",
      "18:00 | Conclude the journey, return to Shanghai, carrying memories of golden fields and ancient stones."
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
    accommodation: {
      name: "Standard Local Hotel",
      rating: 4,
      description: "Comfortable hotel accommodation with breakfast included."
    },
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
    id: 8,
    title: "Multidimensional Space City Walk on Yuyuan Road",
    image: "/images/ep4/5.png",
    images: [
      "/images/ep4/4.png",
      "/images/ep4/5.png",
      "/images/ep4/6.jpeg",
      "/images/ep4/7.png"
    ],
    duration: "3 hours tour",
    location: "Shanghai",
    rating: 4.9,
    reviewCount: 1,
    price: 30,
    popular: true,
    description: `Decoding the Multidimensional Time and Space of Modern Shanghai Revolutionary History.`,
    itinerary: [
      "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories愚园路749弄，解码110年的风霜趣事",
      "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl渔光村:它的前生金世与一部老电影有关",
      "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities蝶村:民国女星的风风雨雨",
      "04 #siming vila Imcaesimme ointiare stepping四明别墅:走进历史长河",
      "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House东方经济图书馆旧址:静安老洋房里的东方经济秘境06 #Liulin VilaHiding the endless charm of old Shanghai柳林别业:藏着老上海道不尽的风情08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
      "07 #Bubbling Well LaneLike a Spanish palace castle涌泉坊:彷佛一座西班牙宫殿城堡",
      "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history静安寺救火会:见证夸张的加层与百年消防史",
      "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
    ],
    included: [
      "1.One exquisite poster",
      "2.Sweet to speak of, in-depthexplanation of professional English by the leader",
      "3.Super cute photographer records the entire process",
      "4.Unicorn items: draw blind boxes/gifts",
      "5.Safety accompanies you on your journey"
    ],
    notIncluded: [
      "Lunch",
      "Personal expenses"
    ],
    notice: [
      "Please bring comfortable walking shoes and yoga attire.",
      "Itinerary may adjust slightly due to weather conditions."
    ],
    extra: "This retreat is suitable for all fitness levels. Children above 10 years old are welcome with adult supervision.",
    accommodation: {
      name: "Boutique Guesthouse",
      rating: 5,
      description: "Charming guesthouse with mountain views and modern amenities."
    },
    transportation: {
      type: "High-Speed Train & Local Transfer",
      description: "Efficient train ride and private transfer between stations and guesthouse."
    },
    reviews: [
      {
        id: 1,
        name: "Guest C",
        country: "UK",
        avatar: "/placeholder.svg?height=80&width=80",
        rating: 5,
        date: "May 2025",
        text: "A truly peaceful experience. Loved the yoga and the scenery!"
      }
    ],
    startDates: [
      "2025-06-14",
      "2025-07-12"
    ],
    maxGroupSize: 15
  }
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
