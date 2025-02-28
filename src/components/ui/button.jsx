import React from 'react'

const Button = ({title, type, className}) => {
  return (
    <div>
        <button type={type} className={className}>
            {title}
        </button>
    </div>
  )
}

export default Button