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

                    <div>
                        <DrawerAdmin />
                        <Outlet />
                    </div>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    )
}

export default RutaProtegidaAdmin
