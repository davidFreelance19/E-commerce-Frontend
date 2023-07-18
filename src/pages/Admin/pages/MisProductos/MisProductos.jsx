import { useState, useRef } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { DataView } from 'primereact/dataview';
import useNuevoProducto from "../NuevoProducto/hooks/useNuevoProducto";
import HeadingAdmin from "../../components/HeadingAdmin";
import MyModal from "../../../../components/Modal";
import RowProduct from "./components/RowProduct";

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
const MisProductos = () => {
    const params = useParams()
    const toast = useRef(null);

    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})
    const { obtenerProductosUsuario, eliminarProductoUsuario } = useNuevoProducto()

    function closeModal() {
        setIsOpen(false)
    } function openModal() {
        setIsOpen(true)
    }

    const handleClick = (product) => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        setData(product)
    }
    const accept = (producto) => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Eliminado Correctamente', life: 3000 });
        eliminarProductoUsuario(producto)
    }

    const handleDeleteClick = (e, producto) => {
        e.preventDefault()
        confirmDialog({
            message: '¿Deseas eliminar este producto?',
            header: 'Confirmación de eliminado',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: ()=>accept(producto),
        });
    }
    const gridItem = (product) => {
        return (
            <RowProduct product={product} handleClick={handleClick} handleDeleteClick={handleDeleteClick} />
        );
    };
    const itemTemplate = (product) => {
        if (!product) {
            return;
        }
        return gridItem(product);
    };
    const productosUserQuery = useQuery(
        [`productos-user-${params.token}`],
        obtenerProductosUsuario,
        { staleTime: 1000 * 60 * 60 }
    )


    if (productosUserQuery.isFetching) return <p>cargando...</p>

    return (
        <>
            <HeadingAdmin heading='Comienza a administrar tus productos:' />
            <DataView value={productosUserQuery.data} itemTemplate={itemTemplate} layout={'grid'} paginator rows={9} className="flex flex-col gap-6" />
            <MyModal closeModal={closeModal} openModal={openModal} isOpen={isOpen} data={data} />
            <Toast ref={toast} />
            <ConfirmDialog />
        </>
    )
}

export default MisProductos
