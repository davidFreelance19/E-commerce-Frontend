import { Link } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md"
import { AiOutlineArrowRight } from "react-icons/ai"
import imgHero from '../../../assets/heroImg.png'
import iconApple from '../../../assets/appleIcon.png'

const Hero = () => {
    return (
        <div className='mb-6  max-w-[1240px] w-[90%] mx-auto' style={{
            display: 'grid',
            gridTemplateColumns: '30% 70%'
        }}>
            <div className='flex flex-col items-start gap-y-5 font-semibold border-r-[1px] py-4'>
                <div className="flex items-center justify-between w-[90%]">
                    <Link to='#'>Woman’s Fashion</Link>
                    <MdKeyboardArrowRight size={25} className="hover:cursor-pointer" />
                </div>
                <div className="flex items-center justify-between w-[90%]">
                    <Link to='#'>Men’s Fashion</Link>
                    <MdKeyboardArrowRight size={25} className="hover:cursor-pointer" />
                </div>
                <Link to='#'>Electrónica</Link>
                <Link to='#'>Hogar & estilo de vida</Link>
                <Link to='#'>Medicamento</Link>
                <Link to='#'>Deportes & aire libre</Link>
                <Link to='#'>Bebé & juguetes</Link>
                <Link to='#'>Comestibles & Mascotas</Link>
                <Link to='#'>Salud & Belleza</Link>

            </div>
            <blockquote className="max-w-[950px] px-8 py-4">
                <div className="bg-black w-full h-full flex text-white items-center gap-5">
                    <div className="ml-6 flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <img src={iconApple} alt="icon-apple"/>
                            <p>iPhone 14 Series</p>
                        </div>
                        <h2 className="text-3xl font-semibold">
                            Hasta 10% de descuento
                        </h2>
                        <Link to='#' className="flex items-center gap-4">Comprar ahora <span><AiOutlineArrowRight size={20}/></span></Link>
                    </div>
                    <img src={imgHero} alt="img-hero" />
                </div>
            </blockquote>
        </div>
    )
}

export default Hero
