import { Button } from "@/components"
import { ArrowRight, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-background" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Phone className="h-5 w-5 text-primary-foreground/80" />
          <a
            href="tel:+543525500533"
            className="text-lg font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            +54 3525 500533
          </a>
        </div>
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Te ayudamos a vivir la vida que siempre sonaste
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
          Mandanos un mensaje y te respondemos a la brevedad
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-background px-8 text-base text-foreground hover:bg-background/90"
          >
            <Link to="/contact">
              Contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}