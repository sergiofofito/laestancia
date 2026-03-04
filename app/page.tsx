import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ReservationSection } from "@/components/reservation-section"
import { ContactSection } from "@/components/contact-section"
import { LeadCapturePopup } from "@/components/lead-capture-popup"
import Script from 'next/script'

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Background wrapper for Hero through Reviews sections */}
        <div className="relative">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url('/images/background.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="relative z-10">
            <HeroSection />
            <GallerySection />
            {/* <ServiceAreasSection /> */}
            <AboutSection />
            <ReviewsSection />
          </div>
        </div>
        
        <ReservationSection />
        <ContactSection />
      </main>
      
      {/* ElevenLabs ConvAI Widget */}
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_1901k52e1c0rff8s3daavzamc9x9" stream="true" enable-streaming="true"></elevenlabs-convai>'
        }}
      />
      <Script 
        src="https://unpkg.com/@elevenlabs/convai-widget-embed" 
        strategy="lazyOnload"
      />

      <LeadCapturePopup />
    </>
  )
}
