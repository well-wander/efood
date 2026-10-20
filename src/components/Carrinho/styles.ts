import styled from 'styled-components'

import { cores } from '../../styles'

export const CarrinhoContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  position: relative;
  z-index: 1;
  width: 360px;
  max-width: 100%;
  height: 100%;
  padding: 32px 8px;
  overflow-y: auto;
  background-color: ${cores.salmao};

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px 8px 12px;
  background-color: ${cores.bege};

  > img {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Remover = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    transform: scale(1.2);
  }
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: ${cores.bege};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`

export const Vazio = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`
