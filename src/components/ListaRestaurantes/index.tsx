import type { Restaurante as RestauranteModel } from '../../models/Restaurante'
import Restaurante from '../Restaurante'
import { Lista } from './styles'

type Props = {
  restaurantes: RestauranteModel[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <div className="container">
    <Lista>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurante restaurante={restaurante} />
        </li>
      ))}
    </Lista>
  </div>
)

export default ListaRestaurantes
