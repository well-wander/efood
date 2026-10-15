import banner from '../../assets/banner.jpg'
import pizza from '../../assets/pizza.jpg'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaProdutos from '../../components/ListaProdutos'
import type { Produto } from '../../models/Produto'

const produtos: Produto[] = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  nome: 'Pizza Marguerita',
  descricao:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  imagem: pizza,
}))

const Perfil = () => (
  <>
    <Header />
    <main>
      <Banner
        categoria="Italiana"
        nome="La Dolce Vita Trattoria"
        imagem={banner}
      />
      <ListaProdutos produtos={produtos} />
    </main>
  </>
)

export default Perfil
