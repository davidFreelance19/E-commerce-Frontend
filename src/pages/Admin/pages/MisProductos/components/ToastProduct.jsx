import React, { useRef, useState } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import useNuevoProducto from '../../NuevoProducto/hooks/useNuevoProducto';
export default function ToastProduct({ product }) {

    const toast = useRef(null);


    const { eliminarProductoUsuario } = useNuevoProducto()


    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Eliminado Correctamente', life: 3000 });
        setFilesHelper([])
        setFiles([])
    }

    const handleDeleteClick = (e) => {
        e.preventDefault()
        confirmDialog({
            message: '¿Deseas eliminar todas las imágenes?',
            header: 'Confirmación de eliminado',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
        });
    }

    return (
        <div className="card flex justify-center">
            <Toast ref={toast} />
            <ConfirmDialog />

            
        </div>
    )
}
