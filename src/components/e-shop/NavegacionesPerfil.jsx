import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlineCancel, MdReviews } from 'react-icons/md'

const NavegacionesPerfil = ({ visible, handleClickCerrarSesion }) => {
    const { user, } = useSelector(state => state.user)
    return (
        <>
            {
                visible && (
                    <div className="absolute right-0 top-7">
                        <blockquote className="bg-[#000004] p-5 text-white rounded-md mt-4 hover:cursor-pointer flex flex-col gap-4">
                            {
                                user.role === 'admin' ? (
                                    <Link to={`/e-shop/dashboard/${user._id}/home`} className="flex items-center gap-3">
                                        <AiOutlineUser size={20} />
                                        <p>Mi Dasboard</p>
                                    </Link>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <AiOutlineUser size={20} />
                                            <p>Mi perfil</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <AiOutlineShopping size={20} />
                                            <p>Mis ordenes</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MdOutlineCancel size={20} />
                                            <p>Cancelaciones</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MdReviews size={20} />
                                            <p>Mis opiniones</p>
                                        </div>
                                    </>
                                )
                            }
                            <div className="flex items-center gap-3" onClick={handleClickCerrarSesion}>
                                <BiLogOut size={20} />
                                <p>Cerrar sesión</p>
                            </div>
                        </blockquote >
                    </div >
                )
            }
        </>
    )
}

export default NavegacionesPerfil
