import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px 0 120px;

  li {
    display: flex;
  }

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
