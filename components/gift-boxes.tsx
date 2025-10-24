"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface Gift {
  id: number
  color: string
  ribbonColor: string
  message: string
  quote: string
  isOpened: boolean
}

export function GiftBoxes() {
  const [gifts, setGifts] = useState<Gift[]>([
    {
    id: 1,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    ribbonColor: "bg-yellow-400",
    message: "You're kaali mhais 🐃",
    quote:"",
    isOpened: false,
  },
  {
    id: 2,
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    ribbonColor: "bg-pink-400",
    message: "You're mental 🤪",
    quote:"",
    isOpened: false,
  },
  {
    id: 3,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    ribbonColor: "bg-red-400",
    message: "You're idiot 😜",
    quote:"",
    isOpened: false,
  },
  {
    id: 4,
    color: "bg-gradient-to-br from-green-400 to-green-600",
    ribbonColor: "bg-orange-400",
    message: "Kuch bhi ho... but you're topper and very good in study 🎓",
    quote:"",
    isOpened: false,
  },
  ])

  const openGift = (giftId: number) => {
    setGifts((prev) => prev.map((gift) => (gift.id === giftId ? { ...gift, isOpened: !gift.isOpened } : gift)))
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Special Gifts for You</h2>
          <p className="text-xl font-source-sans text-foreground/70 max-w-2xl mx-auto">
            Each gift box contains a piece of my heart. Click on them to discover the love messages I've prepared just
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gifts.map((gift) => (
            <div key={gift.id} className="flex flex-col items-center">
              <div
                className="relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => openGift(gift.id)}
              >
                {/* Gift Box */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Box base */}
                  <div
                    className={`w-full h-full ${gift.color} rounded-lg shadow-lg transform transition-all duration-500 ${
                      gift.isOpened ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    {/* Box lid */}
                    <div
                      className={`absolute inset-0 ${gift.color} rounded-lg border-4 border-white/20 transform transition-all duration-700 ${
                        gift.isOpened ? "-translate-y-8 rotate-45 scale-75" : ""
                      }`}
                    >
                      {/* Ribbon horizontal */}
                      <div
                        className={`absolute top-1/2 left-0 right-0 h-4 ${gift.ribbonColor} transform -translate-y-1/2`}
                      ></div>
                      {/* Ribbon vertical */}
                      <div
                        className={`absolute left-1/2 top-0 bottom-0 w-4 ${gift.ribbonColor} transform -translate-x-1/2`}
                      ></div>
                      {/* Bow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className={`w-6 h-4 ${gift.ribbonColor} rounded-full`}></div>
                        <div className={`w-4 h-3 ${gift.ribbonColor} rounded-full absolute top-1 left-1`}></div>
                      </div>
                    </div>

                    {/* Sparkles when opened */}
                    {gift.isOpened && (
                      <div className="absolute inset-0">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute text-yellow-300 animate-ping"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animationDelay: `${Math.random() * 1}s`,
                            }}
                          >
                            ✨
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Gift message */}
                <div
                  className={`transition-all duration-500 ${
                    gift.isOpened ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                  }`}
                >
                  <Card className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-playfair font-bold text-primary">{gift.message}</h3>
                      <p className="text-sm font-source-sans text-foreground/80 leading-relaxed">{gift.quote}</p>
                      <div className="text-2xl animate-heartbeat">💝</div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Click instruction */}
              {!gift.isOpened && (
                <p className="text-sm font-source-sans text-foreground/60 mt-2 animate-pulse">Click to open</p>
              )}
            </div>
          ))}
        </div>

        {/* Love message at the bottom */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-6">A Special Message</h3>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-secondary/30 shadow-xl">
              <p className="text-lg font-source-sans text-foreground/80 leading-relaxed mb-4">
               Dear Kaali Mhais,
From childhood till now, you’ve been my daily dose of drama, madness, and nonstop bakbak. Sometimes you act like a scientist, sometimes like a full-time comedian, and most of the time… a certified mental case 🤪.

 you’re such an idiot, but still… my favorite one.

And yeah, I have to admit — kuch bhi ho, you’re a topper, super good in studies, and make everyone proud (even this annoyed brother 😤).

So here’s to my annoying, crazy, cute, smart, and officially most dangerous sister in the world!
Never change, because life would be too boring without my kaali mhais 🐃💖 
              </p>
              <p className="text-lg font-source-sans text-foreground/80 leading-relaxed">
                 Kuch bhi ho, you’re truly amazing in studies — a real topper who makes everyone proud. I might tease you every day, but deep down, I’m really proud to call you my sister ❤️

And in the end, I just pray to Allah that He always keeps you happy, healthy, and successful in everything you do. May He protect you from every worry and bless you with endless joy and peace. 🤲💫
              </p>
              <div className="mt-6 text-2xl font-playfair text-secondary"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
