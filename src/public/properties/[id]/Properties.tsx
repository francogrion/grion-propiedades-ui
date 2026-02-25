import { Badge, Button, Image, PropertyCard } from "@/components";
import { getPropertyById, properties } from "@/lib/properties";
import { ArrowLeft, Bath, BedDouble, Mail, MapPin, Maximize, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = id ? getPropertyById(id) : undefined;

  useEffect(() => {
    if (!property) {
      navigate("/properties", { replace: true });
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  const statusLabel = property.status === "en-venta" ? "En Venta" : "Para Alquilar";
  const typeLabel = property.type === "residencial" ? "Residencial" : "Comercial";

  const related = properties
    .filter((p) => p.id !== property.id && p.category === property.category)
    .slice(0, 3);


  return (
    <div className="pt-20">
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Propiedades
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  decoding="sync"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground rounded-sm px-3 py-1.5">
                    {statusLabel}
                  </Badge>
                  <Badge variant="secondary" className="rounded-sm px-3 py-1.5">
                    {typeLabel}
                  </Badge>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {property.title}
                  </h1>
                  <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <p className="font-serif text-3xl font-bold text-primary">
                  {property.priceLabel}
                </p>

                <div className="flex flex-wrap gap-6 rounded-lg border border-border bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <Maximize className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Superficie</p>
                      <p className="font-semibold text-foreground">{property.area} m2</p>
                    </div>
                  </div>
                  {property.bedrooms !== undefined && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <BedDouble className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Habitaciones</p>
                        <p className="font-semibold text-foreground">{property.bedrooms}</p>
                      </div>
                    </div>
                  )}
                  {property.bathrooms !== undefined && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <Bath className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Banos</p>
                        <p className="font-semibold text-foreground">{property.bathrooms}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Descripcion</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {property.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Contactar por esta propiedad
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Estamos para ayudarte. Contactanos para mas informacion sobre esta propiedad.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild className="gap-2">
                    <a href="tel:+543525500533">
                      <Phone className="h-4 w-4" />
                      Llamar ahora
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href={`https://wa.me/543525500533?text=Hola! Me interesa la propiedad: ${property.title} (${property.priceLabel})`} target="_blank" rel="noopener noreferrer">
                      <Mail className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link to="/contact">
                      Enviar mensaje
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
              Propiedades Similares
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}