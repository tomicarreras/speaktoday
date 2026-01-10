import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Necesito conocimientos previos de inglés?",
    answer:
      "No necesariamente. Trabajamos con estudiantes de todos los niveles, desde principiantes absolutos hasta avanzados. En la evaluación inicial determinaremos tu nivel y te ubicaremos en el grupo adecuado.",
  },
  {
    question: "¿Cómo se realizan las clases?",
    answer:
      "Las clases se realizan por videollamada (Zoom, Google Meet u otra plataforma). Solo necesitas una conexión a internet estable, computadora o tablet con cámara y micrófono, y un ambiente tranquilo para la clase.",
  },
  {
    question: "¿Puedo elegir el horario de mis clases?",
    answer:
      "Las clases tienen horarios y días fijos por grupo. Al inscribirte, te informaremos los horarios disponibles según tu nivel para que elijas el que mejor se adapte a tu agenda.",
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer:
      "Cada clase tiene una duración de 60 minutos. Este tiempo está optimizado para mantener la concentración y maximizar el aprendizaje sin generar fatiga.",
  },
  {
    question: "¿Cuántas personas hay por grupo?",
    answer:
      "Los grupos tienen un máximo de 6 personas. Esto garantiza que cada estudiante tenga suficiente tiempo para participar activamente y recibir atención personalizada del profesor.",
  },
  {
    question: "¿Qué pasa si falto a una clase?",
    answer:
      "Las clases tienen horarios fijos y no se reprograman. Si faltas a una clase, ésta se considera utilizada. Por eso es importante que elijas un horario al que puedas comprometerte regularmente.",
  },
  {
    question: "¿Cuánto tiempo tengo para usar mis clases?",
    answer:
      "Una vez que comiences con tu paquete, las clases deben tomarse según el calendario del grupo. Recomendamos mantener la regularidad para un progreso óptimo y aprovechar la dinámica grupal.",
  },
  {
    question: "¿Ofrecen certificado al finalizar?",
    answer:
      "Sí, al completar tu paquete de clases recibirás un certificado de participación digital que indica las horas cursadas y el nivel alcanzado.",
  },
  {
    question: "¿Cómo es el método de pago?",
    answer:
      "Aceptamos pagos a través de MercadoPago. Una vez que selecciones tu paquete, serás redirigido a nuestra tienda en MercadoShops donde podrás pagar con tarjeta de crédito, débito o transferencia bancaria.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Preguntas <span className="text-primary">frecuentes</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Respuestas a las dudas más comunes sobre nuestras clases
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
