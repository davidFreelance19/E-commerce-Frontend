import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import useNuevoProducto from "../NuevoProducto/hooks/useNuevoProducto"
import HeadingAdmin from "../../components/HeadingAdmin"
import NuevoProductoForm from "../../components/NuevoProductoForm"
const EditarProducto = () => {
    const params = useParams()
    const { obtenerProducto, pasarDatosFormulario } = useNuevoProducto()
    const productoQuery = useQuery(
        [`producto/${params.id}`],
        () => obtenerProducto(params.id),

        { staleTime: 1000 * 60 * 60 }
    )
    const peticionFormulario = () => {
        if (productoQuery.isFetching) return <p>cargando...</p>
        pasarDatosFormulario(productoQuery.data[0])
    };
    useEffect(() => {
        peticionFormulario();

    }, [productoQuery.isFetching]);

    return (
        <div>
            <HeadingAdmin heading='Termina por editar tu producto y sigue ganando dinero:' />
            <NuevoProductoForm />
        </div>
    )
}

export default EditarProducto
