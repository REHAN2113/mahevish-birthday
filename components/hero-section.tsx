"use client"

import { useEffect, useState } from "react"
import { AnimatedText, SparklingText } from "@/components/interactive-text"

export function HeroSection() {
  const [showRibbon, setShowRibbon] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Ribbon cutting animation sequence
    const timer1 = setTimeout(() => {
      setShowRibbon(false)
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer1)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Ribbon cutting animation */}
      {showRibbon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-96 h-2 bg-secondary mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
            <div className="text-6xl animate-bounce-gentle">✂️</div>
            <p className="text-xl font-playfair text-primary mt-4">Cutting the ribbon to your special day...</p>
          </div>
        </div>
      )}

      {/* Main hero content */}
      {showContent && (
        <div className="text-center animate-fade-in-up">
          <SparklingText className="block mb-6">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary animate-heartbeat">
              <AnimatedText text="Happy Birthday" delay={10} />
            </h1>
          </SparklingText>
          <h2 className="text-4xl md:text-6xl font-playfair text-secondary mb-8">
            <AnimatedText text="Tinguuu ❤️" delay={10} />
          </h2>

          {/* Couple silhouettes animation */}
          <div className="relative mx-auto w-64 h-64 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-32 h-48 bg-primary/80 rounded-full animate-float"
                style={{ clipPath: "ellipse(40% 50% at 30% 50%)" }}
              ></div>
              <div
                className="w-32 h-48 bg-secondary/80 rounded-full animate-float"
                style={{ clipPath: "ellipse(40% 50% at 70% 50%)", animationDelay: "0.5s" }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl animate-sparkle">💕</div>
            </div>
          </div>

          <p className="text-xl font-source-sans text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            <AnimatedText
              text="Today is all about celebrating you and the incredible joy you bring to my life. Let's make this birthday magical together!"
              delay={3500}
            />
          </p>
        </div>
      )}
    </section>
  )
}
