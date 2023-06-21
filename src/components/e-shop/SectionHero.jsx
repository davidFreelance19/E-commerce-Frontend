import Button from '../Button';
import imgSectionHero from '../../assets/heroSection.svg';
import Timer from '../Timer';
const SectionHero = () => {
    return (
        <div className='max-w-[1240px] w-[90%] mx-auto px-10  min-h-[450px] relative bg-black flex <-10' >
            <div className='z-10 relative text-white  flex flex-col justify-center gap-5'>
                <p className='text-green-400 font-semibold text-lg'>Categorías</p>
                <h2 className='text-5xl font-semibold'>
                    Mejore su experiencia musical
                </h2>
                <Timer heroSection={true}/>
                <Button btnText='¡Comprar ahora!' btnColorGreen={true} />
            </div>
            <img src={imgSectionHero} className='z-10 relative' />
            <div className='absolute top-0 right-0 left-0 bottom-0' style={{
                background: '#D9D9D9',
                opacity: '0.3',
                filter: 'blur(100px)',
            }}></div>
        </div>
    )
}

export default SectionHero
