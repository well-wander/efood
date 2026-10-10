import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import logo from '../../assets/logo.svg'
import twitter from '../../assets/twitter.svg'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="efood" />
      <S.RedesSociais>
        <li>
          <a href="#" title="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </S.RedesSociais>
      <S.Aviso>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Aviso>
    </div>
  </S.FooterContainer>
)

export default Footer
