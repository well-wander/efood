import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 56px 0 120px;

  li {
    display: flex;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
