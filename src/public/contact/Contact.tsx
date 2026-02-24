"use client"

import { Button, Input, Label, Textarea } from "@/components"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import type { SubmitEvent } from "react"
import { useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
  e.preventDefault()
  setSubmitted(true)
}

  return (
    <div className="pt-20">
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Estamos para ayudarte
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Contacto
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Mandanos un mensaje y te respondemos a la brevedad
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-1">
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">Información de contacto</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  No dudes en contactarnos por cualquier consulta. Estamos disponibles de lunes a sábado.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href="tel:+543525500533"
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+54 3525 500533</p>
                  </div>
                </a>

                <a
                  href="mailto:info@grionpropiedades.com"
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@grionpropiedades.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Ubicación</p>
                    <p className="text-sm text-muted-foreground">Colonia Caroya, Cordoba, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-primary/5 p-6">
                <p className="text-sm font-semibold text-foreground">Horarios de atención</p>
                <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábados: Cerrado</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="max-w-md text-muted-foreground">
                    Gracias por contactarnos. Te responderemos a la máxima brevedad posible.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 lg:p-8">
                  <h2 className="font-serif text-xl font-semibold text-card-foreground">
                    Envianos un mensaje
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Completá el formulario y nos pondremos en contacto vos.
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" placeholder="Tu apellido" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input id="telefono" type="tel" placeholder="+54 ..." />
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input id="asunto" placeholder="Sobre que queres consultar?" required />
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribi tu mensaje..."
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button type="submit" size="lg" className="gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}