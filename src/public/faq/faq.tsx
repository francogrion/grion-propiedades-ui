import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger, Button
} from "@/components"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const faqCategories = [
  {
    title: "Compra de Lotes",
    questions: [
      {
        question: "¿Qué documentación necesito para comprar un lote?",
        answer:
          "Para comprar un lote necesitás presentar tu DNI vigente, constancia de CUIL/CUIT, y comprobante de ingresos o actividad económica. " + 
          "Si vas a financiar la compra, también se requieren los últimos recibos de sueldo o declaración jurada de ganancias. Nuestro equipo te guia en cada paso del proceso.",
      },
      {
        question: "¿Ofrecen financiacion para la compra de lotes?",
        answer:
          "Sí, ofrecemos planes de financiación flexibles adaptados a cada cliente. Podés acceder a planes en pesos con cuotas fijas o ajustables. También trabajamos con créditos hipotecarios de entidades bancarias asociadas. " + 
          "Contactanos para conocer las opciones disponibles segun tu situacion.",
      },
      {
        question: "¿Los lotes cuentan con servicios básicos?",
        answer:
          "Todos nuestros lotes en loteos propios cuentan con apertura de calles, energía eléctrica, y agua corriente. Dependiendo de la ubicacion, algunos también incluyen gas natural, cloacas y alumbrado público. " + 
          "En la ficha de cada propiedad se detallan los servicios disponibles.",
      },
      {
        question: "¿Puedo visitar los lotes antes de comprar?",
        answer:
          "Por supuesto. Coordinamos visitas de lunes a sábados en horarios flexibles. Te acompañamos personalmente al terreno para que puedas conocer la ubicación, los limites del lote, el entorno y los servicios disponibles. " + 
          "Podés agendar tu visita por telefono o por WhatsApp.",
      },
      {
        question: "¿Qué gastos adicionales tiene la compra de un lote?",
        answer:
          "Además del precio del lote, debes considerar los gastos de escrituración (aproximadamente un 3-5% del valor), impuesto de sellos, y honorarios de escribano. " + 
          "En Grion Propiedades te brindamos un desglose detallado de todos los costos antes de concretar la operación.",
      },
    ],
  },
  {
    title: "Alquiler de Propiedades",
    questions: [
      {
        question: "¿Qué requisitos se piden para alquilar?",
        answer:
          "Los requisitos básicos son: DNI del inquilino, garantía propietaria en Colonia Caroya o zona (o seguro de caución), últimos tres recibos de sueldo, y referencias personales. " + 
          "Para comercios se solicita documentación adicional como habilitación comercial y CUIT.",
      },
      {
        question: "¿Como se ajustan los alquileres?",
        answer:
          "Los alquileres se rigen por la ley de alquileres vigente en Argentina. Actualmente los contratos tienen una duracion minima de 2 anos para vivienda, con actualizaciones semestrales basadas en el indice Casa Propia. Te explicamos todos los detalles al momento de firmar el contrato.",
      },
      {
        question: "¿Administran las propiedades en alquiler?",
        answer:
          "Si, ofrecemos un servicio completo de administracion de alquileres que incluye: cobro de alquileres, gestion de reparaciones y mantenimiento, mediacion entre propietario e inquilino, y asesoramiento legal. El propietario puede desentenderse completamente de la gestion.",
      },
      {
        question: "¿Cuanto tiempo tarda encontrar un inquilino?",
        answer:
          "El tiempo promedio es de 2 a 4 semanas, dependiendo del tipo de propiedad y la zona. Publicamos en los principales portales inmobiliarios y en nuestras redes sociales para maximizar la visibilidad. Realizamos un proceso de seleccion riguroso para asegurar inquilinos confiables.",
      },
    ],
  },
  {
    title: "Sobre Grion Propiedades",
    questions: [
      {
        question: "¿Cuántos años de experiencia tienen?",
        answer:
          "Grion Propiedades es una empresa familiar con mas de 30 años de trayectoria en el mercado inmobiliario de Colonia Caroya y alrededores. " + 
          "Hemos desarrollado loteos, construido viviendas y gestionado cientos de operaciones de compraventa y alquiler en la zona.",
      },
      {
        question: "¿En qué zonas trabajan?",
        answer:
          "Trabajamos principalmente en Colonia Caroya, Jesus María, Sinsacate y localidades aledañas del norte de la provincia de Córdoba. " + 
          "Conocemos profundamente cada barrio, sus valores, su potencial de crecimiento y las particularidades de cada zona.",
      },
      {
        question: "¿Puedo contactarlos fuera del horario de oficina?",
        answer:
          "Sí, podes enviarnos un mensaje por WhatsApp al +54 3525 500533 en cualquier momento y te responderemos a la brevedad. " + 
          "Nuestro horario de atención presencial es de lunes a viernes de 9 a 13 y de 17 a 20.",
      },
      {
        question: "¿Ofrecen asesoramiento legal?",
        answer:
          "Sí, contamos con un equipo de abogados especializados en derecho inmobiliario que asesoran en cada operación. " + 
          "Desde la revisión de la documentación hasta la firma de la escritura, garantizamos la seguridad jurídica de todas nuestras transacciones.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="border-b border-border bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Preguntas frecuentes
            </p>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
              {"¿Tenes alguna duda?"}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Encontrá las respuestas a las preguntas más comunes sobre nuestros
              servicios, procesos de compra, venta y alquiler de propiedades.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-col gap-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                  {category.title}
                </h2>
                <div className="rounded-lg border border-border bg-card">
                  <Accordion type="single" collapsible className="px-6">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                      >
                        <AccordionTrigger className="text-left text-base font-medium text-foreground">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-balance font-serif text-3xl font-bold text-primary-foreground">
            {"¿No encontraste lo que buscabas?"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Estamos para ayudarte. Escribinos y te responderemos a la brevedad.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 gap-2"
          >
            <Link to="/contact">
              Contactanos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}