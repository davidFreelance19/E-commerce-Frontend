import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/pages/Login/Login'
import SignUp from './pages/Auth/pages/sign-up/SignUp'
import ConfirmarCuenta from './pages/Auth/pages/Confirmar-Cuenta/ConfirmarCuenta'
import OlvidePassword from './pages/Auth/pages/olvideContraseña/OlvidePassword'
import RestablecerPassword from './pages/Auth/pages/reestablecerPassword/RestablecerPassword'

import RutaProtegida from './layouts/RutaProtegida'
import Home from './pages/home/Home'
import { NosotrosPage } from './pages/Nosotros/'
import VistaProducto from './pages/ProductView/VistaProducto'
import ProductCategoria from './pages/ProductCategoria/ProductCategoria'


import RutaProtegidaAdmin from './pages/Admin/RutaProtegidaAdmin'
import HomeAdmin from './pages/Admin/HomeAdmin'

import { NuevoProductoProvider } from './pages/Admin/pages/NuevoProducto/context/NuevoProductoProvider'
import AdminNuevoProducto from './pages/Admin/pages/NuevoProducto/AdminNuevoProducto'
import MisProductos from './pages/Admin/pages/MisProductos/MisProductos'
import EditarProducto from './pages/Admin/pages/EditarProducto/EditarProducto'

import { PublicidadProvider } from './pages/Admin/pages/Publicidad/context/PublicidadProvider'
import NuevaPublicidad from './pages/Admin/pages/Publicidad/NuevaPublicidad/NuevaPublicidad'
import MisPublicidad from './pages/Admin/pages/Publicidad/MiPublicidiad/MisPublicidad'
import EditarPublicidad from './pages/Admin/pages/Publicidad/EditarPublicidad/EditarPublicidad'

import MisEventos from './pages/Admin/pages/Eventos/MisEventos/MisEventos'
import NuevoEvento from './pages/Admin/pages/Eventos/NuevoEvento/NuevoEvento'
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
          <Route path='products/:categoria' element={<ProductCategoria />} />
        </Route>

        <Route path='/e-shop/dashboard/:token' element={<RutaProtegidaAdmin />}>
          <Route index path='home' element={<HomeAdmin />} />
          <Route path='product' element={<NuevoProductoProvider ><Outlet /></NuevoProductoProvider>}>
            <Route path='nuevo-producto' element={<AdminNuevoProducto />} />
            <Route path='mis-productos' element={<MisProductos />} />
            <Route path='editar-producto/:id' element={<EditarProducto />} />
          </Route>
          <Route path='publicidad' element={<PublicidadProvider><Outlet /></PublicidadProvider>}>
            <Route path='nuevo-publicidad' element={<NuevaPublicidad />} />
            <Route path='mi-publicidad' element={<MisPublicidad />} />
            <Route path='editar-publicidad/:id' element={<EditarPublicidad />} />
          </Route>
          <Route path='eventos' element={<><Outlet /></>}>
            <Route path='mis-eventos' element={<MisEventos />} />
            <Route path='nuevo-evento' element={<NuevoEvento />} />
          </Route>
        </Route>
        <Route path='*' element={<p>Pagina no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
