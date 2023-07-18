
import { useState } from "react"
import useNuevoProducto from "../hooks/useNuevoProducto"
import { AiFillStar, } from "react-icons/ai"
import iconImage from '../../../../../assets/iconImage.svg'
import parse from 'html-react-parser'
const NuevoProductoView = () => {
    const [index, setIndex] = useState(0)
    const { name, descripcion, precioDescuento, precioOriginal, files, } = useNuevoProducto()
    const handleClickImage = (imagen) => {
        setIndex(files.indexOf(imagen))
    }
    return (
        <blockquote className="hover:cursor-pointer flex flex-col gap-3 bg-white py-8 p-4">

            <div className="flex items-center justify-end">
                <AiFillStar className=" fill-yellow-400 " />
                <AiFillStar className=" fill-yellow-400 " />
                <AiFillStar className=" fill-yellow-400 " />
                <AiFillStar className=" fill-yellow-400 " />
                <AiFillStar className=" fill-yellow-400 " />

                <p className="ml-2 font-semibold">0 reviews</p>
            </div>
            <div className='min-w-[270px] min-h-[420px] flex flex-col gap-3'>

                <div className="bg-gray-100 h-[320px] grid place-items-center rounded place-content-center gap-4 relative">
                    <div className="absolute left-5 top-10">
                        {
                            files.map(image => (
                                <div
                                    className={`${image.name === files[index].name ? 'border-[1px] border-gray-500' : ''} h-[45px] rounded mb-3 mx-auto my-0 w-[45px] bg-center bg-no-repeat bg-contain`}
                                    onClick={() => handleClickImage(image)}
                                    style={{
                                        filter: 'brightness(1,1)',
                                        mixBlendMode: 'multiply',
                                        backgroundImage: `url(${URL.createObjectURL(image)})`
                                    }}
                                ></div>
                            ))
                        }
                    </div>
                    <img src={files[index] ? URL.createObjectURL(files[index]) : iconImage}
                        alt="icon-image" className="object-fill max-w-full max-h-[170px]"
                        style={{
                            filter: 'brightness(1,1)',
                            mixBlendMode: 'multiply',
                        }} />
                    {files[index] ? <></> : <p>Ingresa una foto...</p>}
                </div>

                <div className="flex gap-3 flex-col ">
                    <p className="font-semibold">{name}</p>
                    <div className="flex gap-4">
                        {precioDescuento ? <p className="text-red-400 font-bold">${precioDescuento}</p> : <></>}
                        {precioOriginal ? <p className={`${precioDescuento ? 'line-through' : ''} font-bold text `}>${precioOriginal}</p> : <></>}
                    </div>
                </div>

                <div className='container-description'>{descripcion?.length > 0 ? parse(descripcion) : parse('')}</div>
            </div>
        </blockquote>
    )
}

export default NuevoProductoView
