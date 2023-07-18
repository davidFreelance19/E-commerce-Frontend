
import Timer from "../Timer"
import Button from "../Button"
const HeaderSectionMain = ({ heading, textSection, btnLeft, timer, children }) => {
    return (
        <>
            <div className='p-4 border-l-red-500 border-l-[25px] rounded-md bg-gray-50'>
                <h2 className='text-lg font-semibold text-red-400'>{heading}</h2>
            </div>

            <blockquote className="flex items-center justify-between min-h-[65px]">
                <div className="flex items-center gap-4">
                    <p className='text-2xl font-semibold'>
                        {textSection}
                    </p>
                    {
                        timer ? (
                            <Timer />
                        ) : (<></>)
                    }
                </div>
             
                {
                    btnLeft && (
                        <Button btnText='Ver todos los productos' />
                    )
                }
            </blockquote>
        </>
    )
}

export default HeaderSectionMain
