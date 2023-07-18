import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import clienteAxios from "../../../../../../config/clienteAxios";
import { useSelector } from "react-redux";
const NuevoProductoContext = createContext();
const NuevoProductoProvider = ({ children }) => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([])
    const [filesHelper, setFilesHelper] = useState([])
    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precioOriginal, setPrecio] = useState(0)
    const [precioDescuento, setPrecioDescuento] = useState(0)
    const [restantes, setRestantes] = useState(0)

    const { user, } = useSelector(state => state.user)

    const token = localStorage.getItem("token");

    const handleFileInputChange = (images) => {
        setFiles([...files, images]);
    };

    const handleSubmit = async (e, location, params) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if ([name, descripcion, categoria, precioOriginal, precioDescuento, restantes, files].includes('')) return
        const formData = new FormData();
        // Agregar archivo al formulario
        [files, filesHelper].flat().forEach((image) => {
            formData.append("files", image);
        });
        formData.append("nombre", name);
        formData.append("description", descripcion);
        formData.append("categoria", categoria.name ? categoria.name : categoria);
        formData.append("precioOriginal", precioOriginal);
        formData.append("precioDescuento", precioDescuento);
        formData.append("restantes", restantes);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data", // Tipo de cont enido para envío de archivos
                Authorization: `Bearer ${token}`, // Encabezado de autorización si es necesario
            },
        };
        if (location.includes('nuevo-producto')) {

            console.log(formData)
            try {
                if (!token) return;
                await clienteAxios.post(`/productos`, formData, config);
                setCategoria('')
                setDescripcion('')
                setName('')
                setPrecio(0)
                setPrecioDescuento(0)
                setRestantes(0)
                setFiles([])

                return navigate(`/e-shop/dashboard/${user._id}/product/mis-productos`)
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const { data } = await clienteAxios.put(
                    `/productos/${params}`,
                    formData,
                    config
                );
                setCategoria('')
                setDescripcion('')
                setName('')
                setPrecio(0)
                setPrecioDescuento(0)
                setRestantes(0)
                setFiles([])
                setFilesHelper([])
                return navigate(`/e-shop/dashboard/${user._id}/product/mis-productos`)
            } catch (error) {
                console.log(error)
            }
        }

    }
    const obtenerProductosUsuario = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get("/productos", config);

            return data
        } catch (error) {
            console.log(error);
        }
    };

    const eliminarProductoUsuario = async (id) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            await clienteAxios.delete(`/productos/${id}`, config);

            return navigate(`/e-shop/dashboard/${user._id}/product/mis-productos`)
        } catch (error) {
            console.log(error);
        }
    };

    const obtenerProducto = async (params) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await clienteAxios.get(`/productos/${params}`, config)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const pasarDatosFormulario = (data) => {

        setName(data.nombre)
        setDescripcion(data.description)
        setPrecio(data.precioOriginal)
        setPrecioDescuento(data.precioDescuento)
        setRestantes(data.restantes)
        setFiles(data.images)
        setCategoria(data.categoria)
    }

    return (
        <NuevoProductoContext.Provider
            value={{
                files, setFiles,
                filesHelper, setFilesHelper,
                name, setName,
                descripcion, setDescripcion,
                categoria, setCategoria,
                precioDescuento, setPrecioDescuento,
                precioOriginal, setPrecio,
                restantes, setRestantes,
                handleFileInputChange, handleSubmit,


                pasarDatosFormulario,
                obtenerProducto,
                obtenerProductosUsuario,
                eliminarProductoUsuario
            }}
        >
            {children}
        </NuevoProductoContext.Provider>
    );
}
export { NuevoProductoProvider };
export default NuevoProductoContext;