import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../../../../../config/clienteAxios"
const ConfirmarCuenta = () => {
    const [mensajeBacknd, setMensajeBacknd] = useState('')
    const [isFetching, setIsFetching] = useState(true)
    const params = useParams()
    useEffect(() => {
        const confirmandoCuenta = async () => {
            try {
                const url = `/usuarios/confirmar-cuenta/${params.token}`;
                const { data } = await clienteAxios.get(url);
                setMensajeBacknd(data.msj)
            } catch (error) {
                setMensajeBacknd({ message: error.response.data.msj, error: true })
            } finally {
                setIsFetching(false)
            }
        }
        confirmandoCuenta()
    }, [])
    return (
        <>
            {isFetching ? <p>cargando...</p> : <section className="mt-6 ">
                <p className="text-center">{mensajeBacknd?.message ? mensajeBacknd.message : mensajeBacknd}</p>
                {!mensajeBacknd?.error && (
                    <p className="mt-7 text-center">
                        Comienza a disfrutar nuestros beneficios{" "}
                        <span className="font-bold text-sky-500">
                            <Link to="/login">Inicia Sesión</Link>
                        </span>
                    </p>
                )}
            </section>}
        </>
    )
}

export default ConfirmarCuenta
