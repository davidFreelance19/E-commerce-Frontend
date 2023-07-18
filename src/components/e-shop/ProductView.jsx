import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import parse from 'html-react-parser'
import { AiFillStar, AiOutlinePlus, AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { GrSubtract } from 'react-icons/gr'
import Button from "../Button"

const ProductView = ({ data, closeModal }) => {
    const location = useLocation()
    const [indexImage, setIndexImage] = useState(0)
    const handleClickImage = (imagen) => (
        setIndexImage(data.images.indexOf(imagen))
    )
    return (
        <div className="mt-2 grid grid-cols-2 relative min-w-[1080px] mx-auto">
            <blockquote className="mt-4 flex  items-center w-11/12 mx-auto">
                <div className='flex flex-col items-center gap-4'>
                    {
                        data.images.map(image => (
                            <div className={
                                `${image === data.images[indexImage] ? 'border-gray-500 border-[1px] opacity-60' : ''} p-1 max-w-[80px] max-h-[90px] grid place-content-center hover:cursor-pointer `
                            } key={image} onClick={() => handleClickImage(image)}>
                                <img src={`${import.meta.env.VITE_BACKEND_URL}/${image}`} className='object-fit h-[50px] max-w-[70px]' />
                            </div>
                        ))
                    }
                </div>
                <div className='min-h-[200px] flex justify-center w-full'>
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/${data.images[indexImage]}`} className='object-contain max-w-[300px] max-h-[400px]' />
                </div>

            </blockquote>
            <blockquote className='p-4 flex flex-col gap-4 justify-center w-full'>
                <div className='border-b-2 py-5 flex flex-col gap-3'>
                    <h2 className="text-2xl font-bold leading-6 text-gray-900 ">{data.nombre}</h2>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center border-r-[1px] pr-4'>
                            <AiFillStar className=" fill-yellow-400 " />
                            <AiFillStar className=" fill-yellow-400 " />
                            <AiFillStar className=" fill-yellow-400 " />
                            <AiFillStar className=" fill-yellow-400 " />
                            <AiFillStar className=" fill-yellow-400 " />
                            <p className="ml-3 font-semibold">{data.restantes} reviews</p>

                        </div>
                        <p className="ml-2  text-green-400">({data.restantes} disponibles)</p>
                    </div>
                    <div className="flex gap-4">
                        {data.precioDescuento ? <p className="text-red-400 font-semibold text-xl">${data.precioDescuento}</p> : <></>}
                        {data.precioOriginal ? <p className={`${data.precioDescuento ? 'line-through' : ''} font-semibold text-xl `}>${data.precioOriginal}</p> : <></>}
                    </div>

                    <div className={`${location.pathname.includes('e-shop/home') ? 'contenido' : ''} container-description`}>
                        <h2 className='font-semibold  py-4'>Descripción del producto:</h2>
                        {data.description?.length > 0 ? parse(data?.description) : parse('')}
                    </div>

                    {location.pathname.includes('e-shop/home') ? <Link className='self-end' to={`/e-shop/product/${data._id}`}>Ver más</Link> : ''}
                </div>
                {
                    !location.pathname.includes('dashboard') ? (
                        <div className='grid gap-4 items-center my-2 w-full' style={{
                            gridTemplateColumns: '30% 40% 30%'
                        }}>
                            <div className='grid grid-cols-3 items-center border-2 rounded justify-center h-full w-full'>
                                <div className=' h-full border-r-2 w-full grid place-content-center'>
                                    <AiOutlinePlus className='mx-auto' size={20} />
                                </div>
                                <p className='text-center text-lg'>3</p>
                                <div className=' h-full border-l-2 w-full grid place-content-center'>
                                    <GrSubtract className='mx-auto' size={20} />
                                </div>
                            </div>
                            <Button btnText={'Comprar ahora'} className='w-full p-0 h-full' />
                            <AiOutlineHeart className='p-3 border-2 rounded' size={53} />
                        </div>
                    ) : (<></>)
                }
            </blockquote>
            {location.pathname.includes('e-shop/product/') ? (
                <></>
            ) : (<AiOutlineClose className='absolute top-[-15px] right-2 white bg-gray-100 rounded-full p-2 hover:cursor-pointer' size={35} onClick={closeModal} />)}
        </div>
    )
}

export default ProductView
