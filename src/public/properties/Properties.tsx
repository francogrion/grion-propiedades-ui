import { PropertyCard, PropertyFilters } from "@/components";
import type { PropertyCategory, PropertyStatus } from "@/lib/properties";
import { properties } from "@/lib/properties";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";


export default function Properties() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") as PropertyCategory | undefined
  const status = searchParams.get("status") as PropertyStatus | undefined

  const filtered = properties.filter((p) => {
    if (category && p.category !== category) return false
    if (status && p.status !== status) return false
    return true
  })

  return (
    <div className="pt-20">
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestro catálogo
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Propiedades
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explorá nuestra selección de lotes, casas, departamentos y locales comerciales en Colonia Caroya.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Suspense fallback={null}>
            <PropertyFilters />
          </Suspense>

          <div className="mt-10">
            {filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <p className="font-serif text-xl font-semibold text-foreground">
                  No encontramos propiedades
                </p>
                <p className="text-muted-foreground">
                  Intenta cambiar los filtros para ver mas resultados.
                </p>
              </div>
            )}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
          </p>
        </div>
      </section>
    </div>
  )
}