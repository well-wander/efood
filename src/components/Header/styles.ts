import { Link } from 'react-router-dom'
import styled from 'styled-components'

import fundo from '../../assets/fundo.svg'
import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px 0 65px;
  background-color: ${cores.bege};
  background-image: url("${fundo}");
  font-size: 18px;
  font-weight: 900;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0;

    .container {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`

export const LinkRestaurantes = styled(Link)`
  color: ${cores.salmao};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${cores.salmaoEscuro};
  }
`

export const Carrinho = styled.button`
  justify-self: end;
  border: none;
  background: none;
  color: ${cores.salmao};
  font: inherit;
  text-align: right;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${cores.salmaoEscuro};
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`
