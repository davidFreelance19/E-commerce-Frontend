import { categoriasSection } from "../../../static/data"
import HeaderSectionMain from "../../../components/e-shop/HeaderSectionMain"
import { BsPhone } from "react-icons/bs"
const SectionCategorias = () => {
    return (
        <div className='my-10 py-10 max-w-[1240px] w-[90%] mx-auto flex flex-col gap-6 border-b-[1px] last:border-none'>
            <HeaderSectionMain heading='Categorias' textSection='Buscar por categoría' arrowIcons={true}/>
            <div className="grid grid-cols-6 gap-6 mt-4 hover:cursor-pointer">
                {categoriasSection.map((category) => (
                    <div key={category.id} className="grid place-content-center gap-4 border border-gray-200 p-4">
                        <BsPhone size={60} className="mx-auto"/>
                        <p className="text-center">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionCategorias
