import './App.css'

function App() {
  return (
    <>

  {/* <!-- Header / Navbar --> */}
  <header class="header">
    <div class="container header__content">
      <div class="logo">
        <a href="/">Grion Propiedades</a>
      </div>
      <nav class="nav">
        <a href="#propiedades">Propiedades</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  {/* <!-- Hero principal --> */}
  <section class="hero">
    <div class="container hero__content">
      <div class="hero__text">
        <h1>Encontrá tu próxima propiedad</h1>
        <p>
          Casas, departamentos y oportunidades de inversión seleccionadas
          cuidadosamente para vos.
        </p>
        {/* <!-- Buscador simple --> */}
        <form class="search-form">
          <div class="search-form__row">
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
      <div class="hero__image">
        {/* <!-- Acá iría una imagen de portada --> */}
        <div class="hero__image-placeholder">Imagen destacada</div>
      </div>
    </div>
  </section>

  {/* <!-- Listado de propiedades destacadas --> */}
  <section id="propiedades" class="properties">
    <div class="container">
      <header class="section-header">
        <h2>Propiedades destacadas</h2>
        <p>Una selección de las mejores oportunidades disponibles hoy.</p>
      </header>

      <div class="properties__grid">
        {/* <!-- Tarjeta de propiedad --> */}
        <article class="property-card">
          <div class="property-card__image">
            {/* <!-- Imagen de la propiedad --> */}
            <span class="property-card__badge">Venta</span>
          </div>
          <div class="property-card__body">
            <h3>Casa en Begues con vista a la montaña</h3>
            <p class="property-card__location">Begues, Barcelona</p>
            <p class="property-card__price">€450.000</p>
            <ul class="property-card__features">
              <li>3 habitaciones</li>
              <li>2 baños</li>
              <li>120 m²</li>
            </ul>
            <a href="#" class="property-card__link">Ver detalles</a>
          </div>
        </article>

        {/* <!-- Duplicá/iterá estas tarjetas dinámicamente después --> */}
        <article class="property-card">
          <div class="property-card__image">
            <span class="property-card__badge">Alquiler</span>
          </div>
          <div class="property-card__body">
            <h3>Departamento moderno en Barcelona</h3>
            <p class="property-card__location">Eixample, Barcelona</p>
            <p class="property-card__price">€1.200 / mes</p>
            <ul class="property-card__features">
              <li>2 habitaciones</li>
              <li>1 baño</li>
              <li>80 m²</li>
            </ul>
            <a href="#" class="property-card__link">Ver detalles</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  {/* <!-- Sección de confianza / nosotros --> */}
  <section id="nosotros" class="about">
    <div class="container about__content">
      <div>
        <h2>Tu inmobiliaria de confianza</h2>
        <p>
          Acompañamos a nuestros clientes en cada paso del proceso de compra,
          venta o alquiler, con transparencia y dedicación.
        </p>
        <ul class="about__highlights">
          <li>Más de 10 años de experiencia en el mercado.</li>
          <li>Asesoramiento personalizado y profesional.</li>
          <li>Red de contactos y oportunidades exclusivas.</li>
        </ul>
      </div>
    </div>
  </section>

  {/* <!-- Contacto --> */}
  <section id="contacto" class="contact">
    <div class="container contact__content">
      <div>
        <h2>Contactanos</h2>
        <p>Contanos qué estás buscando y te respondemos a la brevedad.</p>
        <form class="contact-form">
          <div class="contact-form__row">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div class="contact-form__row">
            <input type="text" name="phone" placeholder="Teléfono" />
          </div>
          <div class="contact-form__row">
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
  <footer class="footer">
    <div class="container footer__content">
      <p>© 2026 Grion Propiedades. Todos los derechos reservados.</p>
      <p>Begues, Barcelona · España</p>
    </div>
  </footer>
    </>
  )
}

export default App
