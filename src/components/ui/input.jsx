import React from 'react'

const Input = ({placeholder, type, value, onChange}) => {
  return (
    <div>
        <input
        className='w-32 p-4'
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default Input