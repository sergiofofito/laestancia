export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
              <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                Our Story
              </span>
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-8">
              A Taste of <span className="text-gold-gradient">Argentina/Uruguay</span> in Minneapolis
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                At La Estancia, we bring you the authentic flavors and warm hospitality of Argentina and Uruguay. 
                Our passion for traditional South American cuisine drives every dish we create, every wine we pour, 
                and every moment you spend with us.
              </p>
              
              <p>
                From the sizzling parrilla to the carefully curated selection of Malbecs, we honor the rich 
                culinary heritage of the Rio de la Plata region. Our chefs use time-honored techniques and 
                the finest ingredients to deliver an unforgettable dining experience.
              </p>
              
              <p>
                Whether you're joining us for an intimate dinner, celebrating a special occasion, or exploring 
                new flavors, La Estancia offers a genuine taste of South American culture in the heart of Minneapolis.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10 hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl">🥩</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Premium Cuts</h3>
                <p className="font-inter text-sm text-muted-foreground">Authentic Argentine beef, perfectly grilled</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10 hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl">🍷</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Fine Wines</h3>
                <p className="font-inter text-sm text-muted-foreground">Curated selection of Argentine wines</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10 hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Expert Chefs</h3>
                <p className="font-inter text-sm text-muted-foreground">Traditional techniques, modern presentation</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10 hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Atmosphere</h3>
                <p className="font-inter text-sm text-muted-foreground">Elegant and welcoming environment</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative animate-fade-in-up stagger-2">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img
                src="/images/front.JPG"
                alt="La Estancia Restaurant Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-gold rotate-12 hover:rotate-6 transition-transform duration-500">
              <video
                src="https://res.cloudinary.com/dg1z5a9bi/video/upload/v1758395515/IMG_1874_steg4s.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-40 h-32 rounded-2xl overflow-hidden shadow-gold -rotate-6 hover:rotate-0 transition-transform duration-500">
              <video
                src="https://res.cloudinary.com/dg1z5a9bi/video/upload/v1758395502/IMG_1863_bjvqic.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-secondary rounded-full bg-secondary/10 backdrop-blur-sm flex items-center justify-center">
              <span className="font-playfair text-secondary font-bold">AR</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up stagger-1">
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-widest">Signature Dishes</div>
            </div>
            <div className="animate-fade-in-up stagger-3">
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-widest">Wine Selection</div>
            </div>
            <div className="animate-fade-in-up stagger-4">
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-accent mb-2">5★</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-widest">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
