import styled from 'styled-components'

import { cores } from '../../styles'

export const Capa = styled.div`
  height: 217px;
  overflow: hidden;
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${cores.branco};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(230, 103, 103, 0.25);

    ${Imagem} {
      transform: scale(1.06);
    }
  }
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
  padding: 8px 8px 7px;
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
  line-height: 21px;
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
