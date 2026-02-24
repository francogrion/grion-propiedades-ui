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
        question: "¿Que documentacion necesito para comprar un lote?",
        answer:
          "Para comprar un lote necesitas presentar tu DNI vigente, constancia de CUIL/CUIT, y comprobante de ingresos o actividad economica. Si vas a financiar la compra, tambien se requieren los ultimos recibos de sueldo o declaracion jurada de ganancias. Nuestro equipo te guia en cada paso del proceso.",
      },
      {
        question: "¿Ofrecen financiacion para la compra de lotes?",
        answer:
          "Si, ofrecemos planes de financiacion flexibles adaptados a cada cliente. Podes acceder a planes en pesos con cuotas fijas o ajustables. Tambien trabajamos con creditos hipotecarios de entidades bancarias asociadas. Contactanos para conocer las opciones disponibles segun tu situacion.",
      },
      {
        question: "¿Los lotes cuentan con servicios basicos?",
        answer:
          "Todos nuestros lotes en loteos propios cuentan con apertura de calles, energia electrica, y agua corriente. Dependiendo de la ubicacion, algunos tambien incluyen gas natural, cloacas y alumbrado publico. En la ficha de cada propiedad se detallan los servicios disponibles.",
      },
      {
        question: "¿Puedo visitar los lotes antes de comprar?",
        answer:
          "Por supuesto. Coordinamos visitas de lunes a sabados en horarios flexibles. Te acompanamos personalmente al terreno para que puedas conocer la ubicacion, los limites del lote, el entorno y los servicios disponibles. Podes agendar tu visita por telefono o por WhatsApp.",
      },
      {
        question: "¿Que gastos adicionales tiene la compra de un lote?",
        answer:
          "Ademas del precio del lote, debes considerar los gastos de escrituracion (aproximadamente un 3-5% del valor), impuesto de sellos, y honorarios de escribano. En Grion Propiedades te brindamos un desglose detallado de todos los costos antes de concretar la operacion.",
      },
    ],
  },
  {
    title: "Alquiler de Propiedades",
    questions: [
      {
        question: "¿Que requisitos se piden para alquilar?",
        answer:
          "Los requisitos basicos son: DNI del inquilino, garantia propietaria en Colonia Caroya o zona (o seguro de caucion), ultimos tres recibos de sueldo, y referencias personales. Para comercios se solicita documentacion adicional como habilitacion comercial y CUIT.",
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
    title: "Venta de Propiedades",
    questions: [
      {
        question: "¿Como puedo tasar mi propiedad?",
        answer:
          "Ofrecemos tasaciones gratuitas y sin compromiso. Uno de nuestros profesionales visita tu propiedad, evalua sus caracteristicas, ubicacion, estado de conservacion y las condiciones del mercado actual para darte un valor justo y competitivo. Podes solicitar una tasacion por telefono o WhatsApp.",
      },
      {
        question: "¿Cuanto cobran de comision por la venta?",
        answer:
          "Nuestra comision por venta es la establecida por el Colegio de Corredores Inmobiliarios, que es del 3% + IVA sobre el valor de la operacion para cada parte (comprador y vendedor). Este porcentaje incluye toda la gestion comercial, legal y administrativa de la venta.",
      },
      {
        question: "¿Que incluye el servicio de venta?",
        answer:
          "Nuestro servicio incluye: tasacion profesional, sesion de fotos y videos de alta calidad, publicacion en los principales portales inmobiliarios (Zonaprop, Argenprop, Mercado Libre), gestion de visitas, asesoramiento legal, acompanamiento en la negociacion y cierre de la operacion.",
      },
      {
        question: "¿Necesito tener la escritura para vender?",
        answer:
          "Es altamente recomendable contar con la escritura, pero tambien se pueden vender propiedades con boleto de compraventa o con sucesion en tramite. En cada caso analizamos la situacion particular y te asesoramos sobre los pasos a seguir para regularizar la documentacion.",
      },
    ],
  },
  {
    title: "Sobre Grion Propiedades",
    questions: [
      {
        question: "¿Cuantos anos de experiencia tienen?",
        answer:
          "Grion Propiedades es una empresa familiar con mas de 30 anos de trayectoria en el mercado inmobiliario de Colonia Caroya y alrededores. Hemos desarrollado loteos, construido viviendas y gestionado cientos de operaciones de compraventa y alquiler en la zona.",
      },
      {
        question: "¿En que zonas trabajan?",
        answer:
          "Trabajamos principalmente en Colonia Caroya, Jesus Maria, Sinsacate y localidades aledanas del norte de la provincia de Cordoba. Conocemos profundamente cada barrio, sus valores, su potencial de crecimiento y las particularidades de cada zona.",
      },
      {
        question: "¿Puedo contactarlos fuera del horario de oficina?",
        answer:
          "Si, podes enviarnos un mensaje por WhatsApp al +54 3525 500533 en cualquier momento y te responderemos a la brevedad. Nuestro horario de atencion presencial es de lunes a viernes de 9 a 13 y de 17 a 20, y sabados de 9 a 13.",
      },
      {
        question: "¿Ofrecen asesoramiento legal?",
        answer:
          "Si, contamos con un equipo de abogados especializados en derecho inmobiliario que asesoran en cada operacion. Desde la revision de la documentacion hasta la firma de la escritura, garantizamos la seguridad juridica de todas nuestras transacciones.",
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
              Encontra las respuestas a las preguntas mas comunes sobre nuestros
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
            Estamos para ayudarte. Escribinos y te respondemos a la brevedad.
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