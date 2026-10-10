import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 48px 0 40px;
  background-color: ${cores.bege};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  gap: 12px;
  margin: 32px 0 72px;

  a {
    display: block;
    border-radius: 50%;
    transition:
      transform 0.25s ease,
      filter 0.25s ease;

    &:hover {
      transform: translateY(-4px) scale(1.15);
      filter: brightness(0.88);
    }
  }

  img {
    width: 28px;
    height: 28px;
  }
`

export const Aviso = styled.p`
  max-width: 480px;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
`
