import bolo from '../../assets/bolo.jpg'
import bowl from '../../assets/bowl.jpg'
import burger from '../../assets/burger.jpg'
import feijoada from '../../assets/feijoada.jpg'
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
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Experimente o Japão sem sair do lar!',
    nota: 4.9,
    imagem: sushi,
    tags: ['Destaque da semana', 'Japonesa'],
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'Massas caseiras, pizzas deliciosas e risotos incríveis: a autêntica cozinha italiana até você.',
    nota: 4.6,
    imagem: pasta,
    tags: ['Italiana'],
  },
  {
    id: 3,
    nome: 'Burger House',
    descricao:
      'Hambúrgueres artesanais suculentos, batatas crocantes e muito sabor em cada mordida.',
    nota: 4.7,
    imagem: burger,
    tags: ['Hamburgueria'],
  },
  {
    id: 4,
    nome: 'Sabor do Brasil',
    descricao:
      'Feijoada, arroz soltinho e os clássicos da comida brasileira, feitos com carinho, como tem que ser.',
    nota: 4.8,
    imagem: feijoada,
    tags: ['Brasileira'],
  },
  {
    id: 5,
    nome: 'Verde Fresco',
    descricao:
      'Bowls e pratos vegetarianos saudáveis, saborosos e cheios de ingredientes frescos.',
    nota: 4.5,
    imagem: bowl,
    tags: ['Vegetariana'],
  },
  {
    id: 6,
    nome: 'Doce Momentos',
    descricao:
      'Bolos, tortas e sobremesas artesanais para adoçar o seu dia do começo ao fim.',
    nota: 4.7,
    imagem: bolo,
    tags: ['Doces'],
  },
]

const Home = () => (
  <>
    <Hero />
    <main>
      <ListaRestaurantes
        titulo="Restaurantes em destaque"
        subtitulo="Sabores para todos os momentos, do jeito que você ama."
        restaurantes={restaurantes}
      />
    </main>
  </>
)

export default Home
