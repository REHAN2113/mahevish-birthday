"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  type: "heart" | "petal" | "star" | "balloon"
  color: string
}

interface Balloon {
  id: number
  x: number
  y: number
  color: string
  size: number
  speed: number
}

export function CelebrationEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [fireworks, setFireworks] = useState<{ id: number; x: number; y: number; particles: any[] }[]>([])

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        type: ["heart", "petal", "star"][Math.floor(Math.random() * 3)] as "heart" | "petal" | "star",
        color: ["#ff6f61", "#d97706", "#f472b6", "#fbbf24"][Math.floor(Math.random() * 4)],
      })
    }
    setParticles(initialParticles)

    // Create floating balloons
    const initialBalloons: Balloon[] = []
    for (let i = 0; i < 8; i++) {
      initialBalloons.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + Math.random() * 200,
        color: ["#ff6f61", "#d97706", "#f472b6", "#8b5cf6", "#10b981"][Math.floor(Math.random() * 5)],
        size: Math.random() * 30 + 40,
        speed: Math.random() * 1 + 0.5,
      })
    }
    setBalloons(initialBalloons)

    // Animate particles
    const particleInterval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y + particle.speed,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
          // Reset particle when it goes off screen
          ...(particle.y > window.innerHeight + 50
            ? {
                y: -50,
                x: Math.random() * window.innerWidth,
              }
            : {}),
        })),
      )
    }, 50)

    // Animate balloons
    const balloonInterval = setInterval(() => {
      setBalloons((prev) =>
        prev.map((balloon) => ({
          ...balloon,
          y: balloon.y - balloon.speed,
          x: balloon.x + Math.sin(balloon.y * 0.005) * 0.3,
          // Reset balloon when it goes off screen
          ...(balloon.y < -100
            ? {
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth,
              }
            : {}),
        })),
      )
    }, 100)

    // Random fireworks
    const fireworkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newFirework = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight * 0.6) + 100,
          particles: Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            angle: i * 30 * (Math.PI / 180),
            speed: Math.random() * 3 + 2,
            life: 1,
          })),
        }
        setFireworks((prev) => [...prev, newFirework])

        // Remove firework after animation
        setTimeout(() => {
          setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id))
        }, 2000)
      }
    }, 3000)

    return () => {
      clearInterval(particleInterval)
      clearInterval(balloonInterval)
      clearInterval(fireworkInterval)
    }
  }, [])

  const getParticleEmoji = (type: string) => {
    switch (type) {
      case "heart":
        return "💖"
      case "petal":
        return "🌸"
      case "star":
        return "✨"
      default:
        return "💖"
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Falling particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-75"
          style={{
            left: particle.x,
            top: particle.y,
            fontSize: particle.size,
            color: particle.color,
          }}
        >
          {getParticleEmoji(particle.type)}
        </div>
      ))}

      {/* Floating balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute transition-all duration-200"
          style={{
            left: balloon.x,
            top: balloon.y,
            fontSize: balloon.size,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className="rounded-full shadow-lg animate-bounce-gentle"
              style={{
                width: balloon.size,
                height: balloon.size * 1.2,
                backgroundColor: balloon.color,
              }}
            ></div>
            {/* String */}
            <div
              className="absolute left-1/2 top-full w-0.5 bg-gray-600"
              style={{ height: balloon.size * 0.8, transform: "translateX(-50%)" }}
            ></div>
          </div>
        </div>
      ))}

      {/* Fireworks */}
      {fireworks.map((firework) => (
        <div key={firework.id} className="absolute" style={{ left: firework.x, top: firework.y }}>
          {firework.particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: Math.cos(particle.angle) * particle.speed * 20,
                top: Math.sin(particle.angle) * particle.speed * 20,
              }}
            ></div>
          ))}
          <div className="absolute text-2xl animate-pulse">🎆</div>
        </div>
      ))}

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce-gentle">🎈</div>
      <div className="absolute top-4 right-4 text-4xl animate-bounce-gentle" style={{ animationDelay: "1s" }}>
        🎈
      </div>
      <div className="absolute bottom-4 left-4 text-4xl animate-bounce-gentle" style={{ animationDelay: "2s" }}>
        🎉
      </div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>
        🎉
      </div>
    </div>
  )
}
