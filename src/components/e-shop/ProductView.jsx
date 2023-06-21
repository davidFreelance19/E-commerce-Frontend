import { AiFillStar, AiOutlinePlus, AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { GrSubtract } from 'react-icons/gr'
import Button from "../Button"

const ProductView = ({ data, closeModal }) => {
    return (
        <div className="mt-2 grid grid-cols-2 relative max-w-[1240px] mx-auto">
            <blockquote className="mt-4 flex flex-col items-center">
                {
                    data.images.map(image => (
                        <div className='w-[350px] h-[350px] grid place-content-center' key={image} >
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/${image}`} className='object-cover h-full' />
                        </div>
                    ))
                }
            </blockquote>
            <blockquote className='p-4 flex flex-col gap-4'>
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
                    <p>{data.description}</p>
                </div>
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
            </blockquote>
            <AiOutlineClose className='absolute top-[-10px] right-0 white bg-gray-100 rounded-full p-2 hover:cursor-pointer' size={35} onClick={closeModal} />
        </div>
    )
}

export default ProductView
