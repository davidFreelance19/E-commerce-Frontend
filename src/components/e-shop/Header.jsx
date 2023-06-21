import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { loadUser } from "../../redux/actions/user"
import NavegacionesPerfil from "./NavegacionesPerfil"
const Header = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useSelector(state => state.user)
    const navigate = useNavigate()
    const handleClickCerrarSesion = () => {
        localStorage.removeItem("token");
        dispatch(loadUser())
        navigate('/login')
    }
    return (
        <header className='w-full'>
            <div className='p-2 bg-black text-white'>
                <p className='text-center'>Oferta de verano para todos los trajes de baño y entrega urgente gratuita: ¡50 % DE DESCUENTO! {' '}
                    <span><Link to='#'>Comprar Ahora</Link></span>
                </p>
            </div>
            <nav className='w-full  border-b-[1px]  p-5'>
                <blockquote className='max-w-[1240px] flex items-center justify-between bg-white mx-auto my-0'>
                    <div>
                        <Link to='/e-shop/home' className="font-bold text-2xl">Exclusive</Link>
                    </div>

                    <div className='flex gap-10 font-semibold'>
                        <Link to='/e-shop/home'>Home</Link>
                        <Link to='#'>Contacto</Link>
                        <Link to='/e-shop/nosotros'>Nosotros</Link>
                        {!isAuthenticated ? <Link to='/sign-up'>Registrarse </Link> : <></>}
                    </div>

                    <div className="flex gap-6 items-center relative">
                        <blockquote className="w-[280px]">
                            <div className="mt-1 relative">
                                <input
                                    type='text'
                                    name="busqueda"
                                    id="busqueda"
                                    className="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="¿Qué estás buscando?"
                                />
                                <AiOutlineSearch
                                    className="absolute right-2 top-2 cursor-pointer"
                                    size={25}
                                    onClick={() => setVisible(true)}
                                />
                            </div>
                        </blockquote>
                        {
                            isAuthenticated ? (
                                <>
                                    <AiOutlineShoppingCart size={25} className="hover:cursor-pointer" />
                                    <AiOutlineHeart size={25} className="hover:cursor-pointer" />

                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/${user?.avatar}`} className="rounded-full w-[40px] h-[40px] hover:cursor-pointer"
                                        onClick={() => visible ? setVisible(false) : setVisible(true)}
                                    />
                                </>
                            )
                                : <></>
                        }
                        <NavegacionesPerfil visible={visible} handleClickCerrarSesion={handleClickCerrarSesion} />
                    </div>
                </blockquote>
            </nav>
        </header>
    )
}

export default Header
