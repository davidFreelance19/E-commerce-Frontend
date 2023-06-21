import { useState } from "react"
import { RxAvatar } from "react-icons/rx";
import clienteAxios from "../../../../config/clienteAxios";
const AdminNuevoProducto = () => {

    const [files, setFiles] = useState([])
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')   
    const [precioOriginal, setPrecio] = useState(0)
    const [precioDescuento, setPrecioDescuento] = useState(0)
    const [restantes, setRestantes] = useState(0)
    const handleFileInputChange = (e) => {
        e.preventDefault()
        let images = Array.from(e.target.files);
        setFiles((prevImages) => [...prevImages, ...images]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // Agregar archivo al formulario
        files.forEach((image) => {
            formData.append("files", image); 
        });
        formData.append("nombre", name);
        formData.append("description", descripcion);
        formData.append("categoria", categoria);
        formData.append("precioOriginal", precioOriginal);
        formData.append("precioDescuento", precioDescuento);
        formData.append("restantes", restantes);
        try {
            const token = localStorage.getItem("token");
            if (!token) return;
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data", // Tipo de cont enido para envío de archivos
                    Authorization: `Bearer ${token}`, // Encabezado de autorización si es necesario
                },
            };
            await clienteAxios.post(`/productos`, formData, config);
            setCategoria('')
            setDescripcion('')
            setName('')
            setPrecio(0)
            setPrecioDescuento(0)
            setRestantes(0)
            setFiles([])
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label
                                    htmlFor="nombre"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nombre:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="descripcion"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Descripcion:
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        rows="10" cols="50"
                                        type="text"
                                        name="descripcion"
                                        required
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="categoria"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Categoria
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type="text"
                                        name="categoria"
                                        required
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="precio"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Precio
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        name="precio"
                                        type="number"
                                        required
                                        value={precioOriginal}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>


                            <div>
                                <label
                                    htmlFor="precioDescuento"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    precioDescuento
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        name="precioDescuento"
                                        type="number"
                                        required
                                        value={precioDescuento}
                                        onChange={(e) => setPrecioDescuento(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>


                            <div>
                                <label
                                    htmlFor="restantes"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    restantes
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        name="restantes"
                                        type="number"
                                        required
                                        value={restantes}
                                        onChange={(e) => setRestantes(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="avatar"
                                    className="block text-sm font-medium text-gray-700"
                                ></label>
                                <div className="mt-2 flex items-center">
                                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden">
                                        {avatar ? (
                                            <img
                                                src={URL.createObjectURL(avatar)}
                                                alt="avatar"
                                                className="h-full w-full object-cover rounded-full"
                                            />
                                        ) : (
                                            <RxAvatar className="h-12 w-12" />
                                        )}
                                    </span>
                                    <label
                                        htmlFor="file-input"
                                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <span>Subir imágen</span>
                                        <input
                                            type="file"
                                            name="file"
                                            id="file-input"
                                            accept=".jpg,.jpeg,.png"
                                            multiple
                                            onChange={e => handleFileInputChange(e)}
                                            className="sr-only"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Nuevo Producto
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>)
}

export default AdminNuevoProducto
