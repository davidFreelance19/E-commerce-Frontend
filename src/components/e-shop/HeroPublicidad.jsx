import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"

const HeroPublicidad = ({ imgHero, icon, tienda, descripcion, bgPublicidad, previa }) => {
    return (
        <blockquote className="w-full h-[455px]"  style={{
            backgroundColor: `#${bgPublicidad}`
        }}>
            <div className=" h-full flex text-white items-center justify-center xl:w-11/12 mx-auto"
               
            >
                <div className="ml-6 flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                        <img src={`${previa ? icon : `${import.meta.env.VITE_BACKEND_URL}/${icon}`}`} alt="icon-apple" className="max-w-[80px] max-h-[80px] rounded-full object-cover" />
                        <p>{tienda}</p>
                    </div>
                    <h2 className="text-3xl font-semibold">
                        {descripcion}
                    </h2>
                    <Link to='#' className="flex items-center gap-4">Comprar ahora <span><AiOutlineArrowRight size={20} /></span></Link>
                </div>
                <img src={`${previa ? imgHero : `${import.meta.env.VITE_BACKEND_URL}/${imgHero}`}`} alt="img-hero" className="max-w-[90%] max-h-[90%]" />
            </div>
        </blockquote>
    )
}

export default HeroPublicidad
