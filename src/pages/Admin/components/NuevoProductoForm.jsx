import { useState, } from "react";
import { useLocation, useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import useNuevoProducto from "../pages/NuevoProducto/hooks/useNuevoProducto";
import ContainerProductImage from "../pages/NuevoProducto/components/ContainerProductImage";
import RichTextProduct from "../pages/NuevoProducto/components/RichTextProduct";
import { categoriasProductos } from "../../../static/data";
const NuevoProductoForm = () => {
    const {
        handleSubmit,
        name, setName,
        categoria, setCategoria,
        precioDescuento, setPrecioDescuento,
        precioOriginal, setPrecio,
        restantes, setRestantes,
    } = useNuevoProducto()
    const location = useLocation()
    const params = useParams()
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "Woman's Fashion" },
        { name: "Men's Fashion" },
        { name: 'Eléctricos' },
        { name: 'Computadoras y Tablets' },
        { name: 'Celulares' },
        { name: 'Mascotas y accesorios' },
        { name: 'Hogar, Cocina y Jardín' },
        { name: 'Videojuegos' },
        { name: 'Salud y Belleza' },
        { name: 'Juegos y juguetes' }
    ];
    const [selectedCities, setSelectedCities] = useState(null);
    return (
        <div className="bg-white shadow sm:rounded-lg px-6 py-10 min-h-[75vh]">

            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => handleSubmit(e, location.pathname, params.id)}>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="name">Nombre del producto:</label>
                    <InputText
                        id='name' type="text" className="p-inputtext-md w-full"
                        placeholder="Introduce el nombre del producto" value={name}
                        name="nombre"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="description">Descripción del producto:</label>
                    <RichTextProduct name="description" />
                </div>

                <blockquote className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="precio">Precio del producto:</label>
                        <InputNumber mode="currency" currency="USD" id="precio" value={precioOriginal} onValueChange={(e) => setPrecio(e.target.value)} showButtons min={1} name="precioOriginal" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="precioDescuento">Precio oferta del producto:</label>
                        <InputNumber mode="currency" currency="USD" id="precioDescuento" value={precioDescuento} onValueChange={(e) => setPrecioDescuento(e.target.value)} showButtons min={1} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="categoria">Categoria:</label>
                        <Dropdown value={!categoria.name ? { name: categoria } : categoria} onChange={(e) => setCategoria(e.target.value)} options={categoriasProductos} optionLabel="name"
                            placeholder="Selecciona una categoria" className="w-full" id="categoria" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="restantes">Restantes:</label>
                        <InputNumber id="restantes" value={restantes} onValueChange={(e) => setRestantes(e.target.value)} showButtons min={1} />
                    </div>
                </blockquote>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="number-input">Etiquetas:</label>
                    <MultiSelect value={selectedCity} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" display="chip"
                        placeholder="Selecciona 3 etiquetas" maxSelectedLabels={3} className="w-full " />
                </div>


                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="name">Imágenes del producto:</label>
                    <ContainerProductImage />
                </div>
                <div style={{
                    gridTemplateColumns: '45% 32% 20%'
                }} className="gap-4 grid">

                    <Button label={`${location.pathname.includes('nuevo-producto') ? 'Crear producto' : 'Gurdar cambios'}`} type="submit" />
                    <Button label="Cancelar" severity="danger" />
                    <Button label="Vista previa" severity="secondary" outlined />
                </div>
            </form>
        </div>

    )
}

export default NuevoProductoForm
