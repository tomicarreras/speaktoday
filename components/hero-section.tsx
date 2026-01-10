"use client"

import { Button } from "@/components/ui/button"
import { Globe, Users, Calendar, Video } from "lucide-react"

export function HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto px-4">
        
        {/* Texto */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Aprende Inglés a Tu Ritmo,{" "}
            <span className="text-primary">Desde Cualquier Lugar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Clases grupales de inglés online con profesores certificados. Mejora tu
            fluidez, pronunciación y confianza con nuestro método conversacional en
            grupos reducidos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToEnroll} className="text-lg">
              Comenzar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("method")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Conocer Más
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Grupos Reducidos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Máximo 6 personas por clase para atención personalizada
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Horarios Fijos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Días y horarios establecidos para crear rutina de aprendizaje
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Todos los Niveles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desde principiante hasta avanzado, adaptado a tu nivel
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">
                Audio y Video de Alta Calidad
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clases online con sonido claro y video en alta definición
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
