import type { Restaurante as RestauranteModel } from '../../models/Restaurante'
import Restaurante from '../Restaurante'
import * as S from './styles'

type Props = {
  titulo: string
  subtitulo: string
  restaurantes: RestauranteModel[]
}

const ListaRestaurantes = ({ titulo, subtitulo, restaurantes }: Props) => (
  <S.Secao className="container">
    <S.Titulo>{titulo}</S.Titulo>
    <S.Subtitulo>{subtitulo}</S.Subtitulo>
    <S.Lista>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurante restaurante={restaurante} />
        </li>
      ))}
    </S.Lista>
  </S.Secao>
)

export default ListaRestaurantes
