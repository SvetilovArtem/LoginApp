import React from 'react'

interface FieldProps {
    label: string,
    name: string
}

const TextArea = ({label, name}:FieldProps) => {
  return (
    <div className='flex flex-col mb-3'>
        <label htmlFor={name} style={{fontSize: '11px'}}>{label}</label>
        <textarea name={name} className='rounded-[7px] border border-gray-300 h-8' style={{height: '120px'}}></textarea>
    </div>
  )
}

export default TextArea