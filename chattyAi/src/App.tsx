import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Chat from './pages/Chat'
import Notfund from './pages/Notfund'
import { useAuth } from './context/AuthContext'

function App() { 
  const auth = useAuth();
  // routing section
  return (
    <main>
      <Header />
      <Routes>

        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Signin />} />
        <Route path='/signup' element = {<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path='*' element = {<Notfund />} />

      </Routes>



    </main>



  )
}

export default App
