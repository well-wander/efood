import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import Mensagem from '../../components/Mensagem'
import type { Restaurante } from '../../models/Restaurante'
import { buscarRestaurantes } from '../../services/api'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    buscarRestaurantes()
      .then(setRestaurantes)
      .catch(() => setErro(true))
      .finally(() => setCarregando(false))
  }, [])

  return (
    <>
      <Hero />
      <main>
        {carregando && <Mensagem>Carregando restaurantes...</Mensagem>}
        {erro && (
          <Mensagem>
            Não foi possível carregar os restaurantes. Tente novamente.
          </Mensagem>
        )}
        {!carregando && !erro && (
          <ListaRestaurantes restaurantes={restaurantes} />
        )}
      </main>
    </>
  )
}

export default Home
