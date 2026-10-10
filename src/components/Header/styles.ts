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

  img {
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: scale(1.06) rotate(-2deg);
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
  position: relative;
  justify-self: start;
  padding-bottom: 4px;
  color: ${cores.salmao};
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${cores.salmaoEscuro};

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`

export const Carrinho = styled.span`
  justify-self: end;
  padding: 8px 16px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: right;

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`
