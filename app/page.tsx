import { HeroSection } from "@/components/hero-section"
import { BirthdayCake } from "@/components/birthday-cake"
import { PhotoGallery } from "@/components/photo-gallery"
import { GiftBoxes } from "@/components/gift-boxes"
import { CelebrationEffects } from "@/components/celebration-effects"
import { SurprisePopup } from "@/components/surprise-popup"
import { AudioPlayer } from "@/components/audio-player"

export default function HomePage() {
  return (
    <main className="min-h-screen gradient-romantic overflow-x-hidden">
      <CelebrationEffects />
      <SurprisePopup />
      <AudioPlayer />

      <HeroSection />
      <BirthdayCake />
      <PhotoGallery />
      <GiftBoxes />

      <footer className="py-8 text-center">
        <p className="text-lg font-playfair text-primary">Made with endless love ❤️</p>
      </footer>
    </main>
  )
}
