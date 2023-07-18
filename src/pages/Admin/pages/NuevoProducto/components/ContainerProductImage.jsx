import { useRef, useEffect, useState } from 'react';
import useNuevoProducto from '../hooks/useNuevoProducto';
import { FileUpload } from 'primereact/fileupload';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import ImagenesProducts from './ImagenesProducts';
const ContainerProductImage = () => {
    const fileUploadRef = useRef(null);
    const { files, setFiles, filesHelper, setFilesHelper } = useNuevoProducto()
    const toast = useRef(null);

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
    const onTemplateSelect = (e) => {
        let imagenes = e.files;
        let arrayImg = [imagenes, ...filesHelper].flat()
        setFilesHelper(arrayImg)
    };
    const handleCancelImage = (imagen) => {
        if (!imagen.name) {
            const nuevoArrayFiles = files.filter(fileState => fileState !== imagen)
            setFiles(nuevoArrayFiles)
        } else {
            const nuevoArrayFilesHelper = filesHelper.filter(fileState => fileState.name !== imagen.name)
            setFilesHelper(nuevoArrayFilesHelper)
        }
    }
    const headerTemplate = (options) => {
        const { className, chooseButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}

                <Button label="Borrar Todo" severity="danger" className={`${[files, filesHelper].flat().length === 0 ? 'opacity-60' : ''}`} onClick={e => handleDeleteClick(e)} />
            </div>
        );
    };
    return (
        <div className="card">
            <Toast ref={toast} />
            <ConfirmDialog />
            <FileUpload
                ref={fileUploadRef} name="demo[]" url={'/api/upload'}
                accept="image/*" maxFileSize={1000000}
                emptyTemplate={files.length > 0 || filesHelper.length > 0 ? <ImagenesProducts files={files} filesHelper={filesHelper} handleCancelImage={handleCancelImage}/>
                    : <p className="m-0">Drag and drop files to here to upload.</p>}
                onSelect={(e) => onTemplateSelect(e)}
                itemTemplate={<ImagenesProducts files={files} filesHelper={filesHelper} handleCancelImage={handleCancelImage} />}
                headerTemplate={headerTemplate}
            />
        </div>
    )
}

export default ContainerProductImage
