"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Show audio player after a short delay
    const timer = setTimeout(() => {
      setShowPlayer(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Since we don't have actual audio files, we'll simulate the experience
        audioRef.current.play().catch(() => {
          // Handle the case where audio doesn't exist
          console.log("Audio playback simulated")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  if (!showPlayer) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="text-center">
            <div className="text-2xl animate-heartbeat">🎵</div>
            <p className="text-xs font-source-sans text-foreground/70">Birthday Music</p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={togglePlay}
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              onClick={toggleMute}
              size="sm"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <p className="text-xs font-source-sans text-foreground/60 mt-2 text-center">
          {isPlaying ? "Playing romantic birthday melody..." : "Click play for birthday music"}
        </p>
      </Card>

      {/* Hidden audio element - in a real implementation, you'd add actual audio files */}
      <audio ref={audioRef} loop>
        <source src="/birthday-music.mp3" type="audio/mpeg" />
        <source src="/birthday-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
