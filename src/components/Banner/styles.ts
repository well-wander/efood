import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const BannerContainer = styled.section`
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;
  color: ${cores.branco};
  font-size: 32px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 25px 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const Categoria = styled.p`
  font-weight: 100;
`

export const Nome = styled.h1`
  font-size: inherit;
  font-weight: 900;
`
