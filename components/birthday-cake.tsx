"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Candle {
  id: number
  isLit: boolean
  x: number
}

export function BirthdayCake() {
  const [candles, setCandles] = useState<Candle[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [cakeClicked, setCakeClicked] = useState(false)

  useEffect(() => {
    // Initialize candles
    const initialCandles: Candle[] = []
    for (let i = 0; i < 7; i++) {
      initialCandles.push({
        id: i,
        isLit: true,
        x: 20 + i * 10, // Spread candles across the cake
      })
    }
    setCandles(initialCandles)
  }, [])

  const blowOutCandles = () => {
    if (cakeClicked) return

    setCakeClicked(true)

    // Blow out candles one by one
    candles.forEach((candle, index) => {
      setTimeout(() => {
        setCandles((prev) => prev.map((c) => (c.id === candle.id ? { ...c, isLit: false } : c)))
      }, index * 200)
    })

    // Show confetti after all candles are blown out
    setTimeout(
      () => {
        setShowConfetti(true)
        setShowFireworks(true)
      },
      candles.length * 200 + 500,
    )

    // Hide effects after celebration
    setTimeout(() => {
      setShowConfetti(false)
      setShowFireworks(false)
    }, 5000)
  }

  const relightCandles = () => {
    setCakeClicked(false)
    setCandles((prev) => prev.map((c) => ({ ...c, isLit: true })))
    setShowConfetti(false)
    setShowFireworks(false)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-12">Make a Wish!</h2>

        <div className="relative mx-auto w-80 h-96 mb-8">
          {/* Cake base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {/* Bottom layer */}
            <div className="w-64 h-24 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg border-4 border-primary/30 relative">
              <div className="absolute inset-2 bg-gradient-to-b from-amber-100 to-amber-200 rounded"></div>
              {/* Decorative frosting */}
              <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-full border-2 border-primary/20"></div>
            </div>

            {/* Middle layer */}
            <div className="w-48 h-20 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg border-4 border-secondary/30 relative -mt-2 mx-auto">
              <div className="absolute inset-2 bg-gradient-to-b from-pink-100 to-pink-200 rounded"></div>
              <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-full border-2 border-secondary/20"></div>
            </div>

            {/* Top layer */}
            <div className="w-32 h-16 bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg border-4 border-accent/30 relative -mt-2 mx-auto">
              <div className="absolute inset-2 bg-gradient-to-b from-purple-100 to-purple-200 rounded"></div>
              <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-full border-2 border-accent/20"></div>
            </div>
          </div>

          {/* Candles */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32">
            {candles.map((candle) => (
              <div key={candle.id} className="absolute" style={{ left: `${candle.x}%`, transform: "translateX(-50%)" }}>
                {/* Candle stick */}
                <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-sm"></div>
                {/* Flame */}
                {candle.isLit && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-4 bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-4 bg-gradient-to-t from-red-400 via-orange-400 to-yellow-300 rounded-full animate-ping opacity-75"></div>
                  </div>
                )}
                {/* Smoke effect when blown out */}
                {!candle.isLit && cakeClicked && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-8 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-60 animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Confetti effect */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 50}%`,
                    backgroundColor: ["#d97706", "#ff6f61", "#fbbf24", "#f472b6"][Math.floor(Math.random() * 4)],
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                ></div>
              ))}
            </div>
          )}

          {/* Fireworks effect */}
          {showFireworks && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-4xl animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 1}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {!cakeClicked ? (
            <Button
              onClick={blowOutCandles}
              size="lg"
              className="bg-gradient-sunset text-dark hover:scale-105 transition-transform duration-200 text-xl px-8 py-4"
            >
              🎂 Blow Out the Candles
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="text-2xl font-playfair text-primary animate-fade-in-up">
                🎉 Happy Birthday! Your wish will come true! 🎉
              </div>
              <Button
                onClick={relightCandles}
                variant="outline"
                size="lg"
                className="border-primary text-dark hover:bg-primary hover:text-white transition-colors duration-200 bg-transparent"
              >
                🕯️ Light the Candles Again
              </Button>
            </div>
          )}
        </div>

        <p className="text-lg font-source-sans text-foreground/70 mt-8 max-w-2xl mx-auto">
          Close your eyes, make a wish, and blow out the candles. Today is your special day, and every wish you make is
          one step closer to coming true!
        </p>
      </div>
    </section>
  )
}
