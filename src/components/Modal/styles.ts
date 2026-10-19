import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Conteudo = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  padding: 32px;
  background-color: ${cores.salmao};
  color: ${cores.branco};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
  }
`

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    transform: rotate(90deg);
  }
`

export const Imagem = styled.img`
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    width: auto;
    padding: 4px 7px;
  }
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

export const Descricao = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
