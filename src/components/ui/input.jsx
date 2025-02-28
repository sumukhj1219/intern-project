import React from 'react'

const Input = ({placeholder, type, value, onChange, className}) => {
  return (
    <div>
        <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default Input