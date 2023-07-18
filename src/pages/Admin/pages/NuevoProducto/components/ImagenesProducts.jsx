import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
const ImagenesProducts = ({ files, filesHelper, handleCancelImage }) => {
    return (
        <blockquote className='w-full grid gap-5'>
            {
                [files, filesHelper].flat().map(file => (
                    <div className="grid place-content-center px-10 w-full border-[1px] py-4" key={file.name ? file.name : file} style={{
                        gridTemplateColumns: '25% 50% 25%'
                    }}>
                        <img alt={file.name} role="presentation"
                            src={file.objectURL ? file.objectURL : `${import.meta.env.VITE_BACKEND_URL}/${file}`}
                            className='max-w-[140px] max-h-[100px] mx-auto' />
                        <span className="flex flex-col gap-2 max-w-[450px] text-start ">
                            {file.objectURL ? file.name : file}
                            <small>{new Date().toLocaleDateString()}</small>
                        </span>
                        <div className='flex flex-col items-end justify-center'>
                            <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger flex" onClick={() => handleCancelImage(file)} />
                        </div>

                    </div>
                ))
            }
        </blockquote>
    )
}

export default ImagenesProducts
