import type { Produto as ProdutoModel } from '../../models/Produto'
import Botao from '../Botao'
import * as S from './styles'

type Props = {
  produto: ProdutoModel
}

const Produto = ({ produto }: Props) => (
  <S.Card>
    <S.Capa>
      <S.Imagem src={produto.imagem} alt={produto.nome} />
    </S.Capa>
    <S.Nome>{produto.nome}</S.Nome>
    <S.Descricao>{produto.descricao}</S.Descricao>
    <Botao
      variante="secundario"
      title={`Adicionar ${produto.nome} ao carrinho`}
    >
      Adicionar ao carrinho
    </Botao>
  </S.Card>
)

export default Produto
