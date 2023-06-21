import { Link } from "react-router-dom"
import HeaderSectionMain from "./HeaderSectionMain"
import imgPlay from '../../assets/play.png'
import imgBocinas from '../../assets/bocinas.png'
import imgPerfumeGucci from '../../assets/gucciPerfume.png'
const NuevosLanzamientos = () => {
    return (
        <section className="max-w-[1240px] w-[90%] mx-auto mt-10 flex flex-col gap-8 mb-20">
            <HeaderSectionMain heading='Presentaciones' textSection='Nuevos lanzamientos' timer={true} />
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
                <div className="max-h-[580px] bg-black hover:cursor-pointer p-8 flex lg:h-[570px] md:h-[400px] relative z-10" style={{ gridRow: '1/3' }}>
                    <div className="text-white self-end flex-col flex gap-2 z-10">
                        <h3 className="text-xl font-bold">PlayStation 5</h3>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <Link to='#'>Comprar ahora</Link>
                    </div>
                    <img src={imgPlay} className="absolute z-1 bottom-0" alt="img-play" />
                </div>
                <div className="max-h-[580px] bg-black hover:cursor-pointer p-8 flex relative z-10" style={{ gridRow: '1/2', gridColumn: '2/3' }}>
                    <div className="text-white self-end flex-col flex gap-2  z-10">
                        <h3 className="text-xl font-bold">Women’s Collections</h3>
                        <p>Featured woman collections that give you another vibe.</p>
                        <Link to='#'>Comprar ahora</Link>
                    </div>
                    <img src={imgPerfumeGucci} className="absolute z-1 bottom-50 right-20" alt="img-play"/>
                </div >
                <div className="grid grid-cols-2 gap-5" style={{ gridRow: '2/3', gridColumn: '2/3' }}>
                    <div className="w-full h-full bg-black hover:cursor-pointer p-8 flex relative">
                        <div className="text-white self-end flex-col flex gap-2  z-10">
                            <h3 className="text-xl font-bold">Tecnología</h3>
                            <p>Amazon wireless speakers.</p>
                            <Link to='#'>Comprar ahora</Link>
                        </div>

                        <img src={imgBocinas} className="absolute z-1 bottom-50 right-12" alt="img-play" />
                    </div>
                    <div className="w-full bg-black hover:cursor-pointer p-8 flex h-full relative z-10">
                        <div className="text-white self-end flex-col flex gap-2  z-10">
                            <h3 className="text-xl font-bold">Perfume</h3>
                            <p>GUCCI INTENSE OUD EDP.</p>
                            <Link to='#'>Comprar ahora</Link>
                        </div>
                        <img src={imgPerfumeGucci} className="absolute z-1 bottom-10 right-12" alt="img-play" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NuevosLanzamientos
