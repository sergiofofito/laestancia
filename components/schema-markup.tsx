"use client"

export function RestaurantSchema() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Estancia Steakhouse",
    "description": "Authentic Argentinian and Uruguayan steakhouse in Minneapolis featuring premium steaks, traditional parrillada, and South American cuisine.",
    "url": "https://www.laestanciasteakhouse.com",
    "telephone": "+16122008377",
    "email": "laestanciamn@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4751 Nicollet Ave",
      "addressLocality": "Minneapolis",
      "addressRegion": "MN",
      "postalCode": "55419",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9216",
      "longitude": "-93.2781"
    },
    "openingHours": [
      "Mo-Su 17:00-22:00"
    ],
    "servesCuisine": [
      "Argentinian",
      "Uruguayan",
      "South American",
      "Steakhouse"
    ],
    "priceRange": "$$$",
    "acceptsReservations": true,
    "hasMenu": "https://www.laestanciasteakhouse.com/food",
    "image": [
      "https://www.laestanciasteakhouse.com/images/main_logo.png",
      "https://www.laestanciasteakhouse.com/images/premium-ribeye-steak-with-chimichurri-sauce-on-ele.jpg",
      "https://www.laestanciasteakhouse.com/images/elegant-steakhouse-interior-with-warm-lighting-and.jpg"
    ],
    "logo": "https://www.laestanciasteakhouse.com/images/main_logo.png",
    "sameAs": [
      "https://www.facebook.com/laestanciasteakhouse",
      "https://www.instagram.com/laestanciasteakhouse",
      "https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Minneapolis",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "St Paul",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Edina",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Bloomington",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Minnetonka",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Plymouth",
        "addressRegion": "MN"
      },
      {
        "@type": "City",
        "name": "Maple Grove",
        "addressRegion": "MN"
      }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Dinner Reservation"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Estancia Steakhouse",
    "description": "Premier Argentinian steakhouse serving Minneapolis, St Paul, and Twin Cities metro area with authentic South American cuisine and premium steaks.",
    "url": "https://www.laestanciasteakhouse.com",
    "telephone": "+16122008377",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4751 Nicollet Ave",
      "addressLocality": "Minneapolis",
      "addressRegion": "MN",
      "postalCode": "55419",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9216",
      "longitude": "-93.2781"
    },
    "openingHours": "Mo-Su 17:00-22:00",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD",
    "parkingAvailable": true,
    "wheelchairAccessible": true,
    "smokingAllowed": false,
    "image": "https://www.laestanciasteakhouse.com/images/main_logo.png",
    "logo": "https://www.laestanciasteakhouse.com/images/main_logo.png"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
