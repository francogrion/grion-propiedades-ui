import './App.css';
import { useFetch } from './hooks';

const url = "http://localhost:8080/api/images";

export interface ImageResponse {
  images: ImageItem[];
  results: number;
  status: string;
}

export interface ImageItem {
  id: SurrealId;
  url: string;
}

export interface SurrealId {
  key: SurrealKey;
  table: string;
}

export interface SurrealKey {
  String: string;
}

function App() {
  const { data, error, loading } = useFetch<ImageResponse>(url)
  // const { data: dataUser, error: errorUser, loading: loadingUser } = useFetch<{name: string}>(url)

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>
  }

  return (
    <>

  {/* <!-- Header / Navbar --> */}
  <header className="header">
    <div className="container header__content">
      <div className="logo">
        <a href="/">Grion Propiedades</a>
      </div>
      <nav className="nav">
        <a href="#propiedades">Propiedades</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  {/* <!-- Hero principal --> */}
  <section className="hero">
    <div className="container hero__content">
      <div className="hero__text">
        <h1>Encontrá tu próxima propiedad</h1>
        <p>
          Casas, departamentos y oportunidades de inversión seleccionadas
          cuidadosamente para vos.
        </p>
        <div>{JSON.stringify(data)}</div>
        {/* <!-- Buscador simple --> */}
        <form className="search-form">
          <div className="search-form__row">
            <input
              type="text"
              name="q"
              placeholder="Buscar por ciudad, barrio o código..."
            />
            <select name="operation">
              <option value="">Operación</option>
              <option value="venta">Venta</option>
              <option value="alquiler">Alquiler</option>
            </select>
            <select name="type">
              <option value="">Tipo</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="local">Local</option>
            </select>
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
      <div className="hero__image">
        {/* <!-- Acá iría una imagen de portada --> */}
        <div className="hero__image-placeholder">Imagen destacada</div>
      </div>
    </div>
  </section>

  {/* <!-- Listado de propiedades destacadas --> */}
  <section id="propiedades" className="properties">
    <div className="container">
      <header className="section-header">
        <h2>Propiedades destacadas</h2>
        <p>Una selección de las mejores oportunidades disponibles hoy.</p>
      </header>

      <div className="properties__grid">
        {/* <!-- Tarjeta de propiedad --> */}
        <article className="property-card">
          <div className="property-card__image">
            {/* <!-- Imagen de la propiedad --> */}
            <span className="property-card__badge">Venta</span>
          </div>
          <div className="property-card__body">
            <h3>Casa en Begues con vista a la montaña</h3>
            <p className="property-card__location">Begues, Barcelona</p>
            <p className="property-card__price">€450.000</p>
            <ul className="property-card__features">
              <li>3 habitaciones</li>
              <li>2 baños</li>
              <li>120 m²</li>
            </ul>
            <a href="#" className="property-card__link">Ver detalles</a>
          </div>
        </article>

        {/* <!-- Duplicá/iterá estas tarjetas dinámicamente después --> */}
        <article className="property-card">
          <div className="property-card__image">
            <span className="property-card__badge">Alquiler</span>
          </div>
          <div className="property-card__body">
            <h3>Departamento moderno en Barcelona</h3>
            <p className="property-card__location">Eixample, Barcelona</p>
            <p className="property-card__price">€1.200 / mes</p>
            <ul className="property-card__features">
              <li>2 habitaciones</li>
              <li>1 baño</li>
              <li>80 m²</li>
            </ul>
            <a href="#" className="property-card__link">Ver detalles</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  {/* <!-- Sección de confianza / nosotros --> */}
  <section id="nosotros" className="about">
    <div className="container about__content">
      <div>
        <h2>Tu inmobiliaria de confianza</h2>
        <p>
          Acompañamos a nuestros clientes en cada paso del proceso de compra,
          venta o alquiler, con transparencia y dedicación.
        </p>
        <ul className="about__highlights">
          <li>Más de 10 años de experiencia en el mercado.</li>
          <li>Asesoramiento personalizado y profesional.</li>
          <li>Red de contactos y oportunidades exclusivas.</li>
        </ul>
      </div>
    </div>
  </section>

  {/* <!-- Contacto --> */}
  <section id="contacto" className="contact">
    <div className="container contact__content">
      <div>
        <h2>Contactanos</h2>
        <p>Contanos qué estás buscando y te respondemos a la brevedad.</p>
        <form className="contact-form">
          <div className="contact-form__row">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="contact-form__row">
            <input type="text" name="phone" placeholder="Teléfono" />
          </div>
          <div className="contact-form__row">
            <textarea
              name="message"
              rows="4"
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer className="footer">
    <div className="container footer__content">
      <p>© 2026 Grion Propiedades. Todos los derechos reservados.</p>
      <p>Begues, Barcelona · España</p>
    </div>
  </footer>
    </>
  )
}

export default App
