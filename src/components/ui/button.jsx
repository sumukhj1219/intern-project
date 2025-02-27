import React from 'react'

const Button = ({title, color, type}) => {
  return (
    <div>
        <button type={type} className={`p-4 bg-black text-white font-semibold rounded-md`}>
            {title}
        </button>
    </div>
  )
}

export default Button