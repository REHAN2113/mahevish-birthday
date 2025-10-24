"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface Photo {
  id: number
  src: string
  caption: string
  memory: string
  isVisible: boolean
}

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  useEffect(() => {
    // Sample photos with placeholder images
    const photoData: Omit<Photo, "isVisible">[] = [
      {
        id: 1,
        src: "/mahe1.jpg",
        caption: "",
        memory: "",
      },
      {
        id: 2,
        src: "/mahe2.jpg",
        caption: "",
        memory: "",
      },
      {
        id: 3,
        src: "/mahe3.jpg",
        caption: " ",
        memory: "",
      },
      {
        id: 4,
        src: "/mahe4.jpg",
        caption: "",
        memory: "",
      },
      {
        id: 5,
        src: "/mahe5.jpg",
        caption: "",
        memory: "",
      },
      {
        id: 6,
        src: "/mahe6.jpg",
        caption: "",
        memory: "",
      },
    ]

    // Initialize photos as hidden
    setPhotos(photoData.map((photo) => ({ ...photo, isVisible: false })))

    // Animate photos in one by one
    photoData.forEach((_, index) => {
      setTimeout(() => {
        setPhotos((prev) => prev.map((photo, i) => (i === index ? { ...photo, isVisible: true } : photo)))
      }, index * 500)
    })
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6"></h2>
          <p className="text-xl font-source-sans text-foreground/70 max-w-2xl mx-auto">
           
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`transform transition-all duration-700 ${
                photo.isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-12 opacity-0 rotate-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-2xl bg-white border-4 border-primary/20 relative overflow-hidden">
                    {/* Polaroid-style frame */}
                    <div className="p-4 pb-16">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.caption}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Glowing heart particles overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute text-secondary animate-sparkle"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${Math.random() * 2}s`,
                              }}
                            >
                              💖
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Polaroid caption */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-playfair text-lg text-primary font-semibold text-center">{photo.caption}</p>
                    </div>
                    {/* Tape effect */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/80 rotate-12 rounded-sm border border-yellow-300"></div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl bg-card border-primary/20">
                  <div className="space-y-6">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.caption}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-playfair font-bold text-primary">{photo.caption}</h3>
                      <p className="text-lg font-source-sans text-foreground/80 leading-relaxed">{photo.memory}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {/* Floating hearts around the gallery */}
        <div className="relative mt-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl text-secondary/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              💕
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
