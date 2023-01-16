import React from 'react'
import '../../index.css'

interface FieldProps {
    type: string,
    label: string,
    name: string
}

const Field = ({type, label, name}:FieldProps) => {
  return (
    <div className='flex flex-col mb-3'>
        <label htmlFor={name} style={{fontSize: '11px'}}>{label}</label>
        <input type={type} name={name} className='rounded-[7px] border border-gray-300 h-8' />
    </div>
  )
}

export default Field