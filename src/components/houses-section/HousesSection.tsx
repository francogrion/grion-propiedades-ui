import { Button, PropertyCard } from "@/components"
import { getHouses, properties } from "@/lib/properties"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function HousesSection() {
  const houses = getHouses()
  const commercial = properties.filter((p) => p.category === "local")
  const featured = [...commercial, ...houses]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Encontrá tu casa soñada
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Casas Exclusivas
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/properties?category=casa">
              Ver Todas las Casas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}