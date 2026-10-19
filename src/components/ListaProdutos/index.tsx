import type { Prato } from '../../models/Restaurante'
import Produto from '../Produto'
import { Lista } from './styles'

type Props = {
  pratos: Prato[]
  aoVerDetalhes: (prato: Prato) => void
}

const ListaProdutos = ({ pratos, aoVerDetalhes }: Props) => (
  <div className="container">
    <Lista>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <Produto prato={prato} aoVerDetalhes={aoVerDetalhes} />
        </li>
      ))}
    </Lista>
  </div>
)

export default ListaProdutos
