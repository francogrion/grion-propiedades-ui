import { Image } from "@/components"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const categories = [
  {
    title: "Departamentos",
    description:
      "Departamentos de una o dos habitaciones, cerca de la zona comercial, listos para escriturar.",
    image: "/images/apartments.jpg",
    href: "/properties?category=departamento",
    cta: "Encontrá Departamentos",
  },
  {
    title: "Casas",
    description:
      "Casas de dos o tres habitaciones, enorme patio, garage, todos los servicios, cerca de escuelas y negocios.",
    image: "/images/house-1.jpg",
    href: "/properties?category=casa",
    cta: "Encontrá Casas",
  },
  {
    title: "Oficinas",
    description:
      "Oficinas y locales comerciales, grandes espacios, perfecta ubicación, todas las comodidades.",
    image: "/images/offices.jpg",
    href: "/properties?category=oficina",
    cta: "Encontrá Oficinas",
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Estamos para ayudarte
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Qué Estás Buscando?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-card border border-border transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {cat.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  {cat.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}