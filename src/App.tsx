import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
