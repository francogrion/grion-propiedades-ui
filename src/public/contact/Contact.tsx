export const Contact = () => {
  return (
            <>
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
                            rows={4}
                            placeholder="Mensaje"
                            required
                            ></textarea>
                        </div>
                        <button type="submit">Enviar mensaje</button>
                        </form>
                    </div>
                    </div>
                </section>
            </>
  )
}