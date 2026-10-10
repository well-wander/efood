import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import * as S from './styles'

const Header = () => (
  <S.HeaderContainer>
    <div className="container">
      <S.LinkRestaurantes to="/">Restaurantes</S.LinkRestaurantes>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.Carrinho>0 produto(s) no carrinho</S.Carrinho>
    </div>
  </S.HeaderContainer>
)

export default Header
