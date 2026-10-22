const somenteDigitos = (valor: string, limite: number) =>
  valor.replace(/\D/g, '').slice(0, limite)

export const mascaraCep = (valor: string) =>
  somenteDigitos(valor, 8).replace(/^(\d{5})(\d)/, '$1-$2')

export const mascaraCartao = (valor: string) =>
  somenteDigitos(valor, 16).replace(/(\d{4})(?=\d)/g, '$1 ')

export const mascaraNumero = (limite: number) => (valor: string) =>
  somenteDigitos(valor, limite)
