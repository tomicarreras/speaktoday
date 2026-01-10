"use client"

import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full border-b border-border z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-md shadow-lg" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative h-10 w-40">
            <Image
              src={isDark ? "/logo-footer.png" : "/logo.png"}
              alt="SpeakToday Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("workshops")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Talleres
            </button>
            <button
              onClick={() => scrollToSection("method")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button onClick={() => scrollToSection("enroll")}>Inscribirse</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("workshops")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Talleres
            </button>
            <button
              onClick={() => scrollToSection("method")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("enroll")} className="w-full">
              Inscribirse
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
