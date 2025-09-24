export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 no-global-bg">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/images/steak.jpg')`,
        }}
      >
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.3) 2px, transparent 2px),
                             radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.3) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Elegant Logo Display */}
        <div className="mb-12 animate-fade-in-up">
          <img 
            src="/images/la-estancia-logo-transparent.png" 
            alt="La Estancia Logo" 
            className="h-32 lg:h-40 w-auto mx-auto mb-8 drop-shadow-2xl" 
          />
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-secondary"></div>
            <div className="w-4 h-4 mx-4 rotate-45 border-2 border-secondary bg-secondary/20"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up stagger-1">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-shadow-warm">
            <span className="text-gold-gradient">La Estancia</span>
          </h1>
          <div className="font-inter text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase mb-6 opacity-90">
            Authentic Argentine Steakhouse
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up stagger-2">
          <p className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-shadow-warm italic">
            Argentina and Uruguay
          </p>
          <p className="font-inter text-xl md:text-2xl font-light tracking-wide opacity-90">
            in the Heart of Minneapolis
          </p>
          
          {/* Location Badge */}
          <div className="inline-flex items-center mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></div>
            <span className="font-inter text-sm font-medium tracking-wide">Now Open • Minneapolis</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up stagger-3">
          <a
            href="/food"
            className="btn-primary font-playfair text-lg min-w-[200px] relative overflow-hidden group"
          >
            <span className="relative z-10">View Our Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn?date=2025-09-13&seats=2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary font-playfair text-lg min-w-[200px] relative overflow-hidden group"
          >
            <span className="relative z-10">Reserve Table</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up stagger-4">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🥩</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Premium Cuts</h3>
            <p className="font-inter text-sm opacity-80">Authentic Argentine beef, grilled to perfection</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🍷</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Fine Wines</h3>
            <p className="font-inter text-sm opacity-80">Curated selection of Argentine Malbecs</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Elegant Atmosphere</h3>
            <p className="font-inter text-sm opacity-80">Sophisticated dining experience</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="font-inter text-xs mt-2 opacity-70 tracking-widest uppercase">Scroll</p>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </div>
    </section>
  )
}
