import React from 'react'

interface FieldProps {
    type: string,
    label: string,
    name: string,
    onChangeHandler: (e:any, name: string) => void,
    value: string
}

const Field = ({type, label, name, onChangeHandler, value}:FieldProps) => {

  return (
    <div className='flex flex-col mb-3'>
        <label htmlFor={name} style={{fontSize: '14px'}}>{label}</label>
        <input 
          type={type} 
          value={value} 
          name={name} 
          className='rounded-[7px] border border-gray-300 h-8 px-2' 
          onChange={(e) => {
            onChangeHandler(e, name)
          }}
          />
    </div>
  )
}

export default Field