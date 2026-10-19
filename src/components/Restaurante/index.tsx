import estrela from '../../assets/estrela.svg'
import type { Restaurante as RestauranteModel } from '../../models/Restaurante'
import { capitaliza, encurta } from '../../utils'
import Botao from '../Botao'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  restaurante: RestauranteModel
}

const Restaurante = ({ restaurante }: Props) => (
  <S.Card>
    <S.Capa>
      <S.Imagem src={restaurante.capa} alt={restaurante.titulo} />
    </S.Capa>
    <S.Tags>
      {restaurante.destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{capitaliza(restaurante.tipo)}</Tag>
    </S.Tags>
    <S.Conteudo>
      <S.Cabecalho>
        <S.Nome>{restaurante.titulo}</S.Nome>
        <S.Nota>
          {restaurante.avaliacao.toFixed(1)}
          <img src={estrela} alt="Estrela" />
        </S.Nota>
      </S.Cabecalho>
      <S.Descricao>{encurta(restaurante.descricao, 250)}</S.Descricao>
      <Botao
        to={`/perfil/${restaurante.id}`}
        title={`Saiba mais sobre ${restaurante.titulo}`}
      >
        Saiba mais
      </Botao>
    </S.Conteudo>
  </S.Card>
)

export default Restaurante
