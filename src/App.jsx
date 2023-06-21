import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import { Login } from './pages/Login'
import SignUp from './pages/sign-up/SignUp'
import ConfirmarCuenta from './pages/Confirmar-Cuenta/ConfirmarCuenta'
import { OlvidePassword } from './pages/olvideContraseña'
import RestablecerPassword from './pages/reestablecerPassword/RestablecerPassword'

import RutaProtegida from './layouts/RutaProtegida'
import Home from './pages/home/Home'
import { NosotrosPage } from './pages/Nosotros/'
import VistaProducto from './pages/ProductView/VistaProducto'



import RutaProtegidaAdmin from './pages/Admin/RutaProtegidaAdmin'
import HomeAdmin from './pages/Admin/HomeAdmin'
import AdminNuevoProducto from './pages/Admin/pages/AdminNuevoProducto'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} path='/login' />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='confirmar-cuenta/:token' element={<ConfirmarCuenta />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='nuevo-password/:token' element={<RestablecerPassword />} />
          <Route path='/' element={<Navigate to='/login' />} />
        </Route>


        <Route path="/e-shop" element={<RutaProtegida />}>
          <Route index path='home' element={<Home />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='product/:id' element={<VistaProducto />} />
        </Route>
        <Route path='/e-shop/dashboard/:token' element={<RutaProtegidaAdmin />}>
          <Route index path='home' element={<HomeAdmin />} />
          <Route path='nuevo-producto' element={<AdminNuevoProducto />} />
        </Route>
        <Route path='*' element={<p>Pagina no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
