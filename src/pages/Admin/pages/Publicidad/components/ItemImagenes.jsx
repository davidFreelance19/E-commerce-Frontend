import React from 'react'

const ItemImagenes = ({ files }) => {
  return (
    <blockquote className='w-full grid gap-5'>
            {
                files.map(file => (
                    <div className="grid place-content-center px-10 w-full border-[1px] py-4" key={file.name ? file.name : file} style={{
                        gridTemplateColumns: '25% 50% 25%'
                    }}>
                        <img alt={file.name} role="presentation"
                            src={file.objectURL ? file.objectURL : `${import.meta.env.VITE_BACKEND_URL}/${file}`}
                            className='max-w-[140px] max-h-[100px] mx-auto' />
                        <span className="flex flex-col gap-2 max-w-[450px] text-start justify-center">
                            {file.objectURL ? file.name : file}
                            <small>{new Date().toLocaleDateString()}</small>
                        </span>
                    </div>
                ))
            }
        </blockquote>
  )
}

export default ItemImagenes
