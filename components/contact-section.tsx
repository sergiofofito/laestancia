import { MapPin, Phone, Clock, Mail, Car, Accessibility, Wine, PartyPopper, Instagram, Facebook, ChefHat, Map } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 80% 80%, rgba(205, 133, 63, 0.3) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="font-inter text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          
          <div className="mb-6">
            <img 
              src="/images/flagstogether.png" 
              alt="La Estancia Steakhouse" 
              className="h-16 lg:h-20 w-auto mx-auto mb-4" 
            />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-center">
              Visit <span className="text-gold-gradient">La Estancia</span>
            </h2>
          </div>
          
          <p className="font-inter text-xl leading-relaxed opacity-90">
            We're ready to welcome you for an unforgettable Argentinean/Uruguayan dining experience 
            at our Minneapolis location.
          </p>
        </div>
        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Location</h3>
                <p className="font-inter text-white/80 leading-relaxed">
                  4751 Nicollet Ave<br />
                  Minneapolis, MN 55419<br />
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+16122008377"
                  className="font-inter text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg"
                >
                  (612) 200-8377
                </a>
                <p className="font-inter text-white/60 text-sm mt-1">
                  Call during business hours
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Hours</h3>
                <div className="space-y-2 font-inter text-white/80">
                  <div className="flex justify-between">
                    <span>Tuesday - Thursday</span>
                    <span className="font-bold ml-4">4:30 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-bold ml-4">4:30 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2 mt-3">
                    <span>Sunday & Saturday Lunch</span>
                    <span className="font-bold ml-4">12:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:laestanciamn@gmail.com"
                  className="font-inter text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  laestanciamn@gmail.com
                </a>
                <p className="font-inter text-white/60 text-sm mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="animate-fade-in-up stagger-2">
            {/* Google Maps Embed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.4!2d-93.2774999!3d44.9161876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f627d6ed7f8ea3%3A0x2b22232b8f205c46!2sLa%20Estancia%20Argentinean%20-%20Uruguayan%20Steakhouse!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="La Estancia Steakhouse Location"
                />
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/La+Estancia+Argentinean+-+Uruguayan+Steakhouse/@44.9161876,-93.2800748,17z/data=!3m1!4b1!4m6!3m5!1s0x87f627d6ed7f8ea3:0x2b22232b8f205c46!8m2!3d44.9161876!4d-93.2774999!16s%2Fg%2F11vybmwg3j?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  <Map className="h-4 w-4 mr-2" />
                  View Larger Map & Get Directions
                </a>
              </div>
            </div>

            {/* Special Features */}
            <div className="grid grid-cols-2 gap-4">
              
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Accessibility className="h-5 w-5 text-white" />
                </div>
                <div className="font-inter text-sm font-medium">Accessible</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Wine className="h-5 w-5 text-white" />
                </div>
                <div className="font-inter text-sm font-medium">Full Bar</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <PartyPopper className="h-5 w-5 text-white" />
                </div>
                <div className="font-inter text-sm font-medium">Private Events</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <img
                src="/images/main_logo.png"
                alt="La Estancia Logo"
                className="h-12 w-auto"
              />
              <div className="font-inter text-sm opacity-70">© 2024 All rights reserved</div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <span className="font-inter text-sm opacity-70">Follow us:</span>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/laestanciamn" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    title="La Estancia on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/laestanciamn" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    title="La Estancia on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
                <a 
                  href="https://www.instagram.com/thecheflui" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
                  title="Chef Lui on Instagram"
                >
                  <ChefHat className="h-5 w-5" />
                  <span className="font-inter text-sm font-medium">@thecheflui</span>
                  <Instagram className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full translate-x-20 translate-y-20"></div>
    </section>
  )
}
