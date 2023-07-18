import SectionServices from "./SectionServices"
import iconFast from '../../assets/iconFast.svg'
import iconCustomer from '../../assets/iconCustomer.svg'
import iconMoney from '../../assets/iconMoney.svg'
import iconDolar from '../../assets/iconDolar.svg'
const ContainerInfo = () => {
    return (
        <div className='max-w-[1240px] w-[90%] mx-auto grid grid-cols-4 gap-8'>
            <SectionServices icon={iconFast} textHeading='10.5k' textInfo='Vendedores activos nuestro sitio' />
            <SectionServices icon={iconCustomer} textHeading='33k' textInfo='Venta mensual de productos' />
            <SectionServices icon={iconDolar} textHeading='45.5k' textInfo='Clientes activos en nuestro sitio' color={true} />
            <SectionServices icon={iconMoney} textHeading='25k' textInfo='Venta bruta anual en nuestro sitio' />
        </div>
    )
}

export default ContainerInfo
