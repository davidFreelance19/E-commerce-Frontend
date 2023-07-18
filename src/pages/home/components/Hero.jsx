import { Link, useParams } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Galleria } from 'primereact/galleria';
import { categoriasProductos } from "../../../static/data"
import HeroPublicidad from "../../../components/e-shop/HeroPublicidad"


const Hero = ({publicidadQuery}) => {

    const itemTemplate = (product) => {
        return (
          <HeroPublicidad icon={product.imgLogo[0]} imgHero={product.imgHero[0]} descripcion={product.descripcion} bgPublicidad={product.theme} tienda={product.nombre} />
        );
      };
    if (publicidadQuery.isFetching) return <p>Cargando...</p>
    const params = useParams()
    return (
        <div className='mb-6  max-w-[1240px] w-[90%] mx-auto' style={{
            display: 'grid',
            gridTemplateColumns: '25% 75%'
        }}>
            <div className='flex flex-col items-start gap-y-5 font-semibold border-r-[1px] py-4'>
                {
                    categoriasProductos.map(categoria => (
                        <div key={categoria.name} className="flex items-center justify-between w-[90%]">
                            <Link to={`/e-shop/products/${categoria.name.split()}`} className={`${params.categoria === categoria.name ? "border-b-2 border-black" : ''}`}>{categoria.name}</Link>
                            <>
                                {categoria.name === 'Woman’s Fashion' || categoria.name === 'Men’s Fashion' ?
                                    <MdKeyboardArrowRight size={25} className="hover:cursor-pointer" /> : <></>}
                            </>
                        </div>
                    ))
                }
            </div>
            <Galleria
                value={publicidadQuery.data} numVisible={5} circular style={{ maxWidth: '100%' }}
                autoPlay  transitionInterval={4500} showIndicators
                showThumbnails={false} item={itemTemplate}
            />

        </div>
    )
}

export default Hero
