import React from 'react'

const SectionServices = ({ icon, textHeading, textInfo, color }) => {
    return (
        <div className={`${color ? 'bg-red-500 text-white' : ''} rounded hover:cursor-pointer flex flex-col justify-center items-center gap-3 p-6 border`}>
            <img src={icon} alt={`${icon}`} />
            <h2 className='uppercase text-2xl font-bold text-center'>{textHeading}</h2>
            <p className='text-center text-md'>{textInfo}</p>
        </div>
    )
}

export default SectionServices
