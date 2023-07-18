import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import usePublicidad from '../hooks/usePublicidad'
import HeadingAdmin from "../../../components/HeadingAdmin"
import NuevaPublicidadForms from '../components/NuevaPublicidadForms'
const EditarPublicidad = () => {
    const params = useParams()
    const { obtenerPublicidad, pasarDatosFormulario } = usePublicidad()
    const publicidadQuery = useQuery(
        [`publicidad/${params.id}`],
        () => obtenerPublicidad(params.id),
        { staleTime: 1000 * 60 * 60 }
    )
    const peticionFormulario = () => {
        if (publicidadQuery.isFetching) return <p>cargando...</p>
        pasarDatosFormulario(publicidadQuery.data[0])
    };
    useEffect(() => {
        peticionFormulario();
    }, [publicidadQuery.isFetching]);
    return (
        <div>
            <HeadingAdmin heading='Termina por editar tu publicidad y retoma tus buenos resultados:' />
            <NuevaPublicidadForms />
        </div>
    )
}

export default EditarPublicidad
