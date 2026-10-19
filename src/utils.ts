export const formataPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)

export const encurta = (texto: string, limite: number) =>
  texto.length > limite ? `${texto.slice(0, limite - 3).trimEnd()}...` : texto

export const capitaliza = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1)
