"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Truck, Users, Phone, Mail } from "lucide-react"

export default function MeetOwnersPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.3) 2px, transparent 2px)`,
              backgroundSize: '80px 80px'
            }}
          />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Logo */}
              <div className="mb-8 animate-fade-in-up">
                <img
                  src="/images/la-estancia-logo-transparent.png"
                  alt="La Estancia Steakhouse Full Logo"
                  className="h-24 w-auto mx-auto drop-shadow-2xl"
                />
              </div>
              
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-8 animate-fade-in-up stagger-1">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  The Full Story
                </span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up stagger-2">
                Who Are <span className="text-gold-gradient">We?</span>
              </h1>
              
              <p className="font-inter text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up stagger-3">
                La Estancia was founded by Daniel Larumbe, his wife Susana, and Chef Lui.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground mt-4 animate-fade-in-up stagger-4">
                Daniel and Susana, both originally from Uruguay, and Luis Del Hoyo from Argentina
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            
            {/* Daniel and Susana */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="animate-fade-in-up">
                <div className="relative rounded-2xl overflow-hidden shadow-warm">
                  <img
                    src="/images/larumbe.png"
                    alt="Daniel and Susana Larumbe" 
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.currentTarget.src = "/placeholder.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="font-inter text-sm font-medium text-foreground">Dani and Su</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-up stagger-2">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                  <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                    Founders
                  </span>
                </div>
                
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  Daniel & <span className="text-gold-gradient">Susana</span> Larumbe
                </h2>
                
                <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Daniel, a former professional soccer player for Minnesota United (formerly known as the Minnesota Thunder), 
                    and Susana always felt the need for a space where they could celebrate their culture with friends and 
                    share it with the local community.
                  </p>
                  
                  <p>
                    Both originally from Uruguay, Daniel and Susana bring the authentic warmth and hospitality of South America 
                    to Minneapolis. Their vision was to create more than just a restaurant – a place where the rich traditions 
                    of Uruguay and Argentina could flourish and be shared with their new community.
                  </p>
                  
                  <p>
                    Their passion for their heritage, combined with Daniel's athletic discipline and Susana's nurturing spirit, 
                    has created the foundation of La Estancia's welcoming atmosphere.
                  </p>
                </div>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                    <div className="font-playfair text-2xl font-bold text-accent mb-1">🇺🇾</div>
                    <div className="font-inter text-sm text-muted-foreground">From Uruguay</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                    <div className="font-playfair text-2xl font-bold text-accent mb-1">⚽</div>
                    <div className="font-inter text-sm text-muted-foreground">Pro Soccer Player</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef Lui Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                  <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                    Executive Chef
                  </span>
                </div>
                
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  Chef <span className="text-gold-gradient">Lui</span>
                </h2>
                
                <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Chef Lui, a native Argentinean, brings extensive experience in the food and beverage industry. 
                    Having worked as a chef, general manager, and brand manager across the USA, Mexico, Brazil, 
                    Argentina, and Dubai, he has honed his culinary skills and passion for authentic flavors.
                  </p>
                  
                  <p>
                    Since 2022, he has been based in Miami, working as an F&B consultant, opening numerous successful 
                    restaurants. His international experience and deep understanding of Argentine cuisine make him 
                    the perfect culinary leader for La Estancia.
                  </p>
                  
                  <p>
                    Chef Lui's expertise spans traditional Argentine cooking techniques, modern culinary innovations, 
                    and restaurant operations, bringing a world-class dining experience to Minneapolis.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-8">
                  <span className="font-inter text-sm font-medium text-muted-foreground">@THECHEFLUI</span>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Experience Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                    <div className="font-playfair text-2xl font-bold text-accent mb-1">6+</div>
                    <div className="font-inter text-xs text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                    <div className="font-playfair text-2xl font-bold text-accent mb-1">🇦🇷</div>
                    <div className="font-inter text-xs text-muted-foreground">Argentina</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
                    <div className="font-playfair text-2xl font-bold text-accent mb-1">👨‍🍳</div>
                    <div className="font-inter text-xs text-muted-foreground">Expert Chef</div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-fade-in-up stagger-2">
                <div className="relative rounded-2xl overflow-hidden shadow-warm">
                  <img
                    src="https://static.wixstatic.com/media/255b20_6b4bfce1629f4350a0ffdfc7da9a0828~mv2.jpg/v1/fill/w_1708,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/255b20_6b4bfce1629f4350a0ffdfc7da9a0828~mv2.jpg"
                    alt="Chef Lui"
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.currentTarget.src = "/open-kitchen-with-chefs-grilling-steaks-and-prepar.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="font-inter text-sm font-medium text-foreground">Chef Lui</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.3) 2px, transparent 2px)`,
              backgroundSize: '80px 80px'
            }}
          />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
                <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Our Services
                </span>
              </div>
              
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Bringing La Estancia <span className="text-gold-gradient">To You</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Delivery Service */}
              <div className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center">
                  Delivery
                </h3>
                
                <p className="font-inter text-lg text-muted-foreground leading-relaxed text-center mb-6">
                  Enjoy the convenience of having our delectable dishes delivered right to your doorstep. 
                  Perfect for busy days or cozy nights at home, our delivery service ensures that you can 
                  savor the authentic flavors of La Estancia wherever you are.
                </p>
                
                <div className="text-center">
                  <Button className="btn-primary">
                    Order Delivery
                  </Button>
                </div>
              </div>

              {/* Private Dining */}
              <div className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center">
                  Private Dining
                </h3>
                
                <p className="font-inter text-lg text-muted-foreground leading-relaxed text-center mb-6">
                  Experience the luxury of a private dining experience with La Estancia. Whether it's a 
                  romantic dinner for two or a family celebration, our private dining service offers 
                  personalized menus, impeccable service, and an unforgettable culinary journey.
                </p>
                
                <div className="text-center">
                  <Button className="btn-secondary">
                    Book Private Dining
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Ready to Experience <span className="text-gold-gradient">La Estancia?</span>
              </h2>
              
              <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us for an authentic taste of Argentina and Uruguay in the heart of Minneapolis. 
                We look forward to sharing our passion and heritage with you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-primary" asChild>
                  <a href="tel:+16122008377">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (612) 200-8377
                  </a>
                </Button>
                
                <Button className="btn-secondary" asChild>
                  <a href="/#contact">
                    <Mail className="h-5 w-5 mr-2" />
                    Visit Our Restaurant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
