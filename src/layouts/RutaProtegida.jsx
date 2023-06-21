import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { loadUser } from "../redux/actions/user"
import Header from "../components/e-shop/Header"
import Footer from "../components/e-shop/Footer"
const RutaProtegida = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, loading } = useSelector(state => state.user)
    useEffect(()=>{
        dispatch(loadUser())
    }, [dispatch])
    if(loading) return <p>Cargando...</p>
    return (
        <>
            {isAuthenticated ? (
                <>
                    <div> 
                        <Header />
                        <Outlet />
                        <Footer />
                    </div>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>

    )


}

export default RutaProtegida
