"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    id: 1,
    name: "Clase Individual",
    price: 30000,
    classes: 1,
    description: "Perfecta para probar nuestro método",
    features: [
      "1 clase de 60 minutos",
      "Profesor nativo certificado",
      "Material didáctico incluido",
      "Horario flexible",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Paquete Básico",
    price: 100000,
    classes: 4,
    description: "Ideal para avance consistente",
    features: [
      "4 clases de 60 minutos",
      "Profesor nativo certificado",
      "Material didáctico incluido",
      "Horario flexible",
      "Seguimiento personalizado",
    ],
    popular: true,
    savings: "20%",
  },
  {
    id: 3,
    name: "Paquete Premium",
    price: 220000,
    classes: 10,
    description: "Máximo progreso garantizado",
    features: [
      "10 clases de 60 minutos",
      "Profesor nativo certificado",
      "Material didáctico incluido",
      "Horario flexible",
      "Seguimiento personalizado",
      "Soporte entre clases",
    ],
    popular: false,
    savings: "27%",
  },
]

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handleBuyClick = (planId: number) => {
    setSelectedPlan(planId)
    // Aquí puedes poner el link de MercadoShops
    window.open("https://mercadoshops.com.ar/tu-tienda", "_blank")
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Planes y <span className="text-primary">Precios</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Elige el paquete que mejor se adapte a tus necesidades y presupuesto. Precios claros sin sorpresas en el futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={`p-6 relative ${plan.popular ? "border-primary border-2 shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">${plan.price.toLocaleString("es-AR")}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      Ahorrás {plan.savings}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleBuyClick(plan.id)}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Comprar Ahora
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Todos los precios son en pesos argentinos. Pago seguro a través de MercadoPago.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
