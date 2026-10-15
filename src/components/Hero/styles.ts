import styled from 'styled-components'

import fundo from '../../assets/fundo.svg'
import { breakpoints, cores } from '../../styles'

export const HeroContainer = styled.header`
  height: 360px;
  padding: 40px 0;
  background-color: ${cores.bege};
  background-image: url("${fundo}");

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 30px;

    br {
      display: none;
    }
  }
`
