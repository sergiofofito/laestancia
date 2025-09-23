"use client"

export function GallerySection() {
  // Helper function to create optimized Cloudinary video URLs
  const getOptimizedVideoUrl = (publicId: string) => {
    return `https://res.cloudinary.com/dg1z5a9bi/video/upload/w_600,h_600,c_fill,q_auto:low,f_mp4,br_500k/${publicId}`;
  };

  const images = [
    {
      src: getOptimizedVideoUrl("v1758395427/IMG_1855_utnnt5"),
      alt: "Premium ribeye steak with chimichurri",
      title: "Premium Cuts",
      description: "Perfectly grilled Argentine beef",
      isVideo: true
    },
    {
      src: getOptimizedVideoUrl("v1758395502/IMG_1863_bjvqic"),
      alt: "Mixed grill parrillada",
      title: "Parrillada",
      description: "Traditional mixed grill experience",
      isVideo: true
    },
    {
      src: getOptimizedVideoUrl("v1758395390/IMG_1838_htffbd"),
      alt: "Argentine Malbec wine",
      title: "Fine Wines",
      description: "Curated selection of Argentine wines",
      isVideo: true
    },
    {
      src: getOptimizedVideoUrl("v1758395517/IMG_1875_g9vxuc"),
      alt: "Golden empanadas",
      title: "Authentic Appetizers",
      description: "Handcrafted traditional empanadas",
      isVideo: true
    },
    {
      src: getOptimizedVideoUrl("v1758395422/IMG_1843_rtotim"),
      alt: "Milanesa Napolitana",
      title: "Signature Dishes",
      description: "Our famous Milanesa Napolitana",
      isVideo: true
    },
    {
      src: getOptimizedVideoUrl("v1758395402/IMG_1839_fa1zwv"),
      alt: "Restaurant atmosphere video",
      title: "Experience La Estancia",
      description: "See our restaurant in action",
      isVideo: true
    }
  ]

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
            <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Visual Experience
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Taste the <span className="text-gold-gradient">Tradition</span>
          </h2>
          
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Every dish tells a story of Argentine culinary heritage. From our open kitchen to your table, 
            experience the artistry of authentic South American cuisine.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Image or Video */}
              <div className="aspect-square overflow-hidden">
                {image.isVideo ? (
                  <video
                    src={image.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onLoadStart={(e) => {
                      // Ensure video starts playing when it begins loading
                      const video = e.target as HTMLVideoElement;
                      video.play().catch(() => {
                        // Silently handle autoplay failures
                      });
                    }}
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="font-inter text-sm text-white/90">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/food"
            className="btn-primary font-playfair text-lg inline-flex items-center space-x-2 group"
          >
            <span>Explore Full Menu</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
