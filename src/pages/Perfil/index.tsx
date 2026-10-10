import banner from '../../assets/banner.jpg'
import bruschetta from '../../assets/bruschetta.jpg'
import lasanha from '../../assets/lasanha.jpg'
import pasta from '../../assets/pasta.jpg'
import pizza from '../../assets/pizza.jpg'
import risoto from '../../assets/risoto.jpg'
import tiramisu from '../../assets/tiramisu.jpg'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaProdutos from '../../components/ListaProdutos'
import type { Produto } from '../../models/Produto'

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
  },
  {
    id: 2,
    nome: 'Lasanha à Bolonhesa',
    descricao:
      'Camadas de massa fresca, ragu de carne cozido lentamente, molho bechamel e queijo gratinado até dourar.',
    imagem: lasanha,
  },
  {
    id: 3,
    nome: 'Spaghetti ai Frutti di Mare',
    descricao:
      'Espaguete al dente com camarões e lulas salteados no alho e azeite, finalizado com parmesão e salsinha.',
    imagem: pasta,
  },
  {
    id: 4,
    nome: 'Risoto de Cogumelos',
    descricao:
      'Arroz arbóreo cremoso com mix de cogumelos frescos, vinho branco e lascas generosas de parmesão.',
    imagem: risoto,
  },
  {
    id: 5,
    nome: 'Bruschetta Pomodoro',
    descricao:
      'Pão italiano tostado com tomates maduros, manjericão fresco, alho e um fio de azeite extravirgem.',
    imagem: bruschetta,
  },
  {
    id: 6,
    nome: 'Tiramisù',
    descricao:
      'A sobremesa italiana mais amada: camadas de mascarpone, biscoito embebido em café e cacau polvilhado.',
    imagem: tiramisu,
  },
]

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
