import { Button, ContactCta, Image } from "@/components"
import { ArrowRight, Award, Clock, Home, Users } from "lucide-react"
import { Link } from "react-router-dom"

const stats = [
  { icon: Clock, label: "Años de experiencia", value: "30+" },
  { icon: Home, label: "Propiedades vendidas", value: "500+" },
  { icon: Users, label: "Familias felices", value: "350+" },
  { icon: Award, label: "Proyectos desarrollados", value: "50+" },
]

export default function AboutUs() {
  return (
    <div className="pt-20">
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quienes Somos
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Sobre Nosotros
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Conoce a la familia detras de Grion Propiedades
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about-family.jpg"
                alt="Equipo de Grion Propiedades"
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
                Una familia que ama Colonia Caroya
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Somos una familia que ama Colonia Caroya y desde hace más de 30 años desarrolla y construye viviendas en la zona. Nuestro compromiso es brindarte la mejor experiencia en la búsqueda de tu hogar ideal.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Con décadas de experiencia en el mercado inmobiliario local, conocemos cada rincón de la ciudad y podemos asesorarte para tomar la mejor decisión. Trabajamos con transparencia, honestidad y dedicación para que encuentres exactamente lo que buscas.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Nuestra pasión es ver crecer a Colonia Caroya y contribuir al desarrollo de la comunidad a través de proyectos inmobiliarios de calidad que mejoran la vida de las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Números que nos respaldan
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-serif text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
            Nuestros Valores
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Calidad</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cada propiedad que ofrecemos cumple con los más altos estandares de calidad y seguridad.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Confianza</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y la honestidad con nuestros clientes.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Compromiso</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nos comprometemos a encontrar la propiedad perfecta para cada familia y cada necesidad.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild className="gap-2">
              <Link to="/properties">
                Ver Propiedades
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  )
}