import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useNuevoProducto from "../hooks/useNuevoProducto";
import { Editor } from "primereact/editor";
export default function RichTextProduct() {
    const location = useLocation()
    const { descripcion, setDescripcion, } = useNuevoProducto()
    const renderHeader = () => {
        return (
            <></>
        );
    };
    const header = renderHeader();
    useEffect(() => {
        if (!location.pathname.includes('editar-producto')) {
            setDescripcion('')
        }
    }, [])
    return (
        <>
            <div className="card">
                <Editor
                    value={descripcion}
                    onTextChange={(e) => setDescripcion(e.htmlValue)}
                    headerTemplate={header}
                    style={{ height: '280px' }}
                    placeholder="Añade todas las descripciones del producto..."
                    modules={{
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }]
                        ]
                    }}
                />
            </div>
        </>

    )
}