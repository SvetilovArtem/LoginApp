import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { setAbout } from '../../redux/userSlice'

interface FieldProps {
    label: string,
    name: string
}

const TextArea = ({label, name}:FieldProps) => {
  const value = useSelector((state:RootState) => state.user.about)
  const dispatch:AppDispatch = useDispatch()

  const setValue = (e:any) => {
    dispatch(setAbout(e.currentTarget.value))
  }

  return (
    <div className='flex flex-col mb-3'>
        <label htmlFor={name} style={{fontSize: '14px'}}>{label}</label>
        <textarea 
          name={name} 
          className='rounded-[7px] border border-gray-300 h-8 px-2' 
          style={{height: '120px'}}
          value={value}
          onChange={setValue}
          ></textarea>
    </div>
  )
}

export default TextArea