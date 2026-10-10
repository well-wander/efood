import styled from 'styled-components'

import {
  cores,
  filtroApetitoso,
  filtroApetitosoHover,
  sombras,
} from '../../styles'

export const Capa = styled.div`
  position: relative;
  height: 232px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.28) 0%,
      rgba(0, 0, 0, 0) 40%
    );
    pointer-events: none;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${filtroApetitoso};
  transition:
    transform 0.6s ease,
    filter 0.6s ease;
`

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: 1px solid ${cores.salmao};
  border-radius: 16px;
  background-color: ${cores.branco};
  box-shadow: ${sombras.suave};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${sombras.elevada};

    ${Imagem} {
      transform: scale(1.08);
      filter: ${filtroApetitosoHover};
    }
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 20px;
`

export const Cabecalho = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
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
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;
`
