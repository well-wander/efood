import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  salmaoEscuro: '#D14F4F',
  bege: '#FFEBD9',
  fundo: '#FFF8F2',
  branco: '#FFFFFF',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  html {
    scrollbar-gutter: stable;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.salmao};
  }

  img {
    display: block;
    max-width: 100%;
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
`
