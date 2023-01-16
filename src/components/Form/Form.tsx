import React from 'react'
import '../../index.css'
import Button from '../Button/Button'
import Field from '../Field/Field'
import TextArea from '../TextArea/TextArea'

const Form = () => {
  return (
    <form className='flex flex-col max-w-md' onSubmit={() => {}}>
        <div className='flex justify-between max-w-md gap-1'>
            <Field type='text' name='firstName' label='First Name' />
            <Field type='text' name='lastName' label='Last Name' />
        </div>
        <Field type='text' name='city' label='City' />
        <TextArea label='About' name='about' />
        <Field type='tel' name='phone' label='Phone' />
        <div className='bg-black text-white rounded-[7px] p-3'>
            <Button type='submit' text='Save' />
        </div>
    </form>
  )
}

export default Form