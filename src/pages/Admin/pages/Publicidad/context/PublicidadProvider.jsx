import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import clienteAxios from "../../../../../../config/clienteAxios";
const PublicidadContext = createContext();

const PublicidadProvider = ({ children }) => {

    const { user, } = useSelector(state => state.user)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [colorHEX, setColorHEX] = useState('000');
    const [imgLogo, setImgLogo] = useState([])
    const [imgHero, setImgHero] = useState([])
    const token = localStorage.getItem('token')
    const handleSubmit = async (e, location, params) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if ([name, descripcion, colorHEX, imgLogo, imgHero].includes('')) return
        const formData = new FormData();
        // Agregar archivo al formulario
        imgLogo.forEach((image) => {
            formData.append('imgLogo', image);
        });
        imgHero.forEach((image) => {
            formData.append('imgHero', image);
        });
        formData.append("nombre", name);
        formData.append("descripcion", descripcion);
        formData.append('theme', colorHEX);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data", // Tipo de cont enido para envío de archivos
                Authorization: `Bearer ${token}`, // Encabezado de autorización si es necesario
            },
        };
        if (location.includes('nuevo-publicidad')) {
            try {
                if (!token) return;
                await clienteAxios.post(`/publicidad`, formData, config);
                setName('')
                setColorHEX('000')
                setDescripcion('')
                setImgHero([])
                setImgLogo([])
                return navigate(`/e-shop/dashboard/${user._id}`)
    
            } catch (error) {
                console.log(error);
            }
        }else {
            try {
                const { data } = await clienteAxios.put(
                    `/publicidad/${params}`,
                    formData,
                    config
                );
                setName('')
                setColorHEX('000')
                setDescripcion('')
                setImgHero([])
                setImgLogo([])
                return navigate(`/e-shop/dashboard/${user._id}`)
            } catch (error) {
                console.log(error)
            }
        }

    }
    const obtenerPublicidadUsuario = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get("/publicidad", config);

            return data
        } catch (error) {
            console.log(error);
        }
    };

    const eliminarPublicidad = async (id) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            await clienteAxios.delete(`/publicidad/${id}`, config);

            return navigate(`/e-shop/dashboard/${user._id}/product/mis-productos`)
        } catch (error) {
            console.log(error);
        }
    };
    const obtenerPublicidad = async (params) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get(`/publicidad/${params}`, config)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    const pasarDatosFormulario = (data) => {
        setName(data.nombre)
        setColorHEX(data.theme)
        setDescripcion(data.descripcion)
        setImgHero(data.imgHero)
        setImgLogo(data.imgLogo)
    }
    return (
        <PublicidadContext.Provider value={{ handleSubmit, obtenerPublicidadUsuario, obtenerPublicidad, eliminarPublicidad, pasarDatosFormulario, name, setName, descripcion, setDescripcion, colorHEX, setColorHEX, imgHero, setImgHero, imgLogo, setImgLogo }}>
            {children}
        </PublicidadContext.Provider>
    )
}
export { PublicidadProvider }
export default PublicidadContext
