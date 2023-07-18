import { useEffect } from "react";
import useNuevoProducto from "./hooks/useNuevoProducto";
import HeadingAdmin from "../../components/HeadingAdmin";
import NuevoProductoForm from '../../components/NuevoProductoForm';
const AdminNuevoProducto = () => {
    const {
        setName,
        setPrecio,
        setPrecioDescuento,
        setRestantes,
        setDescripcion,
        setFiles,
        setFilesHelper
    } = useNuevoProducto()
    useEffect(() => {
        setName('')
        setDescripcion('')
        setPrecio(0)
        setPrecioDescuento(0)
        setRestantes(0)
        setFiles([])
        setFilesHelper([])
    }, [])
    return (
        <>
            <div className=" bg-gray-50 flex flex-col justify-center ">
                <HeadingAdmin heading='Registra un nuevo producto y comienza a ganar dinero' />
                <div className="max-w-[1290px]">
                    <NuevoProductoForm />
                </div>
            </div>

        </>)
}

export default AdminNuevoProducto
