import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Catering Services | La Estancia Steakhouse - Twin Cities Argentinian Catering",
  description: "La Estancia provides premium Argentinian catering throughout the Twin Cities metro area. Restaurant located in Tangletown, Minneapolis with catering to St Paul, Edina, Bloomington, and surrounding communities.",
  keywords: ["Twin Cities catering", "Minneapolis catering", "St Paul catering", "Edina catering", "Bloomington catering", "Argentinian catering", "steakhouse catering"],
  openGraph: {
    title: "Catering Services | La Estancia Steakhouse Twin Cities",
    description: "Premium Argentinian catering throughout the Twin Cities metro area from our Tangletown Minneapolis restaurant.",
    images: ["/images/la-estancia-logo-transparent.png"],
  },
}

export default function CateringServicesPage() {
  const cateringAreas = [
    {
      city: "Minneapolis",
      description: "Catering throughout Minneapolis including downtown, Uptown, North Loop, and surrounding neighborhoods",
      services: [
        { name: "Corporate Catering", href: "/catering-minneapolis" },
        { name: "Wedding Catering", href: "/catering-minneapolis" },
        { name: "Private Event Catering", href: "/catering-minneapolis" },
        { name: "Special Occasion Catering", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "St Paul",
      description: "Premium catering services for downtown St Paul, Highland Park, Summit Hill, and greater St Paul area",
      services: [
        { name: "Corporate Catering St Paul", href: "/catering-minneapolis" },
        { name: "Wedding Catering St Paul", href: "/catering-minneapolis" },
        { name: "Private Events St Paul", href: "/catering-minneapolis" },
        { name: "Business Meeting Catering", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "Edina",
      description: "Authentic Argentinian catering for Edina, Southdale area, and surrounding communities",
      services: [
        { name: "Edina Corporate Catering", href: "/catering-minneapolis" },
        { name: "Edina Wedding Catering", href: "/catering-minneapolis" },
        { name: "Edina Private Events", href: "/catering-minneapolis" },
        { name: "Edina Special Occasions", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "Bloomington",
      description: "Catering services for Bloomington, Mall of America area, and nearby suburbs",
      services: [
        { name: "Bloomington Corporate Events", href: "/catering-minneapolis" },
        { name: "Bloomington Weddings", href: "/catering-minneapolis" },
        { name: "Bloomington Private Parties", href: "/catering-minneapolis" },
        { name: "Hotel Event Catering", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "Minnetonka",
      description: "Premium catering for Minnetonka, Hopkins, and western suburbs",
      services: [
        { name: "Minnetonka Corporate Catering", href: "/catering-minneapolis" },
        { name: "Minnetonka Wedding Catering", href: "/catering-minneapolis" },
        { name: "Western Suburbs Events", href: "/catering-minneapolis" },
        { name: "Private Home Catering", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "Plymouth",
      description: "Authentic Argentinian catering for Plymouth, Golden Valley, and northwest metro",
      services: [
        { name: "Plymouth Corporate Events", href: "/catering-minneapolis" },
        { name: "Plymouth Wedding Catering", href: "/catering-minneapolis" },
        { name: "Northwest Metro Catering", href: "/catering-minneapolis" },
        { name: "Business Lunch Catering", href: "/catering-minneapolis" }
      ]
    },
    {
      city: "Maple Grove",
      description: "Catering services for Maple Grove, Brooklyn Park, and northern suburbs",
      services: [
        { name: "Maple Grove Corporate Catering", href: "/catering-minneapolis" },
        { name: "Maple Grove Events", href: "/catering-minneapolis" },
        { name: "Northern Suburbs Catering", href: "/catering-minneapolis" },
        { name: "Family Celebration Catering", href: "/catering-minneapolis" }
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden no-global-bg">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('/images/background.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Twin Cities Catering Services
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Catering <span className="text-gold-gradient">Services</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Located in Tangletown, Minneapolis at 4751 Nicollet Ave, La Estancia provides premium 
                Argentinian catering services throughout the Twin Cities metro area. Bring our authentic 
                steakhouse experience to your event, wherever you are in the Twin Cities.
              </p>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-border/50">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Our Restaurant Location</h3>
                <p className="font-inter text-muted-foreground">
                  📍 4751 Nicollet Ave, Tangletown, Minneapolis, MN 55419
                </p>
                <p className="font-inter text-sm text-muted-foreground mt-2">
                  Visit us for dine-in or let us bring La Estancia to your event!
                </p>
              </div>

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
                  <span>View Menu</span>
                  <span>📋</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Areas */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Twin Cities Communities We <span className="text-gold-gradient">Cater To</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our restaurant is located in Tangletown, Minneapolis, but we bring our authentic 
                  Argentinian steakhouse experience to events throughout the Twin Cities metro area.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cateringAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                      {area.city} Catering
                    </h3>
                    <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-inter font-semibold text-foreground text-sm uppercase tracking-wide">
                        Catering Services for {area.city}:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.services.map((service, serviceIndex) => (
                          <a
                            key={serviceIndex}
                            href={service.href}
                            className="font-inter text-sm text-accent hover:text-accent/80 transition-colors duration-300 flex items-center space-x-2"
                          >
                            <span>→</span>
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant vs Catering Clarification */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  One Location, <span className="text-gold-gradient">Twin Cities Catering</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 text-center">
                    Visit Our Restaurant
                  </h3>
                  <div className="text-center space-y-2 mb-6">
                    <p className="font-inter text-foreground font-semibold">4751 Nicollet Ave</p>
                    <p className="font-inter text-muted-foreground">Tangletown, Minneapolis, MN 55419</p>
                    <p className="font-inter text-muted-foreground">📞 (612) 200-8377</p>
                  </div>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Experience our full menu and authentic Argentinian atmosphere at our 
                    beautiful Tangletown location in Minneapolis.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-3xl">🚚</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 text-center">
                    Twin Cities Catering
                  </h3>
                  <div className="text-center space-y-2 mb-6">
                    <p className="font-inter text-foreground font-semibold">We Come to You!</p>
                    <p className="font-inter text-muted-foreground">Throughout Twin Cities Metro</p>
                    <p className="font-inter text-muted-foreground">📞 (612) 200-8377</p>
                  </div>
                  <p className="font-inter text-muted-foreground text-center leading-relaxed">
                    Bring La Estancia's premium Argentinian cuisine to your event anywhere 
                    in the Twin Cities metro area with our professional catering services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-warm border border-border/50">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Ready to Experience La Estancia?
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Visit our Tangletown restaurant or let us cater your Twin Cities event.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Restaurant Information
                  </h3>
                  <div className="font-inter text-muted-foreground space-y-2">
                    <p>📍 4751 Nicollet Ave, Tangletown, MN 55419</p>
                    <p>📞 (612) 200-8377</p>
                    <p>🚗 Parking available</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    Catering Service Areas
                  </h3>
                  <div className="font-inter text-muted-foreground space-y-2">
                    <p>• Minneapolis & surrounding areas</p>
                    <p>• St Paul & East Metro</p>
                    <p>• Edina, Bloomington & South Metro</p>
                    <p>• Minnetonka, Plymouth & West Metro</p>
                    <p>• Maple Grove & North Metro</p>
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
                  <span>Reserve Table</span>
                  <span>→</span>
                </a>
                <a
                  href="tel:+16122008377"
                  className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
                >
                  <span>Call for Catering</span>
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
