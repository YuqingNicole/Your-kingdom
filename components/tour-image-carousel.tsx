'use client'

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TourImageCarouselProps {
  images: string[];
  title: string;
}

function AdaptiveImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [isPortrait, setIsPortrait] = React.useState<boolean | null>(null);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      onLoad={(e) => {
        const img = e.currentTarget;
        setIsPortrait(img.naturalHeight > img.naturalWidth);
      }}
      className={
        isPortrait === null
          ? 'object-contain bg-transparent'
          : isPortrait
          ? 'object-contain max-h-full max-w-[60%] bg-transparent'
          : 'object-contain max-w-full max-h-[80%] bg-transparent'
      }
      style={{ transition: 'all 0.3s' }}
    />
  );
}

export default function TourImageCarousel({ images, title }: TourImageCarouselProps) {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
        <Image src="/placeholder.svg" alt="No image" fill className="object-cover" />
      </div>
    );
  }

  const handlePrev = () => setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setSelectedIdx((prev) => (prev + 1) % images.length);
  const handleThumbClick = (idx: number) => setSelectedIdx(idx);

  return (
    <div className="mb-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
        {/* 左箭头 */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition border border-gray-300"
          onClick={handlePrev}
          disabled={images.length <= 1}
          aria-label="上一张"
          style={{ pointerEvents: images.length <= 1 ? 'none' : 'auto' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <AdaptiveImage
          src={images[selectedIdx] || "/placeholder.svg"}
          alt={`${title} ${selectedIdx + 1}`}
          priority
        />
        {/* 右箭头 */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition border border-gray-300"
          onClick={handleNext}
          disabled={images.length <= 1}
          aria-label="下一张"
          style={{ pointerEvents: images.length <= 1 ? 'none' : 'auto' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* 指示器和缩略图 */}
      <div className="flex flex-col items-center mt-4 gap-2">
        <div className="flex gap-2 justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`relative w-12 h-12 rounded border-2 transition-all overflow-hidden ${selectedIdx === idx ? "border-primary ring-2 ring-primary" : "border-gray-200"}`}
              style={{ outline: "none" }}
              onClick={() => handleThumbClick(idx)}
              aria-label={`查看第${idx + 1}张图片`}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${title} 缩略图${idx + 1}`}
                fill
                className="object-cover"
                sizes="48px"
                style={{ objectFit: "cover" }}
                draggable={false}
                priority={idx === 0}
              />
              {selectedIdx === idx && (
                <span className="absolute inset-0 border-2 border-primary rounded pointer-events-none"></span>
              )}
            </button>
          ))}
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          {selectedIdx + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
