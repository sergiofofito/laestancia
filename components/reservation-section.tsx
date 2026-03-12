import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Users, Phone, MapPin, Truck } from "lucide-react"

export function ReservationSection() {
  return (
    <section id="reservation" className="relative py-20 lg:py-32 overflow-hidden no-global-bg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/front.JPG')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="font-inter text-sm font-medium tracking-widest uppercase">
                Make a Reservation
              </span>
            </div>
            
            <h2 className="font-playfair text text-4xl lg:text-6xl font-bold mb-6 text-shadow-warm">
              Reserve Your <span className="text-gold-gradient">Table</span>
            </h2>
            
            <p className="font-inter text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              Join us for an unforgettable dining experience. Whether it's an intimate dinner for two, 
              a family celebration, or a business gathering, we'll make it memorable.
            </p>
          </div>

          {/* Reservation Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Regular Dining */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-400/30 flex items-center justify-center">
                <UtensilsCrossed className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold mb-4 text-center">Regular Dining</h3>
              
              <p className="font-inter text-white/80 mb-6 leading-relaxed">
                Experience our full menu in our elegant main dining room. Perfect for date nights, 
                family dinners, and casual celebrations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Monday - Thursday</span>
                  <span className="font-inter text-sm opacity-80">4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Friday - Saturday</span>
                  <span className="font-inter text-sm opacity-80">4:30 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Sunday Lunch</span>
                  <span className="font-inter text-sm opacity-80">12:00 PM - 8:00 PM</span>
                </div>
              </div>
              
              <a
                href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn?date=2025-09-13&seats=2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full font-inter text-lg inline-flex items-center justify-center"
              >
                Book Table
              </a>
            </div>

            {/* Private Dining */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up stagger-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-400/30 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold mb-4 text-center">Private Dining</h3>
              
              <p className="font-inter text-white/80 mb-6 leading-relaxed">
                Celebrate life's special moments with our private dining experience. 
                Customized menus and dedicated service for your group.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Capacity</span>
                  <span className="font-inter text-sm opacity-80">8-50 guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Notice</span>
                  <span className="font-inter text-sm opacity-80">48 hours advance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-sm">Customization</span>
                  <span className="font-inter text-sm opacity-80">Menu & Service</span>
                </div>
              </div>
              
              <a
                href="private-dining-minneapolis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full font-inter text-lg inline-flex items-center justify-center"
              >
                Plan Event
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone Reservation */}
            <div className="text-center animate-fade-in-up stagger-3">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-semibold mb-2">Call Us</h4>
              <a
                href="tel:+16122008377"
                className="font-inter text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                (612) 200-8377
              </a>
              <p className="font-inter text-sm text-white/70 mt-2">
                Call during business hours
              </p>
            </div>

            {/* Location */}
            <div className="text-center animate-fade-in-up stagger-4">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-semibold mb-2">Visit Us</h4>
              <p className="font-inter text-lg text-white/90">
                4751 Nicollet Ave, Minneapolis
              </p>
           
            </div>
          </div>

          {/* Delivery Options */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up stagger-4">
            <div className="flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-white mr-3" />
              <h3 className="font-playfair text-2xl font-bold text-center">Can't Join Us Tonight?</h3>
            </div>
            <p className="font-inter text-white/80 mb-6 text-center">
              Enjoy La Estancia at home with our delivery partners
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <a
                href="https://www.grubhub.com/restaurant/la-estancia-argentinean-4751-nicollet-avenue-minneapolis/10074440"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center h-20"
                aria-label="Order on Grubhub"
              >
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Logo.png"
                  alt="Grubhub"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <a
                href="https://www.doordash.com/en/store/la-estancia-minneapolis-39610682/97907946/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center h-20"
                aria-label="Order on DoorDash"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/doordash-1.svg"
                  alt="DoorDash"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </a>
              <a
                href="https://www.ubereats.com/store/la-estancia-mn/VUjEZZC0Xxej_ArwkpHFwA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center h-20"
                aria-label="Order on Uber Eats"
              >
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Eats-Logo.png"
                  alt="Uber Eats"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-8 w-2 h-32 bg-gradient-to-t from-blue-600 to-transparent opacity-30 hidden lg:block"></div>
    </section>
  )
}
