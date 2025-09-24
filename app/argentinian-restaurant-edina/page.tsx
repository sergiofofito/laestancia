import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Argentinian Restaurant Edina MN | La Estancia - Authentic South American Cuisine",
  description: "Experience authentic Argentinian cuisine near Edina at La Estancia. Traditional empanadas, premium steaks, and South American flavors that Edina residents love.",
  keywords: ["Argentinian restaurant Edina", "Edina Argentinian food", "South American restaurant Edina", "authentic Argentinian cuisine", "Edina restaurants", "empanadas Edina"],
  openGraph: {
    title: "Argentinian Restaurant Edina MN | La Estancia",
    description: "Experience authentic Argentinian cuisine near Edina. Traditional empanadas, premium steaks, and South American flavors.",
    images: ["/images/golden-argentine-empanadas-on-rustic-wooden-board.jpg"],
  },
}

export default function ArgentinianRestaurantEdinaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('/images/golden-argentine-empanadas-on-rustic-wooden-board.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Authentic South American Cuisine
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Argentinian Restaurant <span className="text-gold-gradient">Edina</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Discover the most authentic Argentinian restaurant near Edina. La Estancia brings 
                traditional South American flavors, hand-crafted empanadas, and premium Argentinian 
                steaks to delight Edina's discerning diners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Reserve Your Table</span>
                  <span>→</span>
                </a>
                <a
                  href="/food"
                  className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>View Menu</span>
                  <span>📋</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Authentic Argentinian Features */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Edina Loves Our <span className="text-gold-gradient">Authentic Argentinian Cuisine</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Edina residents drive to La Estancia for the most authentic Argentinian dining experience 
                  in the Twin Cities. Our traditional recipes and imported ingredients create flavors 
                  that transport you straight to Buenos Aires.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🥟</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Hand-Crafted Empanadas
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Traditional Argentinian empanadas made fresh daily with authentic beef and spinach fillings. 
                    A perfect start to any Edina dining experience.
                  </p>
                </div>

                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Traditional Parrilla Grill
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Our authentic wood-fired parrilla creates the distinctive smoky flavors that make 
                    Argentinian cuisine legendary among Edina food enthusiasts.
                  </p>
                </div>

                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Argentinian Malbec Collection
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Carefully curated selection of premium Argentinian Malbecs and international wines 
                    to complement every dish for our Edina guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Dishes */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Traditional Argentinian Dishes <span className="text-gold-gradient">Edina Craves</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Experience the authentic flavors of Argentina with dishes that have been perfected 
                  over generations and are now beloved by Edina diners.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Signature Appetizers
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Provoleta - $13
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Crispy provolone cheese with caramelized onions and roasted peppers - 
                        a must-try for Edina cheese lovers.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Chorizo Parrillero - $9
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        House-made Argentinian chorizo grilled to perfection - 
                        authentic flavors that Edina diners rave about.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Traditional Mains
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Chivito Uruguayo - $20
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Traditional Uruguayan sandwich with sirloin, fried egg, ham, and provolone - 
                        comfort food that Edina families love.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Milanesa Napolitana - $28
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Breaded beef with mozzarella, provolone, ham, and tomato sauce - 
                        an Argentinian classic perfect for Edina diners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convenient for Edina */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-textured-white rounded-3xl p-8 lg:p-12 shadow-warm border border-border/50 text-center">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Convenient Argentinian Dining for Edina Residents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Easy Access from Edina
                  </h3>
                  <ul className="font-inter text-muted-foreground space-y-2">
                    <li>• Quick 20-minute drive from Edina</li>
                    <li>• Convenient Highway 100 access</li>
                    <li>• Free parking for all guests</li>
                    <li>• Wheelchair accessible</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Perfect for Edina Events
                  </h3>
                  <ul className="font-inter text-muted-foreground space-y-2">
                    <li>• Date nights & anniversaries</li>
                    <li>• Family celebrations</li>
                    <li>• Business dinners</li>
                    <li>• Group dining & parties</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Make Reservation</span>
                  <span>→</span>
                </a>
                <a
                  href="tel:+16122008377"
                  className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Call (612) 200-8377</span>
                  <span>📞</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
