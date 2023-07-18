import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
const RowProduct = ({ product, handleClick, handleDeleteClick }) => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    
    return (
        <blockquote className="border-[1px] rounded bg-white cursor-pointer p-5 h-auto">

            <div className="flex flex-wrap items-center justify-between gap-2 ">
                <div className="flex items-center gap-2">
                    <i className="pi pi-tag"></i>
                    <span className="font-semibold">{product.categoria}</span>
                </div>
            </div>

            <div className="grid gap-3 py-5 h-[260px]">
                <img src={`${import.meta.env.VITE_BACKEND_URL}/${product.images[0]}`} className='object-cover max-h-[150px] max-w-[200px] mx-auto border-round self-center' />
                <div className="self-end">
                    <p className="text-lg font-bold">{product.nombre}</p>
                    <Rating value={4.2} readOnly cancel={false}></Rating>
                </div>
            </div>

            <div className="flex items-center justify-end ">
                <div className="flex gap-4 ">
                    <Button icon="pi pi-eye" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'} style={{
                        backgroundColor: '#fff',
                        color: '#000',
                        borderColor: '#0005',
                    }} onClick={() => handleClick(product)} />
                    <Button icon="pi pi-file-edit" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                        onClick={() => navigate(`/e-shop/dashboard/${user._id}/product/editar-producto/${product._id}`)} />
                    <Button icon="pi pi-times" className="p-button-rounded " style={{
                        border: 'none',
                        backgroundColor: ' rgb(239 68 68 / var(--tw-bg-opacity))'
                    }} onClick={e => handleDeleteClick(e,product._id)}></Button>
                </div>
            </div>

        </blockquote>
    )
}

export default RowProduct
