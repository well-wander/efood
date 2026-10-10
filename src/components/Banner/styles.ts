import styled, { keyframes } from 'styled-components'

import {
  animacaoSurgir,
  breakpoints,
  cores,
  filtroApetitoso,
} from '../../styles'

const aproximar = keyframes`
  from {
    transform: scale(1.12);
  }

  to {
    transform: scale(1);
  }
`

export const BannerContainer = styled.section`
  position: relative;
  height: 320px;
  overflow: hidden;
  color: ${cores.branco};
  font-size: 32px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.25) 45%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 32px 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 240px;
    font-size: 24px;
  }
`

export const Imagem = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  filter: ${filtroApetitoso};
  animation: ${aproximar} 1.6s ease-out both;
`

export const Categoria = styled.p`
  font-weight: 100;
  ${animacaoSurgir}
`

export const Nome = styled.h1`
  font-size: inherit;
  font-weight: 900;
  ${animacaoSurgir}
  animation-delay: 0.15s;
`
