"use client"

import { useEffect, useRef } from "react"

export function GallerySection() {
  const playersRef = useRef<any[]>([])

  const videos = [
    {
      id: "onMuh-i8SKE",
      alt: "Premium ribeye steak with chimichurri",
      title: "Premium Cuts",
      description: "Perfectly grilled Argentine beef",
    },
    {
      id: "0j6Ka98VBOk",
      alt: "Mixed grill parrillada",
      title: "Parrillada",
      description: "Traditional mixed grill experience",
    },
    {
      id: "E19nhOShlS0",
      alt: "Argentine Malbec wine",
      title: "Fine Wines",
      description: "Curated selection of Argentine wines",
    },
    {
      id: "O_qm-cC5yhs",
      alt: "Golden empanadas",
      title: "Authentic Appetizers",
      description: "Handcrafted traditional empanadas",
    },
    {
      id: "zoB-OSqKZpw",
      alt: "Milanesa Napolitana",
      title: "Signature Dishes",
      description: "Our famous Milanesa Napolitana",
    },
    {
      id: "LLsZUMkdwdQ",
      alt: "Restaurant atmosphere video",
      title: "Experience La Estancia",
      description: "See our restaurant in action",
    }
  ]

  useEffect(() => {
    // Load YouTube iframe API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize players when API is ready
    ;(window as any).onYouTubeIframeAPIReady = () => {
      videos.forEach((video, index) => {
        const player = new (window as any).YT.Player(`youtube-player-${index}`, {
          videoId: video.id,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            disablekb: 1,
            loop: 1,
            playlist: video.id
          },
          events: {
            onStateChange: (event: any) => {
              // If video ends, restart it immediately
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                event.target.seekTo(0)
                event.target.playVideo()
              }
            }
          }
        })
        playersRef.current.push(player)
      })
    }

    return () => {
      playersRef.current.forEach(player => {
        if (player && player.destroy) {
          player.destroy()
        }
      })
      playersRef.current = []
    }
  }, [])

  return (
    <section id="gallery" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/steak.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85" />
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 mb-6">
            <span className="font-inter text-sm font-medium text-white tracking-widest uppercase">
              Visual Experience
            </span>
          </div>
          
          <h2 className="font-playfair text text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Taste the <span className="text-gold-gradient">Tradition</span>
          </h2>
          
          <p className="font-inter text-lg text-white/90 leading-relaxed text-center">
            Every dish tells a story of Argentine culinary heritage. From our open kitchen to your table, 
            experience the artistry of authentic South American cuisine.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Video */}
              <div className="aspect-square overflow-hidden">
                <div
                  id={`youtube-player-${index}`}
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="font-inter text-sm text-white/90">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/food"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-inter text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center space-x-2 group"
          >
            <span>Explore Full Menu</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
