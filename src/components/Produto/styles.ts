import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${cores.salmao};
  color: ${cores.bege};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(230, 103, 103, 0.35);
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  border-radius: 8px;
  object-fit: cover;
`

export const Nome = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;
`

export const Descricao = styled.p`
  flex: 1;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`
