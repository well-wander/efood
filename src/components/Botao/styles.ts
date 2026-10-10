import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { cores } from '../../styles'

type Props = {
  $variante: 'primario' | 'secundario'
}

const estiloBase = css<Props>`
  display: inline-block;
  padding: 4px 6px;
  border: none;
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
`

export const BotaoContainer = styled.button<Props>`
  ${estiloBase}
`

export const BotaoLink = styled(Link)<Props>`
  ${estiloBase}
`
