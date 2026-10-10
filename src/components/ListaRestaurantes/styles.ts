import styled from 'styled-components'

import { animacaoSurgir, breakpoints, cores } from '../../styles'

export const Secao = styled.section`
  padding: 64px 0 96px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0 64px;
  }
`

export const Titulo = styled.h2`
  color: ${cores.titulo};
  font-size: 28px;
  font-weight: 900;
`

export const Subtitulo = styled.p`
  margin: 6px 0 32px;
  color: ${cores.texto};
  font-size: 16px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;

  li {
    display: flex;
    ${animacaoSurgir}
  }

  li:nth-child(2) {
    animation-delay: 0.1s;
  }

  li:nth-child(n + 3) {
    animation-delay: 0.2s;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
