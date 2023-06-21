import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import clienteAxios from "../../../config/clienteAxios"
import ProductView from "../../components/e-shop/ProductView"

const VistaProducto = () => {
    const params = useParams()
    function closeModal() {
        setIsOpen(false)
    }
    const obtenerProduct = async (params) => {
        try {
            const { data } = await clienteAxios.get(`/productos/${params}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    const productosQuery = useQuery(
        [`producto/${params.id}`],
        () => obtenerProduct(params.id),
        { staleTime: 1000 * 60 * 60 }
    )
    if (productosQuery.isFetching) return <p>Cargando...</p>
    return (
        <div className='min-h-[550px] grid place-content-center'>
            <ProductView data={productosQuery.data[0]} closeModal={closeModal} />
        </div>
    )
}

export default VistaProducto
