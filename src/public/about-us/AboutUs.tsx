import { Button, Image } from "@/components"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutUs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-family.jpg"
              alt="Equipo de Grion Propiedades"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="sync"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quienes Somos
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Sobre Nosotros
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Somos una familia que ama Colonia Caroya y desde hace más de 30 años desarrolla y construye viviendas en la zona. 
              Nuestro compromiso es ayudarte a encontrar el hogar que siempre sonaste.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Con décadas de experiencia en el mercado inmobiliario local, conocemos cada rincón de la ciudad 
              y podemos asesorarte para tomar la mejor decisión.
            </p>
            <div>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/about-us">
                  Leer Más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}