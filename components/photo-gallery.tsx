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
        src: "/youme.jpg",
        caption: "Our First Date",
        memory: "13th Feb 2019 . Aapn bhetlo hoto dyandeep class chya stairs wr aani tu mala majya galavr haluch pappi dili hoti",
      },
      {
        id: 2,
        src: "/gibli.jpg",
        caption: "Premacha Dhappa",
        memory: "Tujya College chya baher tu mala dhappa dila hota mi kiti ghabarlo hoto naa.",
      },
      {
        id: 3,
        src: "/meyou.jpg",
        caption: "Famous Cafe ",
        memory: "Famous Cafe chya maagh aapn bhetlo hoto eka Kiti bhari moment hota naa.",
      },
      {
        id: 4,
        src: "/couple-sharing-a-picnic-in-nature.jpg",
        caption: "Tu Ani Mi Majya Ghari",
        memory: "Best Moments Of My Life kadhich Ny Visru Shakt Te Divas.",
      },
      {
        id: 5,
        src: "/couple-watching-sunrise-together.jpg",
        caption: "Aapli First Kiss",
        memory: "Bhugol Cha Last Paper Tu Aani Mi Tujya Shalechya Classroom madhi .",
      },
      {
        id: 6,
        src: "/couple-celebrating-anniversary-with-cake.jpg",
        caption: " Aapli Aniversary",
        memory: "Rasmalai Cake Banvl hot tu aaplay anivarsary chya divshi kadhich Ny visru shkt to divas.",
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
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Our Beautiful Memories</h2>
          <p className="text-xl font-source-sans text-foreground/70 max-w-2xl mx-auto">
            Every photo tells a story of our love. Click on any memory to relive those special moments together.
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
