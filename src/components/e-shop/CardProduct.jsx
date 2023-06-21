import { useNavigate } from "react-router-dom"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { GrView } from "react-icons/gr"
import { useState } from "react"
import MyModal from "../Modal"
const CardProduct = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <blockquote className="hover:cursor-pointer p-0">
            <div className='min-w-[270px] min-h-[320px] flex flex-col gap-2'>
                <div className="bg-gray-100 h-[250px] grid place-items-center rounded  p-6 place-content-center">
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/${data.images[0]}`} alt="img-product" className="w-auto max-h-[230px]" style={{
                        filter: 'brightness(1,1)',
                        mixBlendMode: 'multiply',
                    }} />
                    <div className="absolute right-4 top-4">
                        <AiOutlineHeart size={35} className="bg-white rounded-full p-2" />
                        <GrView size={35} className="bg-white rounded-full p-2 mt-2" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
                    </div>
                </div>

                <div className="flex gap-1 flex-col " onClick={()=> navigate(`/e-shop/product/${data._id}`)}>
                    <p className="font-semibold">{data.nombre}</p>
                    <div className="flex gap-4">
                        {data.precioDescuento ? <p className="text-red-400 font-bold">${data.precioDescuento}</p> : <></>}
                        {data.precioOriginal ? <p className={`${data.precioDescuento ? 'line-through' : ''} font-bold text `}>${data.precioOriginal}</p> : <></>}
                    </div>
                </div>

                <div className="flex items-center">
                    <AiFillStar className=" fill-yellow-400 " />
                    <AiFillStar className=" fill-yellow-400 " />
                    <AiFillStar className=" fill-yellow-400 " />
                    <AiFillStar className=" fill-yellow-400 " />
                    <AiFillStar className=" fill-yellow-400 " />
                    <p className="ml-2 font-semibold">({data.restantes})</p>
                </div>
            </div>
            <MyModal closeModal={closeModal} openModal={openModal} isOpen={isOpen} data={data}/>
        </blockquote>
    )
}

export default CardProduct
