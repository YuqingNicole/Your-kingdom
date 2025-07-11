import Image from "next/image"
import TourImageCarousel from "@/components/tour-image-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, Users, Calendar, Hotel, Bus, Check, X } from "lucide-react"

import { tours } from "@/components/featured-tours";

// 根据 id 获取对应产品
import type { Tour } from "@/components/featured-tours";

function getTourById(id: string | number): Tour | undefined {
  return tours.find((tour) => String(tour.id) === String(id));
}

    {
      id: 5,
      title: "Strolling through the century old Sinan",
      images: [
        "/images/ep5/4.png",
        "/images/ep5/5.png",
        "/images/ep5/6.jpeg",
        "/images/ep5/7.png"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: `Escape the city and find peace in the bamboo forests of Moganshan. Enjoy mindful hiking, tea ceremonies, and a sunset yoga session with mountain views. Perfect for those seeking relaxation and renewal.`,
      itinerary: [
        {
          day: 1,
          title: "Yuyuan Road City Walk",
          description: "Explore the multidimensional space of Yuyuan Road, discover historical buildings, creative shops, and urban stories.",
          activities: [
            "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories愚园路749弄，解码110年的风霜趣事",
            "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl渔光村:它的前生金世与一部老电影有关",
            "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities蝶村:民国女星的风风雨雨",
            "04 #siming vila Imcaesimme ointiare stepping四明别墅:走进历史长河",
            "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House东方经济图书馆旧址:静安老洋房里的东方经济秘境06 #Liulin VilaHiding the endless charm of old Shanghai柳林别业:藏着老上海道不尽的风情08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
            "07 #Bubbling Well LaneLike a Spanish palace castle涌泉坊:彷佛一座西班牙宫殿城堡",
            "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history静安寺救火会:见证夸张的加层与百年消防史",
            "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for all ages. Children should be accompanied by adults.",
      accommodation: null,
      transportation: {
        type: "Walking tour",
        description: "All attractions are within walking distance."
      },
      reviews: [
        {
          id: 1,
          name: "Mia",
          country: "UK",
          rating: 5,
          date: "May 2025",
          text: "A truly peaceful experience. Loved the city walk and the scenery!"
        }
      ],
      startDates: [
        "2025-06-14",
        "2025-07-12"
      ],
      maxGroupSize: 15
    },
    {
      id: 6,
      title: "The brief history of Xujiahui:'Its influence across times'",
      images: [
        "/images/徐家汇/8.jpeg",
        "/images/徐家汇/7.png",
        "/images/徐家汇/1.jpeg",
        "/images/徐家汇/5.jpeg",
        "/images/徐家汇/6.png",
        "/images/徐家汇/4.jpeg"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: `Escape the city and find peace in the bamboo forests of Moganshan. Enjoy mindful hiking, tea ceremonies, and a sunset yoga session with mountain views. Perfect for those seeking relaxation and renewal.`,
      itinerary: [
        {
          day: 1,
          title: "Yuyuan Road City Walk",
          description: "Explore the multidimensional space of Yuyuan Road, discover historical buildings, creative shops, and urban stories.",
          activities: [
            "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories",
            "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl",
            "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities",
            "04 #siming vila Imcaesimme ointiare stepping",
            "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House",
            "06 #Liulin VilaHiding the endless charm of old Shanghai",
            "08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
            "07 #Bubbling Well LaneLike a Spanish palace castle",
            "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history",
            "10#Paramount MetropolisFamous, once the social center of shangha"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for all ages. Children should be accompanied by adults.",
      accommodation: null,
      transportation: {
        type: "Walking tour",
        description: "All attractions are within walking distance."
      },
      reviews: [
        {
          id: 1,
          name: "Mia",
          country: "UK",
          rating: 5,
          date: "May 2025",
          text: "A truly peaceful experience. Loved the city walk and the scenery!"
        }
      ],
      startDates: [
        "2025-06-14",
        "2025-07-12"
      ],
      maxGroupSize: 15
    },
    {
      id: 7,
      title: "Exploring the beauty of Art Deco Group buildings on the Bund",
      images: [
        "/images/ep7/4.png",
        "/images/ep7/5.png",
        "/images/ep7/6.jpeg",
        "/images/ep7/7.png"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: `Escape the city and find peace in the bamboo forests of Moganshan. Enjoy mindful hiking, tea ceremonies, and a sunset yoga session with mountain views. Perfect for those seeking relaxation and renewal.`,
      itinerary: [
        {
          day: 1,
          title: "Yuyuan Road City Walk",
          description: "Explore the multidimensional space of Yuyuan Road, discover historical buildings, creative shops, and urban stories.",
          activities: [
            "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories愚园路749弄，解码110年的风霜趣事",
            "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl渔光村:它的前生金世与一部老电影有关",
            "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities蝶村:民国女星的风风雨雨",
            "04 #siming vila Imcaesimme ointiare stepping四明别墅:走进历史长河",
            "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House东方经济图书馆旧址:静安老洋房里的东方经济秘境06 #Liulin VilaHiding the endless charm of old Shanghai柳林别业:藏着老上海道不尽的风情08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
            "07 #Bubbling Well LaneLike a Spanish palace castle涌泉坊:彷佛一座西班牙宫殿城堡",
            "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history静安寺救火会:见证夸张的加层与百年消防史",
            "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for all ages. Children should be accompanied by adults.",
      accommodation: null,
      transportation: {
        type: "Walking tour",
        description: "All attractions are within walking distance."
      },
      reviews: [
        {
          id: 1,
          name: "Mia",
          country: "UK",
          rating: 5,
          date: "May 2025",
          text: "A truly peaceful experience. Loved the city walk and the scenery!"
        }
      ],
      startDates: [
        "2025-06-14",
        "2025-07-12"
      ],
      maxGroupSize: 15
    },
    {
      id: 8,
      title: "Defend the civilization of the Haipai era together and write the future book of songs",
      images: [
        "/images/ep8/4.png",
        "/images/ep8/5.png",
        "/images/ep8/6.jpeg",
        "/images/ep8/7.png"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: `Escape the city and find peace in the bamboo forests of Moganshan. Enjoy mindful hiking, tea ceremonies, and a sunset yoga session with mountain views. Perfect for those seeking relaxation and renewal.`,
      itinerary: [
        {
          day: 1,
          title: "Yuyuan Road City Walk",
          description: "Explore the multidimensional space of Yuyuan Road, discover historical buildings, creative shops, and urban stories.",
          activities: [
            "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories愚园路749弄，解码110年的风霜趣事",
            "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl渔光村:它的前生金世与一部老电影有关",
            "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities蝶村:民国女星的风风雨雨",
            "04 #siming vila Imcaesimme ointiare stepping四明别墅:走进历史长河",
            "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House东方经济图书馆旧址:静安老洋房里的东方经济秘境06 #Liulin VilaHiding the endless charm of old Shanghai柳林别业:藏着老上海道不尽的风情08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
            "07 #Bubbling Well LaneLike a Spanish palace castle涌泉坊:彷佛一座西班牙宫殿城堡",
            "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history静安寺救火会:见证夸张的加层与百年消防史",
            "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for all ages. Children should be accompanied by adults.",
      accommodation: null,
      transportation: {
        type: "Walking tour",
        description: "All attractions are within walking distance."
      },
      reviews: [
        {
          id: 1,
          name: "Mia",
          country: "UK",
          rating: 5,
          date: "May 2025",
          text: "A truly peaceful experience. Loved the city walk and the scenery!"
        }
      ],
      startDates: [
        "2025-06-14",
        "2025-07-12"
      ],
      maxGroupSize: 15
    },
    {
      id: 9,
      title: "Decoding the multidimensional time and space of Shanghai's modern revolutionary history",
      images: [
        "/images/ep9/4.png",
        "/images/ep9/5.png",
        "/images/ep9/6.jpeg",
        "/images/ep9/7.png"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: `Escape the city and find peace in the bamboo forests of Moganshan. Enjoy mindful hiking, tea ceremonies, and a sunset yoga session with mountain views. Perfect for those seeking relaxation and renewal.`,
      itinerary: [
        {
          day: 1,
          title: "Yuyuan Road City Walk",
          description: "Explore the multidimensional space of Yuyuan Road, discover historical buildings, creative shops, and urban stories.",
          activities: [
            "01 #Lane 749,Yuyuan RoacDecoding Years of Wind and Frost Fun stories愚园路749弄，解码110年的风霜趣事",
            "02 #The Fisherman VilageIts past life and present life are actually!related to an oldl渔光村:它的前生金世与一部老电影有关",
            "03 #Butterfly VillageTnaheRepubic ofchinamale celebrities蝶村:民国女星的风风雨雨",
            "04 #siming vila Imcaesimme ointiare stepping四明别墅:走进历史长河",
            "05 #fFormer Eastern Economic LibrarThe Eastern Economic Secret Realm in jing'anOld Western style House东方经济图书馆旧址:静安老洋房里的东方经济秘境06 #Liulin VilaHiding the endless charm of old Shanghai柳林别业:藏着老上海道不尽的风情08# : Box Moment/Unicorn Voice: Welcome tothe Magic Box Space, extract your blind box",
            "07 #Bubbling Well LaneLike a Spanish palace castle涌泉坊:彷佛一座西班牙宫殿城堡",
            "wtnessthe exaeeerated adaton of floos anda hundred years of fire safety history静安寺救火会:见证夸张的加层与百年消防史",
            "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for all ages. Children should be accompanied by adults.",
      accommodation: null,
      transportation: {
        type: "Walking tour",
        description: "All attractions are within walking distance."
      },
      reviews: [
        {
          id: 1,
          name: "Mia",
          country: "UK",
          rating: 5,
          date: "May 2025",
          text: "A truly peaceful experience. Loved the city walk and the scenery!"
        }
      ],
      startDates: [
        "2025-06-14",
        "2025-07-12"
      ],
      maxGroupSize: 15
    },
    {
      id: 10,
      title: "Xujiahui Chronicles: A Journey Through Shanghai's Historic Crossroads",
      images: [
        "/images/徐家汇/wps_doc_0.jpeg",
        "/images/徐家汇/wps_doc_1.jpeg",
        "/images/徐家汇/wps_doc_3.jpeg",
        "/images/徐家汇/wps_doc_4.jpeg",
        "/images/徐家汇/wps_doc_5.jpeg",
        "/images/徐家汇/wps_doc_6.jpeg",
        "/images/徐家汇/wps_doc_7.jpeg"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      description: "This is where Xu Guangqi and Western scholars joined hands across civilizations, where Tushanwan apprentices chiseled through East-West aesthetic barriers with their carving knives, where dragon-headed gargoyles beneath Gothic spires gently clasp the misty rains of Jiangnan. The dome of the Bibliotheca Zi-Ka-Wei cradles whispers between Homeric epics and Eastern classics, while the grooves of Pathe Records' vinyl etch symphonies of Wu dialect love songs and the crescendos of modernity. Under plane trees' dappled light, old chimneys transform into strings of shadow and light, Shikumen textures interlock with French formal gardens—Xujiahui never defines cultural boundaries, but forges beyond East and West through open embrace. For four centuries, this land has proven true confluence requires no compromise, but rather tempers from collision a poetry uniquely worldly.",
      itinerary: [
        {
          day: 1,
          title: "A Journey Through Shanghai's Historic Crossroads",
          description: "Discover the rich history and cultural fusion of Xujiahui.",
          activities: [
            "Explore the Bibliotheca Zi-Ka-Wei",
            "Admire the unique architecture",
            "Learn about the area's historical significance"
          ]
        }
      ],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "Suitable for history and architecture enthusiasts.",
      accommodation: null,
      transportation: {
        type: "Walking",
        description: "The tour is conducted on foot."
      },
      reviews: [],
      startDates: [],
      maxGroupSize: 15
    },
    {
      id: 11,
      type: "citywalk",
      title: "Guard the Spirit of Shanghai's Golden Age, Pen the Next Chapter of Timeless Verse",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/images/海派文化/1.jpeg",
        "/images/海派文化/2.jpeg",
        "/images/海派文化/3.jpeg",
        "/images/海派文化/4.jpeg"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      popular: true,
      description: "Shanghai-style culture transcends nostalgia. Embracing the duality of 'bread and roses,' it forges connections between materialism and spirituality, local heritage and global vision, tradition and innovation.",
      activities: [
        "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
      ],
      itinerary: [],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "",
      accommodation: null,
      transportation: {
        type: "",
        description: ""
      },
      reviews: [],
      startDates: [],
      maxGroupSize: 0
    },
    {
      id: 12,
      type: "citywalk",
      title: "Explore Bund's Art Deco Allure",
      image: "/images/Art Deco/2.png",
      images: [
        "/images/Art Deco/2.png",
        "/images/Art Deco/3.jpeg",
        "/images/Art Deco/4.png",
        "/images/Art Deco/1.jpeg"
      ],
      duration: "3 hours tour",
      location: "Shanghai",
      rating: 4.9,
      reviewCount: 1,
      price: 30,
      popular: true,
      description: "On the west bank of the Huangpu River, layers of culture have built layers of Haipai civilization; The sunshine shines on every ART DECO building with aesthetics, and the century old civilization continues to narrate glorious stories; Laughter and witty remarks kept coming from the department building, We will make an appointment in historical time.",
      activities: [
        "10#Paramount MetropolisFamous, once the social center of shangha百乐门大都会:大名鼎鼎，曾是上海的社交中心"
      ],
      itinerary: [],
      included: [
        "One exquisite poster",
        "Sweet to speak of, in-depth explanation of professional ",
        "English by the leader",
        "Super cute photographer records the entire process",
        "Unicorn items: draw blind boxes/gifts",
        "Safety accompanies you on your journey"
      ],
      notIncluded: [
        "Personal expenses",
        "Lunch"
      ],
      notice: [
        "Please wear comfortable walking shoes.",
        "Tour will proceed rain or shine."
      ],
      extra: "",
      accommodation: null,
      transportation: {
        type: "",
        description: ""
      },
      reviews: [],
      startDates: [],
      maxGroupSize: 0
    },
    {
      id: 17,
      type: "multi-day",
      title: "Zhejiang Linhai Great Wall 2-Day Adventure",
      image: "/images/台州非遗/Picture 2.png",
      images: [
        "/images/台州非遗/Picture 2.png",
        "/images/台州非遗/剪纸.png",
        "/images/台州非遗/剪纸2.jpg"
      ],
      duration: "2-day trip",
      location: "Zhejiang Province",
      rating: 4.9,
      reviewCount: 25,
      price: 899,
      popular: true,
      description: "Experience the breathtaking beauty of Yellow Mountain (Huangshan), a UNESCO World Heritage site. This 2-day tour will take you through stunning landscapes of granite peaks, pine trees, and seas of clouds.",
      itinerary: [
        {
          day: 1,
          title: "Day 1: Arrival & Sunset Hike",
          description: "Depart from Shanghai, travel to Huangshan. Check into the hotel at the base of the mountain. Afternoon hike to see the sunset.",
          activities: [
            "07:00 | Depart from Shanghai by high-speed train.",
            "12:00 | Arrive at Huangshan, transfer to hotel at mountain base.",
            "15:00 | Afternoon hike to scenic viewpoint for sunset.",
            "18:00 | Dinner and rest at hotel."
          ]
        },
        {
          day: 2,
          title: "Day 2: Sunrise & Main Peaks",
          description: "Early morning hike to watch the sunrise. Explore the main peaks and scenic spots. Return to Shanghai in the evening.",
          activities: [
            "05:00 | Early morning hike to sunrise viewpoint.",
            "08:00 | Breakfast at hotel.",
            "09:00 | Explore main peaks and scenic spots.",
            "15:00 | Return journey to Shanghai."
          ]
        }
      ],
      included: [
        "Round-trip transportation from Shanghai",
        "1-night hotel accommodation on the mountain",
        "Mountain entrance fees",
        "Professional guide service"
      ],
      notIncluded: [
        "Meals",
        "Cable car fees"
      ],
      notice: [
        "This tour involves significant hiking and is suitable for those with good physical fitness.",
        "Weather on the mountain can change quickly, please bring appropriate clothing."
      ],
      extra: "An unforgettable journey into one of China's most iconic natural wonders.",
      accommodation: {
        name: "Mountain Top Hotel",
        rating: 4,
        description: "Stay overnight on the mountain to witness the stunning sunrise and sunset."
      },
      transportation: {
        type: "High-speed train and local bus",
        description: "Fast and comfortable travel to the destination."
      },
      reviews: [],
      startDates: [
        "2025-07-15",
        "2025-08-01"
      ],
      maxGroupSize: 16
    }
  ];
  return tours.find(t => String(t.id) === String(id));
};


// ... (rest of the code remains the same)
export default function TourPage({ params }: { params: { id: string } }) {
  const tour = getTourById(params.id);

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
            <div className="text-muted-foreground artistic-subtitle whitespace-pre-line">{tour.description}</div>
          </div>

          <TourImageCarousel images={tour.images} title={tour.title} />

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
            <CardContent className="space-y-6">
              <div>
                <div className="text-2xl font-bold mb-1 artistic-title">${tour.price}</div>
                <div className="text-sm text-muted-foreground">per person</div>
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

              <a href="https://chat.whatsapp.com/K5X2VEMZHGAFg8Ubvvkt3T" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
  <Button className="w-full rounded-full">Book Now</Button>
</a>

              <div className="text-center text-sm text-muted-foreground">
                <p>No payment required now</p>
                <p>Free cancellation up to 7 days before departure</p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
  <a
    href="https://chat.whatsapp.com/K5X2VEMZHGAFg8Ubvvkt3T"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Button variant="outline" size="sm" className="rounded-full">
      Contact Us to Book
    </Button>
  </a>
</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
