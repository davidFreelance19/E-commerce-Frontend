import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import FooterItem from "./FooterItem"
import iconsPlay from '../../assets/playStoreIcons.svg'
const Footer = () => {

    const { user, isAuthenticated } = useSelector(state => state.user)
    return (
        <footer className='h-[32vh] bg-black text-white '>
            <blockquote className='max-w-[1240px] w-[90%]  flex py-10 justify-between mx-auto my-0 h-full'>

                <FooterItem enlace='/e-shop/home' text='Exclusive'>
                    <Link to='#'>Home</Link>
                    <Link to='#'>Contacto</Link>
                    <Link to='#'>Nosotros</Link>
                    {!isAuthenticated ? <Link to='/sign-up'>Registrarse </Link> : <></>}
                </FooterItem>
                <FooterItem enlace='#' text='Soporte'>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </FooterItem>
                <FooterItem enlace='#' text='Cuenta'>
                    <Link to='#'>Mi cuenta</Link>
                    <Link to='#'>Iniciar sesión</Link>
                    <Link to='#'>Carrito</Link>
                    <Link to='#'>Wish list</Link>
                </FooterItem>
                <FooterItem enlace='#' text='Enlace rápido'>
                    <Link to='#'>Política de privacidad</Link>
                    <Link to='#'>Terminos y condiciones</Link>
                    <Link to='#'>FAQ</Link>
                    <Link to='#'>Contacto</Link>
                </FooterItem>
                <FooterItem enlace='#' text='Descargar aplicación'>
                    <p>Ahorre $3 con la aplicación.</p>
                    <p>Solo para nuevos usuarios.</p>
                    <img src={iconsPlay} alt="icon-playstore" />
                </FooterItem>
            </blockquote>
        </footer>
    )
}

export default Footer
