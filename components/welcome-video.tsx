"use client"

import { Play } from "lucide-react"

export function WelcomeVideo() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce a Tu Profesor</h2>
          <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
            Un mensaje de bienvenida de nuestro equipo
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border-2 border-border">
            <video controls className="w-full h-full object-cover" poster="/video-thumbnail.jpg">
              <source src="/videos/welcome.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>

            {/* Optional: Custom play button overlay - remove if not needed */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-10 h-10 text-primary-foreground ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
