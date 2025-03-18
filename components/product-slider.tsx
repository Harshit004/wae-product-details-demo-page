"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Auto-slide functionality: advance image every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [images.length])

  return (
    <div className="relative w-[600px] h-[600px] overflow-hidden" ref={sliderRef}>
      <div className="relative h-[500px] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
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

      {/* Dots Indicator (optional, currently commented out) */}
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
