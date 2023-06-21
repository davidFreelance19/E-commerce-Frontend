import { Link } from "react-router-dom"

const FooterItem = ({ children, text, enlace }) => {
    return (
        <>
            <div className="flex flex-col h-full gap-6">
                <Link to={`${enlace}`} className="font-bold text-2xl">{text}</Link>

                <div className='flex flex-col gap-2 font-semibold'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default FooterItem
