import { Button, PropertyCard } from "@/components"
import { getLots } from "@/lib/properties"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function LotsSection() {
  const lots = getLots()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Lotes disponibles
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Visitá Tu Lote Perfecto
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lots.map((lot) => (
            <PropertyCard key={lot.id} property={lot} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/properties?category=lote">
              Ver Todos los Lotes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}