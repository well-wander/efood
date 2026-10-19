import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaProdutos from '../../components/ListaProdutos'
import Mensagem from '../../components/Mensagem'
import Modal from '../../components/Modal'
import type { Prato, Restaurante } from '../../models/Restaurante'
import { buscarRestaurante } from '../../services/api'
import { capitaliza } from '../../utils'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()
  const [erro, setErro] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato>()

  useEffect(() => {
    if (!id) return

    buscarRestaurante(id)
      .then(setRestaurante)
      .catch(() => setErro(true))
  }, [id])

  return (
    <>
      <Header />
      <main>
        {erro && (
          <Mensagem>
            Não foi possível carregar o restaurante. Tente novamente.
          </Mensagem>
        )}
        {!erro && !restaurante && <Mensagem>Carregando cardápio...</Mensagem>}
        {restaurante && (
          <>
            <Banner
              categoria={capitaliza(restaurante.tipo)}
              nome={restaurante.titulo}
              imagem={restaurante.capa}
            />
            <ListaProdutos
              pratos={restaurante.cardapio}
              aoVerDetalhes={setPratoSelecionado}
            />
          </>
        )}
      </main>
      {pratoSelecionado && (
        <Modal
          prato={pratoSelecionado}
          aoFechar={() => setPratoSelecionado(undefined)}
        />
      )}
    </>
  )
}

export default Perfil
