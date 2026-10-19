import type { Prato } from '../../models/Restaurante'
import { encurta } from '../../utils'
import Botao from '../Botao'
import * as S from './styles'

type Props = {
  prato: Prato
  aoVerDetalhes: (prato: Prato) => void
}

const Produto = ({ prato, aoVerDetalhes }: Props) => (
  <S.Card>
    <S.Imagem src={prato.foto} alt={prato.nome} />
    <S.Nome>{prato.nome}</S.Nome>
    <S.Descricao>{encurta(prato.descricao, 160)}</S.Descricao>
    <Botao
      variante="secundario"
      title={`Ver mais detalhes de ${prato.nome}`}
      onClick={() => aoVerDetalhes(prato)}
    >
      Mais detalhes
    </Botao>
  </S.Card>
)

export default Produto
