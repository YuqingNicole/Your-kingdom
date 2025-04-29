"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    image: "/images/shanghai-skyline.png",
    alt: "Shanghai Skyline with Oriental Pearl Tower",
  },
  {
    image: "/images/ep1 copy/661744349108_.pic_hd.jpg",
    alt: "The Bund",
  },
  {
    image: "/images/ep1 copy/721744350365_.pic_hd.jpg",
    alt: "Yu Garden",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((current) => (current === 0 ? carouselItems.length - 1 : current - 1))
  }

  const next = () => {
    setCurrent((current) => (current === carouselItems.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/30 hover:bg-background/50 text-white"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/30 hover:bg-background/50 text-white"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all ${index === current ? "bg-white" : "bg-white/40"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
