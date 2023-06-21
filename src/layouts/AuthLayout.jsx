import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/e-shop/Header"
import imgLogin from '../assets/heroLogin.svg'
import Footer from "../components/e-shop/Footer"
const AuthLayout = () => {
    return (
        <div>
            <Header />
            <main className="grid grid-cols-2 max-w-[1240px] mx-auto">
                <blockquote className="relative">
                    <div className="bg-cover bg-no-repeat bg-[-50px] w-full h-full" style={{
                        backgroundImage: `url(${imgLogin})`
                    }}>
                    </div>
                    <div className="top-0 right-0 left-0 bottom-0 bg-[#0002] absolute"></div>
                </blockquote>
                <Outlet />
            </main>
            <Footer />
        </div>
    )


}

export default AuthLayout
