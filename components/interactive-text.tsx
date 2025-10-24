"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      },
      delay + currentIndex * 100,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className={`${className} relative`}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse border-r-2 border-current ml-1 inline-block h-6"></span>
      )}
    </span>
  )
}

export function SparklingText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: "0.5em",
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  )
}
