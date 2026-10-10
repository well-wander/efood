import styled from 'styled-components'

import { animacaoSurgir, breakpoints } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 56px;
  margin: 80px 0 120px;

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
    column-gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin: 56px 0 80px;
  }
`
