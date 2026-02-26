import propertiesData from "@/data/properties.json"

export type PropertyType = "residencial" | "comercial"
export type PropertyStatus = "en-venta" | "alquiler"
export type PropertyCategory = "lote" | "casa" | "departamento" | "oficina" | "local"

export interface Property {
  id: string
  title: string
  description: string
  price: number
  priceLabel: string
  status: PropertyStatus
  type: PropertyType
  category: PropertyCategory
  location: string
  area: number
  bedrooms?: number
  bathrooms?: number
  image: string
  featured: boolean
}

export const properties: Property[] = propertiesData as Property[]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getPropertiesByCategory(category: PropertyCategory): Property[] {
  return properties.filter((p) => p.category === category)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}

export function getLots(): Property[] {
  return properties.filter((p) => p.category === "lote")
}

export function getHouses(): Property[] {
  return properties.filter((p) => p.category === "casa")
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}