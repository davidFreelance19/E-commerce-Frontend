import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const HeadingAdmin = ({ heading }) => {
    const { user } = useSelector(state => state.user)
    return (
        <div className="flex items-center justify-between  border-b-[2px] mb-12">
            <h2 className="text-lg my-10">{heading}</h2>
            <Link to={`/e-shop/dashboard/${user._id}/home`} className="text-sm">
                <button type="button" className="p-3 bg-indigo-600 rounded-md text-white font-semibold">
                    Regresar a Dashboard
                </button>
            </Link>
        </div>
    )
}

export default HeadingAdmin
