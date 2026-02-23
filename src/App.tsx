import type { ReactNode } from 'react';
import './App.css';
import { Footer } from './public/footer/Footer';
import { Header } from './public/header/Header';

// const url = "http://localhost:8080/api/images";

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

interface Props {
  children: ReactNode
}

function App({ children }: Props) {
  // const { data, error, loading } = useFetch<ImageResponse>(url)

  // if (loading) {
  //   return <div>Cargando...</div>
  // }

  // if (error) {
  //   return <div>UPS! Hay un error: {error.message}</div>
  // }

  return (
    <>
      <Header/>
        {children}
        {/* <!-- Hero principal --> */}
        <section className="hero">
          <div className="container hero__content">
            <div className="hero__text">
              <h1>Encontrá tu próxima propiedad</h1>
              <p>
                Casas, departamentos y oportunidades de inversión seleccionadas
                cuidadosamente para vos.
              </p>
              {/* <div>{JSON.stringify(data)}</div> */}
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
      <Footer/>
    </>
  )
}

export default App
