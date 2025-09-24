import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Catering St Paul MN | La Estancia - Authentic Argentinian Steakhouse Catering",
  description: "Premium Argentinian catering for St Paul events. La Estancia brings authentic steakhouse cuisine to your St Paul celebration. Restaurant located in Tangletown, Minneapolis.",
  keywords: ["catering St Paul", "St Paul catering", "Argentinian catering St Paul", "steakhouse catering St Paul", "corporate catering St Paul", "wedding catering St Paul"],
  openGraph: {
    title: "Best Steakhouse St Paul MN | La Estancia Steakhouse",
    description: "Experience the best steakhouse St Paul has to offer. Premium Argentinian steaks and traditional cuisine.",
    images: ["/images/premium-ribeye-steak-with-chimichurri-sauce-on-ele.jpg"],
  },
}

export default function SteakhouseStPaulPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('/images/premium-ribeye-steak-with-chimichurri-sauce-on-ele.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Serving St Paul & Twin Cities
                </span>
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Catering <span className="text-gold-gradient">St Paul</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Bring the authentic flavors of La Estancia to your St Paul event. Our restaurant is located 
                in Tangletown, Minneapolis, but we provide premium Argentinian catering throughout St Paul 
                and the Twin Cities metro area.
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

        {/* Why Best Steakhouse */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/10 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why St Paul Chooses <span className="text-gold-gradient">La Estancia</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  St Paul diners travel to La Estancia for an authentic Argentinian steakhouse experience 
                  that rivals the finest establishments in Buenos Aires. Here's what makes us the premier 
                  choice for St Paul steak lovers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Premium Argentinian Steaks
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">CAB Ribeye & New York Strip</h4>
                        <p className="font-inter text-sm text-muted-foreground">Hand-selected cuts grilled to perfection over our authentic parrilla</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">Traditional Asado de Tira</h4>
                        <p className="font-inter text-sm text-muted-foreground">Bone-in short ribs that St Paul diners rave about</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">House-made Chimichurri</h4>
                        <p className="font-inter text-sm text-muted-foreground">Secret family recipe that perfectly complements our steaks</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                    Convenient for St Paul
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">Easy Drive from St Paul</h4>
                        <p className="font-inter text-sm text-muted-foreground">Just 15 minutes from downtown St Paul via I-94</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">Ample Parking</h4>
                        <p className="font-inter text-sm text-muted-foreground">Free parking for all St Paul guests</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground">Reservations Welcome</h4>
                        <p className="font-inter text-sm text-muted-foreground">Book ahead to guarantee your St Paul dining experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Dishes */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Signature Dishes <span className="text-gold-gradient">St Paul Loves</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-textured-white rounded-2xl p-6 shadow-warm border border-border/50">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    Parrillada for Two
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed">
                    Perfect for St Paul couples - a mixed grill featuring ribeye, skirt steak, 
                    chorizo, and morcilla with chimichurri and salsa criolla.
                  </p>
                  <span className="font-playfair text-lg font-semibold text-accent">$127</span>
                </div>

                <div className="bg-textured-white rounded-2xl p-6 shadow-warm border border-border/50">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    Tomahawk Ribeye
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed">
                    A show-stopping 32oz bone-in ribeye that's become legendary among 
                    St Paul steak enthusiasts. Perfect for sharing.
                  </p>
                  <span className="font-playfair text-lg font-semibold text-accent">$135</span>
                </div>

                <div className="bg-textured-white rounded-2xl p-6 shadow-warm border border-border/50">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    Milanesa Napolitana
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed">
                    Breaded beef topped with ham, mozzarella, and provolone - 
                    a comfort food favorite among St Paul families.
                  </p>
                  <span className="font-playfair text-lg font-semibold text-accent">$28</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/20 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-textured-white rounded-3xl p-8 lg:p-12 shadow-warm border border-border/50 text-center">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Experience the Best Steakhouse St Paul Recommends?
              </h2>
              
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                Join the St Paul residents who've discovered La Estancia. Reserve your table today 
                and taste why we're considered the premier Argentinian steakhouse in the Twin Cities.
              </p>
              
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
