import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="relative h-10 w-40 mb-4">
                <Image src="/logo-footer.png" alt="SpeakToday Logo" fill className="object-contain object-left" />
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-4">
                Tu academia de inglés online de confianza. Aprende con profesores certificados desde la comodidad de tu
                hogar.
              </p>
              <a
                href="https://instagram.com/speaktoday"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @speaktoday
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#method" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Método
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Email: info@speaktoday.com</li>
                <li>WhatsApp: +54 9 11 1234-5678</li>
                <li>Lunes a Viernes: 9:00 - 20:00</li>
                <li>Sábados: 10:00 - 14:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} SpeakToday. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
