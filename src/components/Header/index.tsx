import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import type { RootReducer } from '../../store'
import { abrir } from '../../store/reducers/carrinho'
import * as S from './styles'

const Header = () => {
  const quantidade = useSelector(
    (state: RootReducer) => state.carrinho.itens.length,
  )
  const dispatch = useDispatch()

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.LinkRestaurantes to="/">Restaurantes</S.LinkRestaurantes>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <S.Carrinho
          type="button"
          title="Abrir carrinho"
          onClick={() => dispatch(abrir())}
        >
          {quantidade} produto(s) no carrinho
        </S.Carrinho>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
