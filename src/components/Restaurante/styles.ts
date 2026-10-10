import styled from 'styled-components'

import {
  cores,
  filtroApetitoso,
  filtroApetitosoHover,
  sombras,
} from '../../styles'

export const Capa = styled.div`
  position: relative;
  height: 208px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
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
  top: 12px;
  left: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: ${cores.titulo};
  font-size: 18px;
  font-weight: 700;
`

export const Nome = styled.h3`
  font-size: inherit;
`

export const Nota = styled.span`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 6px;
  font-size: 16px;

  img {
    width: 20px;
    height: 20px;
  }
`

export const Descricao = styled.p`
  flex: 1;
  margin-bottom: 16px;
  color: ${cores.texto};
  font-size: 14px;
  line-height: 22px;
`
