import { useFormik } from 'formik'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

import { finalizarPedido } from '../../services/api'
import type { RootReducer } from '../../store'
import { formataPreco } from '../../utils'
import Botao from '../Botao'
import { mascaraCartao, mascaraCep, mascaraNumero } from './mascaras'
import * as S from './styles'

type Props = {
  aoVoltarParaCarrinho: () => void
  aoConcluir: () => void
}

type Etapa = 'entrega' | 'pagamento' | 'confirmacao'

const camposEntrega = [
  'destinatario',
  'endereco',
  'cidade',
  'cep',
  'numero',
] as const

const obrigatorio = 'Campo obrigatório'
const anoAtual = new Date().getFullYear()

const schema = Yup.object({
  destinatario: Yup.string()
    .min(3, 'Mínimo de 3 caracteres')
    .required(obrigatorio),
  endereco: Yup.string().required(obrigatorio),
  cidade: Yup.string().required(obrigatorio),
  cep: Yup.string().length(9, 'CEP inválido').required(obrigatorio),
  numero: Yup.string().required(obrigatorio),
  complemento: Yup.string(),
  nomeCartao: Yup.string()
    .min(3, 'Mínimo de 3 caracteres')
    .required(obrigatorio),
  numeroCartao: Yup.string()
    .length(19, 'Cartão inválido')
    .required(obrigatorio),
  cvv: Yup.string().length(3, 'CVV inválido').required(obrigatorio),
  mesVencimento: Yup.number()
    .typeError('Mês inválido')
    .min(1, 'Mês inválido')
    .max(12, 'Mês inválido')
    .required(obrigatorio),
  anoVencimento: Yup.number()
    .typeError('Ano inválido')
    .min(anoAtual, 'Ano inválido')
    .required(obrigatorio),
})

type Campos = Yup.InferType<typeof schema>

const valoresIniciais = {
  destinatario: '',
  endereco: '',
  cidade: '',
  cep: '',
  numero: '',
  complemento: '',
  nomeCartao: '',
  numeroCartao: '',
  cvv: '',
  mesVencimento: '',
  anoVencimento: '',
}

