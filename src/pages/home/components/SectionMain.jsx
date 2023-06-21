import HeaderSectionMain from "../../../components/e-shop/HeaderSectionMain"
import CardProduct from "../../../components/e-shop/CardProduct"
import Button from "../../../components/Button"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';

const SectionMain = ({ heading, textSection, arrowIcons, btnBottom, btnLeft, timer, productsData, grid }) => {
    return (
        <div className='my-10 py-10 max-w-[1240px] w-[90%] mx-auto flex flex-col gap-10 border-b-[1px] last:border-none'>
            <HeaderSectionMain heading={heading} textSection={textSection} arrowIcons={arrowIcons} btnLeft={btnLeft} timer={timer} />
            <section className="main_section">
                <Splide
                    options={{
                        type: "loop",
                        snap: true,
                        arrows: arrowIcons ? true : false,
                        pagination: false,
                        perMove: 1,
                        grid: {
                            cols: 4,
                            rows: grid ? 2 : 1,
                            gap: {
                                row: '2rem',
                                col: '1.5rem',
                            },
                        },

                    }}
                    extensions={{ Grid }}
                >
                    {
                        productsData?.data.map(producto => (
                            <SplideSlide key={producto._id}>
                                <CardProduct data={producto} />
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </section>
            {
                btnBottom && (
                    <Button btnText='Ver todos los productos' btnBottom={btnBottom} />
                )
            }
        </div>
    )
}

export default SectionMain
