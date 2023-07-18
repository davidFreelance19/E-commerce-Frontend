import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useQuery } from "@tanstack/react-query"
import usePublicidad from "../hooks/usePublicidad"
import HeadingAdmin from '../../../components/HeadingAdmin';
import HeroPublicidad from '../../../../../components/e-shop/HeroPublicidad';
const MisPublicidad = () => {
    const navigate = useNavigate()
    
    const { user } = useSelector(state => state.user)
    const toast = useRef(null);
    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [colorBg, setColorBg] = useState('000');
    const [imageLogo, setImageLogo] = useState([])
    const [imageHero, setImageHero] = useState([])

    const [visible, setVisible] = useState(false);
    const { obtenerPublicidadUsuario, eliminarPublicidad } = usePublicidad()

    const publicidadUserQuery = useQuery(
        [`publicidad-user`],
        obtenerPublicidadUsuario,
        { staleTime: 1000 * 60 * 60 }
    )
    const imgLogo = (product) => {
        return <img src={`${import.meta.env.VITE_BACKEND_URL}/${product.imgLogo[0]}`} alt={product.imgLogo[0]} className="max-w-[120px] max-h-[90px]" />;
    };
    const handleClickVisible = (product) => {
        setName(product.nombre)
        setColorBg(product.theme)
        setDescripcion(product.descripcion)
        setImageLogo(product.imgLogo[0])
        setImageHero(product.imgHero[0])
        setVisible(true)
    }
    const accept = (producto) => {
        toast.current.show({ severity: 'info', summary: 'Confirmado', detail: 'Eliminado Correctamente', life: 3000 });
        eliminarPublicidad(producto)
    }
    const handleDeleteClick = (e, producto) => {
        e.preventDefault()
        confirmDialog({
            message: '¿Deseas eliminar esta publicidad?',
            header: 'Confirmación de eliminado',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => accept(producto),
        });
    }
    if (publicidadUserQuery.isFetching) return <p>cargando...</p>

    const deleteProductDialog = product => {
        return (
            <div className='flex gap-3'>
                <Button icon="pi pi-eye" className="p-button-rounded" style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    borderColor: '#0005',
                }} onClick={() => handleClickVisible(product)} />
                <Button icon="pi pi-pencil" rounded outlined
                    onClick={() => navigate(`/e-shop/dashboard/${user._id}/publicidad/editar-publicidad/${product._id}`)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={e => handleDeleteClick(e, product._id)} />
            </div>
        )
    }

    return (
        <div>
            <HeadingAdmin heading='Administra tu publicidad para obtener mejores resultados:' />
            <DataTable value={publicidadUserQuery.data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nombre" header="Tienda" className='font-bold'></Column>
                <Column header="Logo" body={imgLogo}></Column>
                <Column field="descripcion" header="Descripcion"></Column>
                <Column header='Opciones' body={deleteProductDialog}></Column>
            </DataTable>

            <div className="card flex justify-content-center">
                <Dialog header="Vista previa de la publicidad:" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <HeroPublicidad tienda={name} descripcion={descripcion} icon={imageLogo} imgHero={imageHero} bgPublicidad={colorBg} />
                </Dialog>
            </div>
            <Toast ref={toast} />
            <ConfirmDialog />
        </div>
    )
}

export default MisPublicidad
