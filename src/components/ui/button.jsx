import React from 'react'

const Button = ({title, color, type, className}) => {
  return (
    <div>
        <button type={type} className={className}>
            {title}
        </button>
    </div>
  )
}

export default Button