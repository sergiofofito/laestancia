"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, User, Phone } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/food" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "/meetowners" },
    { label: "Catering", href: "/catering-services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "nav-glass shadow-warm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/main_logo.png"
              alt="La Estancia Steakhouse"
              className={`h-14 w-auto transition-all duration-300 ${
                isScrolled ? "drop-shadow-md" : "drop-shadow-2xl"
              }`}
            />
            <div className="ml-4 hidden lg:block">
              <h1 className="font-playfair text-xl font-bold text-foreground">
                La Estancia
              </h1>
              <p className="font-inter text-xs text-muted-foreground tracking-widest uppercase">
                Steakhouse
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-inter font-medium text-foreground hover:text-accent transition-colors duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+16122008377"
              className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="font-inter text-sm font-medium">(612) 200-8377</span>
            </a>
            <div className="w-px h-6 bg-border"></div>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden nav-glass border-t border-border/30">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block font-inter font-medium text-foreground hover:text-accent transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/5 animate-fade-in-up stagger-${index + 1}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border/30 space-y-4">
                <a
                  href="tel:+16122008377"
                  className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-accent/5"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-inter font-medium">(612) 200-8377</span>
                </a>
                <div className="flex items-center space-x-4 px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
