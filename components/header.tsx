"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative h-10 w-40">
            <Image src="/logo.png" alt="SpeakToday Logo" fill className="object-contain object-left" priority />
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
            <Button onClick={() => scrollToSection("enroll")}>Inscribirse</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
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
