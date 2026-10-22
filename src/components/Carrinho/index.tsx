import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../assets/lixeira.png'
import type { RootReducer } from '../../store'
import { fechar, limpar, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../../utils'
import Botao from '../Botao'
import Checkout from '../Checkout'
import * as S from './styles'

const Carrinho = () => {
  const { itens, aberto } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()
  const [emCheckout, setEmCheckout] = useState(false)

  const valorTotal = itens.reduce((total, item) => total + item.preco, 0)

  const fecharCarrinho = useCallback(() => {
    setEmCheckout(false)
    dispatch(fechar())
  }, [dispatch])

  useEffect(() => {
    if (!aberto) return

    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') fecharCarrinho()
    }

    document.addEventListener('keydown', fecharComEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', fecharComEsc)
      document.body.style.overflow = ''
    }
  }, [aberto, fecharCarrinho])

  if (!aberto) return null

  const concluirPedido = () => {
    dispatch(limpar())
    fecharCarrinho()
  }

  return (
    <S.CarrinhoContainer role="dialog" aria-modal="true" aria-label="Carrinho">
      <S.Overlay onClick={fecharCarrinho} />
      <S.Sidebar>
        {emCheckout ? (
          <Checkout
            aoVoltarParaCarrinho={() => setEmCheckout(false)}
            aoConcluir={concluirPedido}
          />
        ) : itens.length === 0 ? (
          <S.Vazio>
            O carrinho está vazio. Adicione pelo menos um produto para continuar
            com a compra.
          </S.Vazio>
        ) : (
          <>
            <ul>
              {itens.map((item) => (
                <S.Item key={item.chave}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <S.Remover
                    type="button"
                    title={`Remover ${item.nome} do carrinho`}
                    onClick={() => dispatch(remover(item.chave))}
                  >
                    <img src={lixeira} alt="Remover" />
                  </S.Remover>
                </S.Item>
              ))}
            </ul>
            <S.Total>
              <span>Valor total</span>
              <span>{formataPreco(valorTotal)}</span>
            </S.Total>
            <Botao
              variante="secundario"
              title="Continuar com a entrega"
              onClick={() => setEmCheckout(true)}
            >
              Continuar com a entrega
            </Botao>
          </>
        )}
      </S.Sidebar>
    </S.CarrinhoContainer>
  )
}

export default Carrinho
