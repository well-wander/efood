import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: ${cores.bege};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Aviso = styled.p`
  max-width: 480px;
  font-size: 10px;
  text-align: center;
`
