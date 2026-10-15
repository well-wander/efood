import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import * as S from './styles'

const Hero = () => (
  <S.HeroContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.Titulo>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </S.Titulo>
    </div>
  </S.HeroContainer>
)

export default Hero
