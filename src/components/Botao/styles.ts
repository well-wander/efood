import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { cores } from '../../styles'

type Props = {
  $variante: 'primario' | 'secundario'
}

const estiloBase = css<Props>`
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ $variante }) =>
    $variante === 'primario' ? cores.salmao : cores.bege};
  color: ${({ $variante }) =>
    $variante === 'primario' ? cores.bege : cores.salmao};
  width: ${({ $variante }) => ($variante === 'primario' ? 'auto' : '100%')};
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
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
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
