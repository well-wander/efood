import styled from 'styled-components'

import { cores } from '../../styles'

export const Etapa = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.bege};
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
`

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
  }

  small {
    color: ${cores.titulo};
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
  }

  small:not(:empty) {
    margin-top: 4px;
  }
`

export const Linha = styled.div<{ $colunas: string }>`
  display: grid;
  grid-template-columns: ${({ $colunas }) => $colunas};
  justify-content: space-between;
  column-gap: 8px;
`

type InputProps = {
  $erro: boolean
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: 2px solid ${({ $erro }) => ($erro ? cores.titulo : 'transparent')};
  background-color: ${cores.bege};
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ $erro }) => ($erro ? cores.titulo : cores.salmaoEscuro)};
  }
`

export const Botoes = styled.div<{ $margem?: number }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: ${({ $margem = 16 }) => $margem}px;
`

export const Texto = styled.p`
  font-size: 14px;
  line-height: 22px;

  & + & {
    margin-top: 22px;
  }
`

export const Aviso = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
`
