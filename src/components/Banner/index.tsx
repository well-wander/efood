import * as S from './styles'

type Props = {
  categoria: string
  nome: string
  imagem: string
}

const Banner = ({ categoria, nome, imagem }: Props) => (
  <S.BannerContainer>
    <S.Imagem src={imagem} alt="" />
    <div className="container">
      <S.Categoria>{categoria}</S.Categoria>
      <S.Nome>{nome}</S.Nome>
    </div>
  </S.BannerContainer>
)

export default Banner
