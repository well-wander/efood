import { Link } from 'react-router-dom'

import massa from '../../assets/hero-massa.webp'
import sushi from '../../assets/hero-sushi.webp'
import logo from '../../assets/logo.svg'
import * as S from './styles'

const Hero = () => (
  <S.HeroContainer>
    <S.Sushi src={sushi} alt="" aria-hidden="true" />
    <S.Massa src={massa} alt="" aria-hidden="true" />
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <div>
        <S.Titulo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </S.Titulo>
        <S.Subtitulo>
          Descubra restaurantes incríveis e receba seus pratos favoritos onde
          você estiver.
        </S.Subtitulo>
      </div>
    </div>
  </S.HeroContainer>
)

export default Hero
