export const Properties = () => {
  return (
        <>
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
        </>

  )
}