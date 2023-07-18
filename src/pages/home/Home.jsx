import { useQuery } from "@tanstack/react-query"
import clienteAxios from "../../../config/clienteAxios"
import Spinner from "../../components/e-shop/Spinner"
import Hero from "./components/Hero"
import SectionMain from "./components/SectionMain"
import SectionCategorias from "./components/SectionCategorias"
import NuevosLanzamientos from '../../components/e-shop/NuevosLanzamientos'
import SectionHero from '../../components/e-shop/SectionHero'
import ContainerInfo from "../../components/e-shop/ContainerInfo"
import HeaderSectionMain from "../../components/e-shop/HeaderSectionMain"
const Home = () => {
  const obtenerAllProducts = async () => {
    try {
      const { data } = await clienteAxios.get('/productos')
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const obtenerAllPublicidad = async () => {
    try {
      const { data } = await clienteAxios.get('/publicidad')
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const productosQuery = useQuery(
    ['productos'],
    obtenerAllProducts,
    { staleTime: 1000 * 60 * 60 }
  )
  const publicidadQuery = useQuery(
    ['publicidad'],
    obtenerAllPublicidad,
    { staleTime: 1000 * 60 * 60 }
  )

  if (productosQuery.isFetching || productosQuery.isFetching) return <Spinner />
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Hero publicidadQuery={publicidadQuery} />
      <main>
        <SectionMain heading='Al día de hoy' textSection='Ventas con descuento' btnBottom={true} timer={true} productsData={productosQuery} arrowIcons={true} />
        <SectionCategorias />
        <SectionMain heading='Este mes' textSection='Productos más vendidos' vista={4} arrowIcons={false} btnLeft={true} productsData={productosQuery} />
        <SectionHero />
        <SectionMain heading='Nuestros productos' textSection='Explora nuestros productos' vista={8} arrowIcons={true} btnBottom={true} productsData={productosQuery} grid={true} />
        <NuevosLanzamientos />
        <div className="my-10 py-10 max-w-[1240px] w-[90%] mx-auto">
          <HeaderSectionMain heading={'Acerca de nosotros'} />
          <ContainerInfo />
        </div>
      </main>
    </div>

  )
}

export default Home
