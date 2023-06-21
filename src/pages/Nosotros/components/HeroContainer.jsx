import imgNosotros from '../../../assets/imgNosotros.svg'
const HeroContainer = () => {
    return (
        <blockquote className='grid grid-cols-2 my-20'>
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='text-5xl my-4 capitalize font-bold'>Nuestra historia</h1>
                <p className='max-w-[90%]'>Lanzado en 2015, Exclusive es el principal lugar de creación de compras en línea del sur de Asia con una presencia activa en Bangladesh. Con el respaldo de una amplia gama de soluciones personalizadas de marketing, datos y servicios, Exclusive tiene 10 500 vendedores y 300 marcas y atiende a 3 millones de clientes en toda la región. . </p>
                <p className='max-w-[90%]'>Exclusive tiene más de 1 millón de productos para ofrecer, creciendo a un ritmo muy rápido. Exclusive ofrece una variedad diversa en categorías que van desde el consumidor</p>
            </div>
            <div>
                <img src={imgNosotros} alt="img-nosotros" />
            </div>
        </blockquote>
    )
}

export default HeroContainer
