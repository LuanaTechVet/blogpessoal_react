import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar /> {/*posição fixa, renderizado sem uma rota associada*/}
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div> {/* define a altura mínima padrão para todos os componentes renderizados com rota, garantindo que o Componente Footer permaneça no final da página*/}
          <Footer />{/*posição fixa, renderizado sem uma rota associada*/}
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App