import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Catering Minneapolis | La Estancia - Authentic Argentinian Catering Services",
  description: "Premium Argentinian catering in Minneapolis. La Estancia provides authentic steakhouse catering for corporate events, weddings, and special occasions throughout Minneapolis.",
  keywords: ["catering Minneapolis", "Minneapolis catering", "Argentinian catering", "steakhouse catering Minneapolis", "corporate catering Minneapolis", "wedding catering Minneapolis"],
  openGraph: {
    title: "Catering Minneapolis | La Estancia Argentinian Catering",
    description: "Premium Argentinian catering services in Minneapolis. Authentic steakhouse catering for all occasions.",
    images: ["/images/mixed-grill-parrillada-with-various-meats-and-saus.jpg"],
  },
}

export default function CateringMinneapolisPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('/images/mixed-grill-parrillada-with-various-meats-and-saus.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Premium Minneapolis Catering
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Catering <span className="text-gold-gradient">Minneapolis</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Bring the authentic flavors of La Estancia to your Minneapolis event. Our premium 
                Argentinian catering services feature hand-selected steaks, traditional empanadas, 
                and exceptional service that makes every occasion memorable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16122008377"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Get Catering Quote</span>
                  <span>📞</span>
                </a>
                <a
                  href="/food"
                  className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>View Catering Menu</span>
                  <span>📋</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Services */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Minneapolis Catering <span className="text-gold-gradient">Services</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  From intimate corporate meetings to grand Minneapolis celebrations, La Estancia 
                  catering brings restaurant-quality Argentinian cuisine directly to your event.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Corporate Catering
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Impress clients and colleagues with premium Argentinian cuisine. Perfect for 
                    Minneapolis business meetings, conferences, and corporate events.
                  </p>
                </div>

                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">💒</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Wedding Catering
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Make your Minneapolis wedding unforgettable with our elegant Argentinian menu. 
                    From rehearsal dinners to reception feasts.
                  </p>
                </div>

                <div className="bg-textured-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 text-center">
                    Special Events
                  </h3>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Birthdays, anniversaries, graduations - any Minneapolis celebration becomes 
                    extraordinary with La Estancia catering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu Highlights */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Minneapolis Catering <span className="text-gold-gradient">Menu Highlights</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Our catering menu features the same authentic Argentinian dishes that make 
                  La Estancia a Minneapolis dining destination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Premium Catering Packages
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Executive Package
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground mb-2">
                        Perfect for Minneapolis corporate events and business meetings.
                      </p>
                      <ul className="font-inter text-xs text-muted-foreground space-y-1">
                        <li>• Selection of empanadas and appetizers</li>
                        <li>• Premium steak cuts or chicken</li>
                        <li>• Traditional sides and salads</li>
                        <li>• Professional service staff</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Celebration Package
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground mb-2">
                        Ideal for Minneapolis weddings and special celebrations.
                      </p>
                      <ul className="font-inter text-xs text-muted-foreground space-y-1">
                        <li>• Full parrillada experience</li>
                        <li>• Multiple protein options</li>
                        <li>• Extensive appetizer selection</li>
                        <li>• Complete setup and service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Signature Catering Items
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Parrillada Station
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Live grilling station featuring assorted premium steaks, chorizo, 
                        and traditional accompaniments - a showstopper for Minneapolis events.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Empanada Bar
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Interactive station with fresh empanadas made to order - beef, spinach, 
                        and seasonal varieties that Minneapolis guests love.
                      </p>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        Argentinian Wine Service
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground">
                        Curated selection of Argentinian Malbecs and international wines 
                        with professional sommelier service for Minneapolis events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-textured-white rounded-3xl p-8 lg:p-12 shadow-warm border border-border/50">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Book Your Minneapolis Catering Event
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Let La Estancia make your Minneapolis event extraordinary. Contact our catering 
                  team to discuss your needs and receive a custom quote.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Catering Information
                  </h3>
                  <div className="font-inter text-muted-foreground space-y-2">
                    <p>📞 Catering Hotline: (612) 200-8377</p>
                    <p>📧 catering@laestanciasteakhouse.com</p>
                    <p>⏰ 48-hour advance notice required</p>
                    <p>👥 Minimum 15 guests</p>
                    <p>🚚 Delivery available throughout Minneapolis</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Service Areas
                  </h3>
                  <div className="font-inter text-muted-foreground space-y-2">
                    <p>• Downtown Minneapolis</p>
                    <p>• Minneapolis suburbs</p>
                    <p>• Corporate offices & venues</p>
                    <p>• Hotels & event centers</p>
                    <p>• Private residences</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16122008377"
                  className="btn-primary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Call for Quote</span>
                  <span>📞</span>
                </a>
                <a
                  href="mailto:catering@laestanciasteakhouse.com"
                  className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Email Catering</span>
                  <span>📧</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
