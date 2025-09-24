export function ServiceAreasSection() {
  const serviceAreas = [
    {
      city: "Minneapolis",
      description: "Visit our restaurant at 4751 Nicollet Ave in Tangletown or enjoy catering throughout Minneapolis",
      services: [
        { name: "Dine-In Restaurant", href: "/" },
        { name: "Catering Services", href: "/catering-minneapolis" },
        { name: "Private Dining", href: "/private-dining-minneapolis" }
      ],
      image: "/images/minneapolis.png"
    },
    {
      city: "St Paul",
      description: "Premium catering services for St Paul events - we bring La Estancia to you",
      services: [
        { name: "St Paul Catering", href: "/catering-minneapolis" },
        { name: "Corporate Events", href: "/catering-minneapolis" },
        { name: "Special Occasions", href: "/catering-minneapolis" }
      ],
      image: "/images/stpaul.png"
    },
    {
      city: "Edina",
      description: "Authentic Argentinian catering for Edina events and celebrations",
      services: [
        { name: "Edina Catering", href: "/catering-minneapolis" },
        { name: "Wedding Catering", href: "/catering-minneapolis" },
        { name: "Corporate Catering", href: "/catering-minneapolis" }
      ],
      image: "/images/edina.png"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
              <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                One Location, Twin Cities Catering
              </span>
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Restaurant & <span className="text-gold-gradient">Catering Services</span>
            </h2>
            
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Located in Tangletown, Minneapolis at 4751 Nicollet Ave, La Estancia provides 
              dine-in service and catering throughout the Twin Cities metro area.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-warm border border-border/50 hover:shadow-gold transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.city} services at La Estancia`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                    {area.city}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <a
                        key={serviceIndex}
                        href={service.href}
                        className="block font-inter text-sm text-accent hover:text-accent/80 transition-colors duration-300 flex items-center space-x-2"
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

          {/* Restaurant Location Highlight */}
          <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50 mb-8">
            <div className="text-center mb-6">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Our Restaurant Location
              </h3>
              <div className="font-inter text-lg text-foreground font-semibold mb-2">
                4751 Nicollet Ave, Tangletown, Minneapolis, MN 55419
              </div>
              <p className="font-inter text-muted-foreground">
                Visit us for the full La Estancia experience or let us cater your event!
              </p>
            </div>
          </div>

          {/* Additional Catering Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-warm border border-border/50">
            <div className="text-center mb-6">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                We Also Provide Catering To These Twin Cities Communities
              </h3>
              <p className="font-inter text-muted-foreground">
                Our restaurant is in Tangletown, Minneapolis, but we cater throughout the metro area
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-2">West Metro</h4>
                <ul className="font-inter text-sm text-muted-foreground space-y-1">
                  <li>Minnetonka</li>
                  <li>Plymouth</li>
                  <li>Hopkins</li>
                  <li>Golden Valley</li>
                </ul>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-2">South Metro</h4>
                <ul className="font-inter text-sm text-muted-foreground space-y-1">
                  <li>Bloomington</li>
                  <li>Richfield</li>
                  <li>Burnsville</li>
                  <li>Eagan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-2">North Metro</h4>
                <ul className="font-inter text-sm text-muted-foreground space-y-1">
                  <li>Maple Grove</li>
                  <li>Brooklyn Park</li>
                  <li>Coon Rapids</li>
                  <li>Blaine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-2">East Metro</h4>
                <ul className="font-inter text-sm text-muted-foreground space-y-1">
                  <li>Woodbury</li>
                  <li>Oakdale</li>
                  <li>Maplewood</li>
                  <li>White Bear Lake</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a
                href="/catering-services"
                className="btn-secondary font-playfair text-lg inline-flex items-center space-x-2"
              >
                <span>View All Catering Services</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}