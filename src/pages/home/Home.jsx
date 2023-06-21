import { useEffect } from "react"
import Hero from "./components/Hero"
import SectionMain from "./components/SectionMain"
import SectionCategorias from "./components/SectionCategorias"
import NuevosLanzamientos from '../../components/e-shop/NuevosLanzamientos'
import SectionHero from '../../components/e-shop/SectionHero'
import SectionServices from "../../components/e-shop/SectionServices"
import iconFast from '../../assets/iconFast.svg'
import iconCustomer from '../../assets/iconCustomer.svg'
import iconMoney from '../../assets/iconMoney.svg'
import iconDolar from '../../assets/iconDolar.svg'
import clienteAxios from "../../../config/clienteAxios"
import { useQuery } from "@tanstack/react-query"
const Home = () => {
  const obtenerAllProducts = async () => {
    try {
      const { data } = await clienteAxios.get('/productos')
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
  if (productosQuery.isFetching) return <p>Cargando...</p>
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Hero />
      <main>
        <SectionMain heading='Al día de hoy' textSection='Ventas con descuento' btnBottom={true} timer={true} productsData={productosQuery} arrowIcons={true}/>
        <SectionCategorias />
        <SectionMain heading='Este mes' textSection='Productos más vendidos' vista={4} arrowIcons={false} btnLeft={true} productsData={productosQuery}/>
        <SectionHero />
        <SectionMain heading='Nuestros productos' textSection='Explora nuestros productos' vista={8} arrowIcons={true} btnBottom={true} productsData={productosQuery} grid={true}/>
        <NuevosLanzamientos />
        <div className='max-w-[1240px] w-[90%] mx-auto my-32 grid grid-cols-4 gap-8'>
          <SectionServices icon={iconFast} textHeading='10.5k' textInfo='Vendedores activos nuestro sitio' />
          <SectionServices icon={iconCustomer} textHeading='33k' textInfo='Venta mensual de productos' />
          <SectionServices icon={iconDolar} textHeading='45.5k' textInfo='Clientes activos en nuestro sitio' color={true} />
          <SectionServices icon={iconMoney} textHeading='25k' textInfo='Venta bruta anual en nuestro sitio' />
        </div>
      </main>
    </div>

  )
}

export default Home
