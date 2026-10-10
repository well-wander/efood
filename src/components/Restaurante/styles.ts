import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${cores.branco};
`

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border: 1px solid ${cores.salmao};
  border-top: none;
`

export const Cabecalho = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
`

export const Nome = styled.h3`
  font-size: inherit;
`

export const Nota = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  flex: 1;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;
`
