import type { Produto as ProdutoModel } from '../../models/Produto'
import Produto from '../Produto'
import { Lista } from './styles'

type Props = {
  produtos: ProdutoModel[]
}

const ListaProdutos = ({ produtos }: Props) => (
  <div className="container">
    <Lista>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <Produto produto={produto} />
        </li>
      ))}
    </Lista>
  </div>
)

export default ListaProdutos
