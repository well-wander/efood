import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Prato } from '../../models/Restaurante'

export type ItemCarrinho = Prato & {
  chave: string
}

type CarrinhoState = {
  itens: ItemCarrinho[]
  aberto: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false,
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Prato>) => {
      state.itens.push({ ...action.payload, chave: crypto.randomUUID() })
    },
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter((item) => item.chave !== action.payload)
    },
    limpar: (state) => {
      state.itens = []
    },
    abrir: (state) => {
      state.aberto = true
    },
    fechar: (state) => {
      state.aberto = false
    },
  },
})

export const { adicionar, remover, limpar, abrir, fechar } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
