import { useEffect } from 'react'

import fechar from '../../assets/fechar.png'
import type { Prato } from '../../models/Restaurante'
import { formataPreco } from '../../utils'
import Botao from '../Botao'
import * as S from './styles'

type Props = {
  prato: Prato
  aoFechar: () => void
}

const Modal = ({ prato, aoFechar }: Props) => {
  useEffect(() => {
    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') aoFechar()
    }

    document.addEventListener('keydown', fecharComEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', fecharComEsc)
      document.body.style.overflow = ''
    }
  }, [aoFechar])

  return (
    <S.ModalContainer role="dialog" aria-modal="true" aria-label={prato.nome}>
      <S.Overlay onClick={aoFechar} />
      <S.Conteudo className="container">
        <S.Fechar type="button" title="Fechar" onClick={aoFechar}>
          <img src={fechar} alt="Fechar" />
        </S.Fechar>
        <S.Imagem src={prato.foto} alt={prato.nome} />
        <S.Informacoes>
          <S.Titulo>{prato.nome}</S.Titulo>
          <S.Descricao>
            {prato.descricao}
            <br />
            <br />
            Serve: de {prato.porcao}
          </S.Descricao>
          <Botao variante="secundario" title="Adicionar ao carrinho">
            {`Adicionar ao carrinho - ${formataPreco(prato.preco)}`}
          </Botao>
        </S.Informacoes>
      </S.Conteudo>
    </S.ModalContainer>
  )
}

export default Modal
