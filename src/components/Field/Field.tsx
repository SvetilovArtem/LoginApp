import React from 'react'

interface FieldProps {
    type: string,
    label: string,
    name: string
}

const Field = ({type, label, name}:FieldProps) => {
  return (
    <div className='flex flex-col mb-3'>
        <label htmlFor={name} style={{fontSize: '14px'}}>{label}</label>
        <input type={type} name={name} className='rounded-[7px] border border-gray-300 h-8 px-2' />
    </div>
  )
}

export default Field