import { Link } from "react-router-dom"

const EnlaceAutenticacion = ({ locacion }) => {
    return (
        <div>
            <h4>{locacion === '/login' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}</h4>
            <Link to={locacion === '/login' ? "/sign-up" : '/login'} className="text-blue-600 pl-2">
                {locacion === '/login' ? 'Regístrate' : 'Inicia sesión'}
            </Link>
        </div>
    )
}

export default EnlaceAutenticacion
