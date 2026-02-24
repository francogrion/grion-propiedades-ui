"use client"

import { Button } from "@/components"
import { Menu, Phone, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-tight text-foreground">Grion</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Propiedades</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link to="/properties" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Propiedades
          </Link>
          <Link to="/about-us" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Link to="/faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Preguntas
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+543525500533" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            +54 3525 500533
          </a>
          <Button asChild>
            <Link to="/contact">Contacto</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            <Link
              to="/"
              className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/properties"
              className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Propiedades
            </Link>
            <Link
              to="/about-us"
              className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/faq"
              className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Preguntas
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <a href="tel:+543525500533" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              +54 3525 500533
            </a>
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="text-sm text-muted-foreground">Modo nocturno</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}