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

export type Pedido = {
  products: { id: number; price: number }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: { month: number; year: number }
    }
  }
}

export const finalizarPedido = async (pedido: Pedido) => {
  const resposta = await fetch(
    'https://api-ebac.vercel.app/api/efood/checkout',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido),
    },
  )

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao finalizar o pedido`)
  }

  return resposta.json() as Promise<{ orderId: string }>
}
