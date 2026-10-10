import styled from 'styled-components'

import fundo from '../../assets/fundo.svg'
import { animacaoSurgir, breakpoints, cores } from '../../styles'

export const HeroContainer = styled.header`
  height: 384px;
  padding: 40px 0 48px;
  background-color: ${cores.bege};
  background-image: url("${fundo}");

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: scale(1.06) rotate(-2deg);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  text-align: center;
  ${animacaoSurgir}

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 30px;

    br {
      display: none;
    }
  }
`
