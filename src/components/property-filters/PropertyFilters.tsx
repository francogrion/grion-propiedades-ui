import { Button } from "@/components";
import type { PropertyCategory, PropertyStatus } from "@/lib/properties";
import { useSearchParams } from "react-router-dom";

const categories: { value: PropertyCategory | "all"; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "lote", label: "Lotes" },
  { value: "casa", label: "Casas" },
  { value: "departamento", label: "Departamentos" },
  { value: "oficina", label: "Oficinas" },
  { value: "local", label: "Locales" },
]

const statuses: { value: PropertyStatus | "all"; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "en-venta", label: "En Venta" },
  { value: "alquiler", label: "Alquiler" },
]

export function PropertyFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all"
  const activeStatus = searchParams.get("status") || "all"

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-muted-foreground">Tipo de propiedad</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter("category", cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-muted-foreground">Operacion</span>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <Button
              key={s.value}
              variant={activeStatus === s.value ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter("status", s.value)}
            >
              {s.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}