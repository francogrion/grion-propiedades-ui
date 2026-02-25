import { Badge, Image } from "@/components"
import type { Property } from "@/lib/properties"
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react"
import { Link } from "react-router-dom"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const statusLabel = property.status === "en-venta" ? "En Venta" : "Para Alquilar"
  const statusColor =
    property.status === "en-venta"
      ? "bg-primary text-primary-foreground"
      : "bg-accent text-accent-foreground"
  const typeLabel = property.type === "residencial" ? "Residencial" : "Comercial"

  return (
    <Link
      to={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          <Badge className={`${statusColor} rounded-sm px-2.5 py-1 text-xs font-semibold`}>
            {statusLabel}
          </Badge>
          <Badge variant="secondary" className="rounded-sm px-2.5 py-1 text-xs">
            {typeLabel}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {property.title}
        </h3>
        <p className="font-serif text-xl font-bold text-primary">
          {property.priceLabel}
        </p>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5" />
            <span>{property.area} m2</span>
          </div>
          {property.bedrooms !== undefined && (
            <div className="flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms !== undefined && (
            <div className="flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5" />
              <span>{property.bathrooms}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}