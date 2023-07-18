import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import clienteAxios from "../../../config/clienteAxios"
import CardProduct from "../../components/e-shop/CardProduct"
import Hero from "../home/components/Hero"
import HeaderSectionMain from "../../components/e-shop/HeaderSectionMain"
import ContainerInfo from "../../components/e-shop/ContainerInfo"
const ProductCategoria = () => {
  const params = useParams()
  const obtenerAllPublicidad = async () => {
    try {
      const { data } = await clienteAxios.get('/publicidad')
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const obtenerAllProducts = async () => {
    try {
      const { data } = await clienteAxios.get(`productos/categoria/${params.categoria}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const productosCategoriaQuery = useQuery(
    [`productos-${params.categoria}`],
    obtenerAllProducts,
    { staleTime: 1000 * 60 * 60 }
  )
  const publicidadQuery = useQuery(
    ['publicidad'],
    obtenerAllPublicidad,
    { staleTime: 1000 * 60 * 60 }
  )
  if (productosCategoriaQuery.isFetching || publicidadQuery.isFetching) return <p>cargando...</p>
  return (

    <>
      <Hero publicidadQuery={publicidadQuery}/>
      <div className='my-10 py-10 max-w-[1240px] w-[90%] mx-auto border-b-[1px] last:border-none '>
        <HeaderSectionMain heading={params.categoria} />
        <section className="grid grid-cols-4 gap-6 relative">
          {
            productosCategoriaQuery.data.map(productos => (
              <CardProduct data={productos} />
            ))
          }
        </section>

      </div>
      <div className="my-10 py-10 max-w-[1240px] w-[90%] mx-auto">
        <HeaderSectionMain heading={'Acerca de nosotros'} />
        <ContainerInfo />
      </div>
    </>
  )
}

export default ProductCategoria
