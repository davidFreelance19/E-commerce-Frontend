import React from 'react'

const Button = ({ btnText, btnBottom, btnColorGreen }) => {
    return (
        <button type='button' className={`${btnBottom ? 'mx-auto' : ''} ${btnColorGreen ? 'bg-green-500' : ''} 
                            bg-red-500 p-4 text-white font-semibold max-w-[250px] rounded`}>
            {btnText}
        </button>
    )
}

export default Button
