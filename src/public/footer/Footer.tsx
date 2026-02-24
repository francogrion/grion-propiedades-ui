import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight">Grion</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Propiedades</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Somos una familia que ama Colonia Caroya y desde hace mas de 30 anos desarrolla y construye viviendas en la zona.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Inicio
              </Link>
              <Link to="/properties" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Propiedades
              </Link>
              <Link to="/about-us" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Nosotros
              </Link>
              <Link to="/contact" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Contacto
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Propiedades</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/properties?category=lote" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Lotes
              </Link>
              <Link to="/properties?category=casa" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Casas
              </Link>
              <Link to="/properties?category=departamento" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Departamentos
              </Link>
              <Link to="/properties?category=oficina" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Oficinas
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+543525500533" className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100">
                <Phone className="h-4 w-4 shrink-0" />
                +54 3525 500533
              </a>
              <a href="mailto:info@grionpropiedades.com" className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100">
                <Mail className="h-4 w-4 shrink-0" />
                info@grionpropiedades.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Colonia Caroya, Cordoba, Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-50">
            {'© 2026 Grion Propiedades. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}