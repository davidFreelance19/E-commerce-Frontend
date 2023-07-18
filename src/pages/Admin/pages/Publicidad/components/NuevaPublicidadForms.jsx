import { useLocation, useParams } from "react-router-dom";
import { useState, } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { ColorPicker } from 'primereact/colorpicker';
import { FileUpload } from 'primereact/fileupload';

import usePublicidad from "../hooks/usePublicidad";
import HeroPublicidad from "../../../../../components/e-shop/HeroPublicidad";
import ItemImagenes from "./ItemImagenes";
const NuevaPublicidadForms = () => {
    const params = useParams()
    const location = useLocation()
    const [visible, setVisible] = useState(false);
    const { handleSubmit, name, setName, descripcion, setDescripcion, colorHEX, setColorHEX, imgHero, setImgHero, imgLogo, setImgLogo } = usePublicidad()

    const headerTemplate = (options) => {
        const { className, chooseButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
            </div>
        );
    };

    return (
        <div className="bg-white shadow sm:rounded-lg px-6 py-10 min-h-[75vh]">

            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => handleSubmit(e, location.pathname, params.id)}>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="nombre">Nombre de la tienda:</label>
                    <InputText
                        id='nombre' type="text" className="p-inputtext-md w-full"
                        placeholder="Ej. Apple, GameFactor, otros..." value={name}
                        name="nombre"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="descripcion">Descripción:</label>
                    <InputText
                        id='descripcion' type="text" className="p-inputtext-md w-full"
                        placeholder="Ej. Productos con 10% de descuento" value={descripcion}
                        name="descripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="cp-hex" className="font-semibold text-sm">
                        Eliga el tema de tu publicidad:
                    </label>

                    <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} />
                    <p>#{colorHEX}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="imgLogo">Logo de la tienda:</label>
                    <FileUpload
                        name="imgLogo" url={'/api/upload'} accept="image/*" itemTemplate={<ItemImagenes files={imgLogo} />}
                        emptyTemplate={imgLogo.length > 0 ? <ItemImagenes files={imgLogo} /> : <p className="m-0">Arrastra y sube tu imagen aquí.</p>}
                        headerTemplate={headerTemplate} onSelect={(e) => setImgLogo(e.files)} maxFileSize={10000000}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="imgHero">Imágen de encabezado:</label>
                    <FileUpload
                        name="imgHero" url={'/api/upload'} accept="image/*" itemTemplate={<ItemImagenes files={imgHero} />}
                        emptyTemplate={imgHero.length > 0 ? <ItemImagenes files={imgHero} /> : <p className="m-0">Arrastra y sube tu imagen aquí.</p>}
                        onSelect={(e) => setImgHero(e.files)} headerTemplate={headerTemplate} maxFileSize={10000000} />
                </div>

                <div style={{
                    gridTemplateColumns: '45% 32% 20%'
                }} className="gap-4 grid">

                    <Button label={`${location.pathname.includes('nuevo-publicidad') ? 'Crear publicidad' : 'Gurdar cambios'}`} type="submit" />
                    <Button label="Cancelar" severity="danger" type="button" />
                    <Button label="Vista previa" severity="secondary" outlined onClick={() => setVisible(true)} type="button" />
                </div>
            </form>
            <div className="card flex justify-content-center">
                <Dialog header="Vista previa de la publicidad:" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <HeroPublicidad tienda={name} descripcion={descripcion}
                        icon={imgLogo[0]?.objectURL ? imgLogo[0]?.objectURL : imgLogo[0]}
                        imgHero={imgHero[0]?.objectURL ? imgHero[0]?.objectURL : imgHero[0]}
                        bgPublicidad={colorHEX} previa={location.pathname.includes('nuevo-publicidad') ? true : false} />
                </Dialog>
            </div>

        </div>
    )
}

export default NuevaPublicidadForms
