import { Check } from "lucide-react"

export function MethodSection() {
  return (
    <section id="method" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Nuestro <span className="text-primary">método</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Un enfoque conversacional que te ayuda a hablar inglés con confianza desde el primer día
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary text-secondary-foreground p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">¿Cómo Funciona?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Evaluación Inicial</h4>
                    <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                      Evaluamos tu nivel actual para ubicarte en el grupo adecuado
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Clases Grupales Reducidas</h4>
                    <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                      Grupos de máximo 6 personas para atención personalizada
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horarios Fijos</h4>
                    <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                      Días y horarios establecidos para crear rutina de aprendizaje
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Práctica Conversacional</h4>
                    <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                      80% conversación, 20% teoría para máxima fluidez
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <h4 className="font-semibold mb-1">Personas Máximo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Grupos reducidos para garantizar participación activa
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">60'</div>
                <h4 className="font-semibold mb-1">Duración de Clase</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tiempo óptimo para mantener la concentración y el aprendizaje
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <h4 className="font-semibold mb-1">Online en Vivo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clases por videollamada con profesores certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
