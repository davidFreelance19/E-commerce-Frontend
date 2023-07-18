import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Outlet, Navigate, redirect } from "react-router-dom"
import DrawerAdmin from "./components/DrawerAdmin"
import { loadUser } from "../../redux/actions/user"
const RutaProtegidaAdmin = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, loading, user } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    if (loading) return <p>Cargando...</p>
    if (user?.role === 'admin') {
        <Navigate to={`/e-shop/dashboard/home/${user._id}`} />
    }
    return (
        <>
            {isAuthenticated && user.role === 'admin' ? (
                <>
                    <DrawerAdmin >
                        <div className="bg-gray-50 h-full">
                            <div className="w-[90%] max-w-[1240px] mx-auto my-0">
                                <Outlet />
                            </div>
                        </div>
                    </DrawerAdmin>

                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    )
}

export default RutaProtegidaAdmin
