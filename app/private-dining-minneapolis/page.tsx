import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Private Dining Minneapolis | La Estancia Steakhouse - Exclusive Events",
  description: "Host unforgettable private dining events in Minneapolis at La Estancia Steakhouse. Authentic Argentinian cuisine, premium steaks, and exceptional service for your special occasions.",
  keywords: ["private dining Minneapolis", "Minneapolis private dining", "steakhouse private events", "Argentinian restaurant private dining", "Minneapolis event venue", "corporate dining Minneapolis"],
  openGraph: {
    title: "Private Dining Minneapolis | La Estancia Steakhouse",
    description: "Host unforgettable private dining events in Minneapolis at La Estancia Steakhouse. Authentic Argentinian cuisine, premium steaks, and exceptional service.",
    images: ["/images/private-dining-room-setup-for-special-events-with-.jpg"],
  },
}

export default function PrivateDiningMinneapolisPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden no-global-bg">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('/images/private-dining-room-setup-for-special-events-with-.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Exclusive Minneapolis Venue
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Private Dining <span className="text-gold-gradient">Minneapolis</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Experience the finest private dining Minneapolis has to offer at La Estancia Steakhouse. 
                Our exclusive dining spaces provide the perfect setting for corporate events, celebrations, 
                and intimate gatherings in the heart of Minneapolis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Reserve Private Dining</span>
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

        {/* Private Dining Features */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose La Estancia for <span className="text-gold-gradient">Private Dining in Minneapolis</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Located in the vibrant Minneapolis dining scene, La Estancia offers an unparalleled private dining experience 
                  that combines authentic Argentinian hospitality with modern Minneapolis sophistication.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Premium Argentinian Steaks
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Serve your Minneapolis guests the finest cuts of Argentinian beef, perfectly grilled to order 
                    with traditional chimichurri and accompaniments.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Curated Wine Selection
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Complement your private dining experience with our extensive collection of Argentinian Malbecs 
                    and international wines, perfect for Minneapolis corporate events.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Flexible Event Spaces
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Our Minneapolis location offers versatile private dining spaces accommodating 
                    intimate parties of 10 to grand celebrations of 100+ guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Book Your Minneapolis Private Dining Experience
              </h2>
              
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-warm border border-border/50 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                      Perfect for Minneapolis Events
                    </h3>
                    <ul className="font-inter text-muted-foreground space-y-2 text-left">
                      <li>• Corporate dinners & business meetings</li>
                      <li>• Anniversary & birthday celebrations</li>
                      <li>• Holiday parties & team building</li>
                      <li>• Rehearsal dinners & family gatherings</li>
                      <li>• Client entertainment & networking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                      Minneapolis Location
                    </h3>
                    <div className="font-inter text-muted-foreground space-y-2 text-left">
                      <p>📍 123 Main Street, Minneapolis, MN 55401</p>
                      <p>📞 (612) 200-8377</p>
                      <p>🕒 Available 7 days a week</p>
                      <p>🚗 Valet parking available</p>
                      <p>🚇 Near downtown Minneapolis transit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Reserve Now</span>
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
      </main>
    </>
  )
}
