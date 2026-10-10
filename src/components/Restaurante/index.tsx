import estrela from '../../assets/estrela.svg'
import type { Restaurante as RestauranteModel } from '../../models/Restaurante'
import Botao from '../Botao'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  restaurante: RestauranteModel
}

const Restaurante = ({ restaurante }: Props) => (
  <S.Card>
    <S.Capa>
      <S.Imagem src={restaurante.imagem} alt={restaurante.nome} />
    </S.Capa>
    <S.Tags>
      {restaurante.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </S.Tags>
    <S.Conteudo>
      <S.Cabecalho>
        <S.Nome>{restaurante.nome}</S.Nome>
        <S.Nota>
          {restaurante.nota.toFixed(1)}
          <img src={estrela} alt="Estrela" />
        </S.Nota>
      </S.Cabecalho>
      <S.Descricao>{restaurante.descricao}</S.Descricao>
      <Botao to="/perfil" title={`Saiba mais sobre ${restaurante.nome}`}>
        Saiba mais
      </Botao>
    </S.Conteudo>
  </S.Card>
)

export default Restaurante
