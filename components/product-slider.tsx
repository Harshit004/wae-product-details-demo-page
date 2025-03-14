"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductSliderProps {
  images: string[]
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-[600px] h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
  onClick={goToPrevious}
  className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-400 rounded-lg p-0 shadow-md hover:bg-white transition-colors z-20 flex items-center justify-center"
  style={{ width: "32px", height: "32px", borderRadius: "8px", maxWidth: "490px" }}
  aria-label="Previous image"
>
  <ChevronLeft className="h-5 w-5" />
</button>

<button
  onClick={goToNext}
  className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-400 rounded-lg p-0 shadow-md hover:bg-white transition-colors z-20 flex items-center justify-center"
  style={{ width: "32px", height: "32px", borderRadius: "8px", maxWidth: "490px" }}
  aria-label="Next image"
>
  <ChevronRight className="h-5 w-5" />
</button>


      {/* Dots Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

