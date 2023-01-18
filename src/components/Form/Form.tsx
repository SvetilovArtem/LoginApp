import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { firestore } from '../../firebaseConfig/firebase'
import { AppDispatch, RootState } from '../../redux/store'
import { setCity, setFirstName, setLastName, setPhone } from '../../redux/userSlice'
import Button from '../Button/Button'
import Field from '../Field/Field'
import TextArea from '../TextArea/TextArea'

const Form = () => {
  const firstName = useSelector((state:RootState) => state.user.firstName)
  const lastName = useSelector((state:RootState) => state.user.lastName)
  const city = useSelector((state:RootState) => state.user.city)
  const phone = useSelector((state:RootState) => state.user.phone)
  const dispatch:AppDispatch = useDispatch()

  const setValue = (e:any, name: string) => {
    e.preventDefault()
    if(name === 'firstName') {
      dispatch(setFirstName(e.currentTarget.value))
    } else if(name === 'lastName') {
      dispatch(setLastName(e.currentTarget.value))
    } else if(name === 'city') {
      dispatch(setCity(e.currentTarget.value))
    } else if(name === 'phone') {
      dispatch(setPhone(e.currentTarget.value))
    }    
  }

  return (
    <form className='flex flex-col w-auto bg-white p-4 max-w-lg' onSubmit={() => {}}>
        <div className='flex justify-between'>
            <Field type='text' name='firstName' label='First Name' value={firstName} onChangeHandler={setValue} />
            <Field type='text' name='lastName' label='Last Name' value={lastName} onChangeHandler={setValue} />
        </div>
        <Field type='text' name='city' label='City' value={city} onChangeHandler={setValue} />
        <TextArea label='About' name='about' />
        <Field type='tel' name='phone' label='Phone' value={phone} onChangeHandler={setValue} />
        <div className='bg-black text-white rounded-[7px] p-3' onClick={(e) => {
          e.preventDefault()
          console.log()

          }}>
            <Button type='submit' text='Save' />
        </div>
    </form>
  )
}

export default Form