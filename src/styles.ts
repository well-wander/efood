import { createGlobalStyle, css, keyframes } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  salmaoEscuro: '#D14F4F',
  bege: '#FFEBD9',
  fundo: '#FFF8F2',
  branco: '#FFFFFF',
  titulo: '#4A1F1F',
  texto: '#7A5C58',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const sombras = {
  suave: '0 6px 20px rgba(74, 31, 31, 0.08)',
  elevada: '0 20px 40px rgba(230, 103, 103, 0.25)',
}

// deixa as fotos de comida mais quentes e vivas
export const filtroApetitoso = 'saturate(1.15) contrast(1.05) brightness(1.02)'
export const filtroApetitosoHover =
  'saturate(1.3) contrast(1.08) brightness(1.05)'

const surgir = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const animacaoSurgir = css`
  animation: ${surgir} 0.6s ease both;
`

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.salmao};
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background-color: ${cores.salmao};
    color: ${cores.bege};
  }

  :focus-visible {
    outline: 2px solid ${cores.salmaoEscuro};
    outline-offset: 3px;
    border-radius: 4px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 90%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`
