import { Button, Image } from "@/components"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      <Image
        src="/images/hero-land.jpg"
        alt="Vista aerea de lotes residenciales"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="sync"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-7xl text-balance">
          Encontrá El Lote de Tus Sueños
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/80 md:text-xl">
          Contactanos para conocer más sobre los lotes disponibles
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2 px-8 text-base">
            <Link to="/contact">
              Contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 border-background/40 bg-transparent px-8 text-base text-background hover:bg-background/10 hover:text-background">
            <Link to="/properties">
              Ver Propiedades
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}