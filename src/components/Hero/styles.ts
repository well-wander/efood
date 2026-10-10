import styled, { keyframes } from 'styled-components'

import fundo from '../../assets/fundo.svg'
import { animacaoSurgir, breakpoints, cores } from '../../styles'

const entrarEsquerda = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px) rotate(-18deg);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-8deg);
  }
`

const entrarDireita = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px) rotate(30deg);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(0);
  }
`

export const HeroContainer = styled.header`
  position: relative;
  height: 400px;
  padding: 40px 0 72px;
  overflow: hidden;
  background-color: ${cores.bege};
  background-image: url("${fundo}");

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  a img {
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: scale(1.06) rotate(-2deg);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
    padding-bottom: 48px;
  }
`

const Prato = styled.img`
  position: absolute;
  max-width: none;
  filter: drop-shadow(0 24px 28px rgba(74, 31, 31, 0.3));
  pointer-events: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const Sushi = styled(Prato)`
  left: clamp(-170px, calc(8vw - 200px), -40px);
  bottom: -70px;
  width: clamp(300px, 28vw, 420px);
  animation: ${entrarEsquerda} 0.9s ease-out both;
`

export const Massa = styled(Prato)`
  right: clamp(-190px, calc(8vw - 220px), -60px);
  top: -50px;
  width: clamp(320px, 30vw, 440px);
  animation: ${entrarDireita} 0.9s ease-out both;
`

export const Titulo = styled.h1`
  font-size: 40px;
  font-weight: 900;
  line-height: 46px;
  text-align: center;
  ${animacaoSurgir}

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    line-height: 32px;

    br {
      display: none;
    }
  }
`

export const Subtitulo = styled.p`
  max-width: 460px;
  margin: 16px auto 0;
  color: ${cores.texto};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  ${animacaoSurgir}
  animation-delay: 0.15s;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    line-height: 20px;
  }
`
