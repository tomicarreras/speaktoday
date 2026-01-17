"use client"

import {
  Code,
  Plane,
  Briefcase,
  MessageCircle,
  Calendar,
} from "lucide-react"

export function WorkshopsSection() {
  const workshops = [
    {
      icon: Code,
      title: "English for Developers",
      description:
        "Inglés técnico especializado para programadores: documentación, code reviews, reuniones con equipos internacionales y comunicación en proyectos tech.",
      color: "bg-blue-500/10 text-blue-600",
      available: true,
      startDate: "15 de marzo",
    },
    {
      icon: Plane,
      title: "English for Travellers",
      description:
        "Vocabulario y expresiones esenciales para viajar: aeropuertos, hoteles, restaurantes, emergencias y conversaciones con locales.",
      color: "bg-green-500/10 text-green-600",
      available: false,
      startDate: null,
    },
    {
      icon: Briefcase,
      title: "English for Job Interviews",
      description:
        "Prepárate para entrevistas en inglés: respuestas efectivas, vocabulario profesional, negociación de salario y networking laboral.",
      color: "bg-purple-500/10 text-purple-600",
      available: true,
      startDate: "1 de abril",
    },
    {
      icon: MessageCircle,
      title: "General English",
      description:
        "Inglés conversacional para el día a día: conversaciones cotidianas, expresiones idiomáticas, comprensión auditiva y fluidez natural.",
      color: "bg-orange-500/10 text-orange-600",
      available: false,
      startDate: "Próximamente",
    },
  ]

  return (
    <section id="workshops" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Nuestros <span className="text-primary">Talleres</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos talleres especializados diseñados para diferentes objetivos y contextos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon
              const disabled = !workshop.available

              return (
                <div
                  key={index}
                  className={`
                    p-8 rounded-lg border transition-all
                    ${
                      disabled
                        ? "bg-muted/40 border-border opacity-60 grayscale cursor-not-allowed"
                        : "bg-card border-border hover:border-primary/50"
                    }
                  `}
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                      disabled ? "bg-muted text-muted-foreground" : workshop.color
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {workshop.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Estado + fecha */}
                  <div className="mt-6 flex flex-col gap-3">
                    <span
                      className={`w-fit px-3 py-1 text-xs font-medium rounded-full
                        ${
                          workshop.available
                            ? "bg-emerald-500/10 text-emerald-600"
                            : "bg-red-500/10 text-red-600"
                        }
                      `}
                    >
                      {workshop.available
                        ? "Disponible"
                        : "No disponible temporalmente"}
                    </span>

                    {workshop.startDate && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Inicio: {workshop.startDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
