"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SurprisePopup() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)

  useEffect(() => {
    // Show surprise popup after user has been on the site for a while
    const timer = setTimeout(() => {
      setShowSurprise(true)
      setShowFireworks(true)
    }, 15000) // Show after 15 seconds

    return () => clearTimeout(timer)
  }, [])

  const closeSurprise = () => {
    setShowSurprise(false)
    setShowFireworks(false)
  }

  if (!showSurprise) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center bg-gradient-romantic border-4 border-primary/30 shadow-2xl animate-fade-in-up">
          <div className="space-y-6">
            <div className="text-6xl animate-heartbeat">💖</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">I Love You Forever ❤️</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">Happy Birthday!</h3>
            <p className="text-xl text-white font-source-sans text-foreground/80 leading-relaxed">
              You are the love of my life, my best friend, and my greatest adventure. Thank you for being the most
              amazing person I know. Here's to celebrating you today and always!
            </p>
            <div className="flex justify-center space-x-4 text-3xl">
              <span className="animate-bounce">🎂</span>
              <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                🎉
              </span>
              <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                🎈
              </span>
              <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
                💕
              </span>
              <span className="animate-bounce" style={{ animationDelay: "0.8s" }}>
                🌟
              </span>
            </div>
            <Button
              onClick={closeSurprise}
              size="lg"
              className="bg-gradient-sunset text-white hover:scale-105 transition-transform duration-200 text-xl px-8 py-4"
            >
              Thank You My Love! 💕
            </Button>
          </div>
        </Card>
      </div>

      {/* Fireworks effect */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              {["🎆", "✨", "🎇", "💫"][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