const Checkout = ({ aoVoltarParaCarrinho, aoConcluir }: Props) => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const [etapa, setEtapa] = useState<Etapa>('entrega')
  const [pedido, setPedido] = useState('')
  const [erroEnvio, setErroEnvio] = useState(false)

  const valorTotal = itens.reduce((total, item) => total + item.preco, 0)

  const form = useFormik({
    initialValues: valoresIniciais,
    validationSchema: schema,
    onSubmit: async (valores) => {
      const dados = valores as unknown as Campos
      setErroEnvio(false)

      try {
        const resposta = await finalizarPedido({
          products: itens.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: dados.destinatario,
            address: {
              description: dados.endereco,
              city: dados.cidade,
              zipCode: dados.cep,
              number: Number(dados.numero),
              complement: dados.complemento ?? '',
            },
          },
          payment: {
            card: {
              name: dados.nomeCartao,
              number: dados.numeroCartao,
              code: Number(dados.cvv),
              expires: {
                month: Number(dados.mesVencimento),
                year: Number(dados.anoVencimento),
              },
            },
          },
        })
        setPedido(resposta.orderId)
        setEtapa('confirmacao')
      } catch {
        setErroEnvio(true)
      }
    },
  })

  const erro = (campo: keyof typeof valoresIniciais) =>
    form.touched[campo] && form.errors[campo] ? form.errors[campo] : ''

  const campo = (
    nome: keyof typeof valoresIniciais,
    mascara?: (valor: string) => string,
  ) => ({
    id: nome,
    name: nome,
    value: form.values[nome],
    onBlur: form.handleBlur,
    onChange: (evento: React.ChangeEvent<HTMLInputElement>) =>
      form.setFieldValue(
        nome,
        mascara ? mascara(evento.target.value) : evento.target.value,
      ),
    $erro: !!erro(nome),
  })

  const irParaPagamento = async () => {
    const erros = await form.validateForm()
    form.setTouched(
      Object.fromEntries(camposEntrega.map((nome) => [nome, true])),
    )

    if (camposEntrega.every((nome) => !erros[nome])) {
      setEtapa('pagamento')
    }
  }

  if (etapa === 'confirmacao') {
    return (
      <S.Etapa>
        <S.Titulo>Pedido realizado - {pedido}</S.Titulo>
        <S.Texto>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </S.Texto>
        <S.Texto>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </S.Texto>
        <S.Texto>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.Texto>
        <S.Texto>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.Texto>
        <S.Botoes $margem={24}>
          <Botao variante="secundario" title="Concluir" onClick={aoConcluir}>
            Concluir
          </Botao>
        </S.Botoes>
      </S.Etapa>
    )
  }

  return (
    <form onSubmit={form.handleSubmit} noValidate>
      {etapa === 'entrega' && (
        <S.Etapa>
          <S.Titulo>Entrega</S.Titulo>
          <S.Campo>
            <label htmlFor="destinatario">Quem irá receber</label>
            <S.Input type="text" {...campo('destinatario')} />
            <small>{erro('destinatario')}</small>
          </S.Campo>
          <S.Campo>
            <label htmlFor="endereco">Endereço</label>
            <S.Input type="text" {...campo('endereco')} />
            <small>{erro('endereco')}</small>
          </S.Campo>
          <S.Campo>
            <label htmlFor="cidade">Cidade</label>
            <S.Input type="text" {...campo('cidade')} />
            <small>{erro('cidade')}</small>
          </S.Campo>
          <S.Linha $colunas="155px 155px">
            <S.Campo>
              <label htmlFor="cep">CEP</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('cep', mascaraCep)}
              />
              <small>{erro('cep')}</small>
            </S.Campo>
            <S.Campo>
              <label htmlFor="numero">Número</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('numero', mascaraNumero(6))}
              />
              <small>{erro('numero')}</small>
            </S.Campo>
          </S.Linha>
          <S.Campo>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <S.Input type="text" {...campo('complemento')} />
          </S.Campo>
          <S.Botoes>
            <Botao
              variante="secundario"
              title="Continuar com o pagamento"
              onClick={irParaPagamento}
            >
              Continuar com o pagamento
            </Botao>
            <Botao
              variante="secundario"
              title="Voltar para o carrinho"
              onClick={aoVoltarParaCarrinho}
            >
              Voltar para o carrinho
            </Botao>
          </S.Botoes>
        </S.Etapa>
      )}

      {etapa === 'pagamento' && (
        <S.Etapa>
          <S.Titulo>
            Pagamento - Valor a pagar {formataPreco(valorTotal)}
          </S.Titulo>
          <S.Campo>
            <label htmlFor="nomeCartao">Nome no cartão</label>
            <S.Input type="text" {...campo('nomeCartao')} />
            <small>{erro('nomeCartao')}</small>
          </S.Campo>
          <S.Linha $colunas="228px 87px">
            <S.Campo>
              <label htmlFor="numeroCartao">Número do cartão</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('numeroCartao', mascaraCartao)}
              />
              <small>{erro('numeroCartao')}</small>
            </S.Campo>
            <S.Campo>
              <label htmlFor="cvv">CVV</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('cvv', mascaraNumero(3))}
              />
              <small>{erro('cvv')}</small>
            </S.Campo>
          </S.Linha>
          <S.Linha $colunas="155px 155px">
            <S.Campo>
              <label htmlFor="mesVencimento">Mês de vencimento</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('mesVencimento', mascaraNumero(2))}
              />
              <small>{erro('mesVencimento')}</small>
            </S.Campo>
            <S.Campo>
              <label htmlFor="anoVencimento">Ano de vencimento</label>
              <S.Input
                type="text"
                inputMode="numeric"
                {...campo('anoVencimento', mascaraNumero(4))}
              />
              <small>{erro('anoVencimento')}</small>
            </S.Campo>
          </S.Linha>
          {erroEnvio && (
            <S.Aviso>
              Não foi possível finalizar o pedido. Tente novamente.
            </S.Aviso>
          )}
          <S.Botoes>
            <Botao
              tipo="submit"
              variante="secundario"
              title="Finalizar pagamento"
              desabilitado={form.isSubmitting}
            >
              {form.isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
            </Botao>
            <Botao
              variante="secundario"
              title="Voltar para a edição de endereço"
              onClick={() => setEtapa('entrega')}
            >
              Voltar para a edição de endereço
            </Botao>
          </S.Botoes>
        </S.Etapa>
      )}
    </form>
  )
}

export default Checkout
