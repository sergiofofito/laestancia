export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely incredible experience! The ribeye was cooked to perfection and the atmosphere was elegant yet welcoming. The wine selection is outstanding - our server recommended the perfect Malbec pairing.",
      date: "2 weeks ago",
      platform: "Google"
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      review: "Best Argentine steakhouse in Minneapolis, hands down. The empanadas are authentic and the parrillada for two was more than enough food. Service was impeccable and the ambiance is perfect for date night.",
      date: "1 month ago",
      platform: "Yelp"
    },
    {
      name: "Emily Chen",
      rating: 5,
      review: "Had our anniversary dinner here and it exceeded all expectations. The private dining experience was flawless - personalized service, custom menu, and the most tender steak I've ever had. Will definitely return!",
      date: "3 weeks ago",
      platform: "Google"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/10 to-background relative">
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
            <span className="font-inter text-sm font-medium text-muted-foreground tracking-widest uppercase">
              What Our Guests Say
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Exceptional <span className="text-gold-gradient">Experiences</span>
          </h2>
          
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our guests are saying about their 
            La Estancia experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">★</span>
                ))}
              </div>
              
              {/* Review Text */}
              <blockquote className="font-inter text-muted-foreground leading-relaxed mb-6 italic">
                "{review.review}"
              </blockquote>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div>
                  <div className="font-playfair font-semibold text-foreground">{review.name}</div>
                  <div className="font-inter text-sm text-muted-foreground">{review.date}</div>
                </div>
                
                {/* Platform Badge */}
                <div className="flex items-center space-x-2">
                  {review.platform === 'Google' ? (
                    <img src="/google-reviews-logo.jpg" alt="Google Reviews" className="h-6 w-auto" />
                  ) : (
                    <img src="/yelp-reviews-logo.jpg" alt="Yelp Reviews" className="h-6 w-auto" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-secondary/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Overall Score */}
            <div className="text-center lg:text-left">
              <div className="font-playfair text-5xl lg:text-6xl font-bold text-accent mb-2">4.9</div>
              <div className="flex items-center justify-center lg:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-2xl">★</span>
                ))}
              </div>
              <div className="font-inter text-muted-foreground">Based on 150+ reviews</div>
            </div>
            
            {/* Rating Breakdown */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-3">
                  <span className="font-inter text-sm text-muted-foreground w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                      style={{ 
                        width: stars === 5 ? '85%' : stars === 4 ? '12%' : stars === 3 ? '2%' : '1%' 
                      }}
                    ></div>
                  </div>
                  <span className="font-inter text-sm text-muted-foreground w-8">
                    {stars === 5 ? '85%' : stars === 4 ? '12%' : stars === 3 ? '2%' : '1%'}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Review Platforms */}
            <div className="text-center lg:text-right">
              <div className="font-playfair text-lg font-semibold text-foreground mb-4">
                Find us on
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-4">
                <a 
                  href="#" 
                  className="bg-white rounded-lg p-3 shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                >
                  <img src="/google-reviews-logo.jpg" alt="Google Reviews" className="h-8 w-auto" />
                </a>
                <a 
                  href="#" 
                  className="bg-white rounded-lg p-3 shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                >
                  <img src="/yelp-reviews-logo.jpg" alt="Yelp Reviews" className="h-8 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-inter text-lg text-muted-foreground mb-6">
            Ready to create your own memorable experience?
          </p>
          <a
            href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn?date=2025-09-13&seats=2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-playfair text-lg inline-flex items-center space-x-2 group"
          >
            <span>Make Reservation</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
