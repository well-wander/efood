import styled from 'styled-components'

import {
  cores,
  filtroApetitoso,
  filtroApetitosoHover,
  sombras,
} from '../../styles'

export const Capa = styled.div`
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  background-color: ${cores.salmao};
  box-shadow: ${sombras.suave};
  color: ${cores.bege};
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

export const Nome = styled.h3`
  margin: 12px 0 8px;
  font-size: 16px;
  font-weight: 900;
`

export const Descricao = styled.p`
  flex: 1;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
