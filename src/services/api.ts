import type { Restaurante } from '../models/Restaurante'

const URL_BASE = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const buscar = async <T>(url: string): Promise<T> => {
  const resposta = await fetch(url)

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar ${url}`)
  }

  return resposta.json()
}

export const buscarRestaurantes = () => buscar<Restaurante[]>(URL_BASE)

export const buscarRestaurante = (id: string) =>
  buscar<Restaurante>(`${URL_BASE}/${id}`)
