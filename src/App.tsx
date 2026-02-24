import type { ReactNode } from 'react';
import './App.css';
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
    </>
  )
}

export default App
