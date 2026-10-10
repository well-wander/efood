import pasta from '../../assets/pasta.jpg'
import sushi from '../../assets/sushi.jpg'
import Hero from '../../components/Hero'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import type { Restaurante } from '../../models/Restaurante'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.\nExperimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.9,
    imagem: sushi,
    tags: ['Destaque da semana', 'Japonesa'],
  },
  ...[2, 3, 4, 5, 6].map((id) => ({
    id,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    imagem: pasta,
    tags: ['Italiana'],
  })),
]

const Home = () => (
  <>
    <Hero />
    <main>
      <ListaRestaurantes restaurantes={restaurantes} />
    </main>
  </>
)

export default Home
