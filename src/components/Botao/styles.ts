import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { cores } from '../../styles'

type Props = {
  $variante: 'primario' | 'secundario'
}

export const Seta = styled.span`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.25s ease;
`

const estiloBase = css<Props>`
  display: block;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ $variante }) =>
    $variante === 'primario' ? cores.salmao : cores.bege};
  color: ${({ $variante }) =>
    $variante === 'primario' ? cores.branco : cores.salmao};
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: ${({ $variante }) =>
      $variante === 'primario' ? cores.salmaoEscuro : cores.branco};
    color: ${({ $variante }) =>
      $variante === 'primario' ? cores.branco : cores.salmaoEscuro};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(74, 31, 31, 0.2);

    ${Seta} {
      transform: translateX(6px);
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: none;
  }
`

export const BotaoContainer = styled.button<Props>`
  ${estiloBase}
`

export const BotaoLink = styled(Link)<Props>`
  ${estiloBase}
`
