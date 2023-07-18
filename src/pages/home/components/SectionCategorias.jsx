import { useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { categoriasProductosMain } from "../../../static/data"
import HeaderSectionMain from "../../../components/e-shop/HeaderSectionMain"

const SectionCategorias = () => {
    const navigate = useNavigate()
    return (
        <div className='my-10 py-10 max-w-[1240px] w-[90%] mx-auto flex flex-col gap-8 border-b-[1px] last:border-none main_section'>
            <HeaderSectionMain heading='Categorias' textSection='Buscar por categoría' arrowIcons={true} />
            <Splide
                options={{
                    type: "loop",
                    snap: true,
                    pagination: false,
                    perPage: 5,
                    arrows: true,
                    gap: 20
                }}
            >
                {
                    categoriasProductosMain.map(category => (
                        <SplideSlide key={category.name}>
                            <div key={category.name} className="grid place-content-center place-items-center gap-4 border border-gray-200 p-4 h-[150px] hover:cursor-pointer" onClick={()=>navigate(`/e-shop/products/${category.name.split(",")}`)}>
                                {category?.icon}
                                <p className="text-center">{category.name}</p>
                            </div>
                        </SplideSlide>
                    ))
                }


            </Splide>
        </div>
    )
}

export default SectionCategorias
