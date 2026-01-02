"use client"

import { Code, Plane, Briefcase, MessageCircle } from "lucide-react"

export function WorkshopsSection() {
  const workshops = [
    {
      icon: Code,
      title: "English for Developers",
      description:
        "Inglés técnico especializado para programadores: documentación, code reviews, reuniones con equipos internacionales y comunicación en proyectos tech.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Plane,
      title: "English for Travellers",
      description:
        "Vocabulario y expresiones esenciales para viajar: aeropuertos, hoteles, restaurantes, emergencias y conversaciones con locales.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Briefcase,
      title: "English for Job Interviews",
      description:
        "Prepárate para entrevistas en inglés: respuestas efectivas, vocabulario profesional, negociación de salario y networking laboral.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: MessageCircle,
      title: "General English",
      description:
        "Inglés conversacional para el día a día: conversaciones cotidianas, expresiones idiomáticas, comprensión auditiva y fluidez natural.",
      color: "bg-orange-500/10 text-orange-600",
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
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Ofrecemos talleres especializados diseñados para diferentes objetivos y contextos. Elige el que mejor se
              adapte a tus necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${workshop.color}`}>
                  <workshop.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
