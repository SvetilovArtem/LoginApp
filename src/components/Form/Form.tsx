import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { setCity, setFirstName, setLastName, setPhone } from '../../redux/userSlice'
import Button from '../Button/Button'
import Field from '../Field/Field'
import PhoneField from '../Field/PhoneField'
import TextArea from '../TextArea/TextArea'
import styles from './Form.module.scss'

const Form = () => {
  const firstName = useSelector((state:RootState) => state.user.firstName)
  const lastName = useSelector((state:RootState) => state.user.lastName)
  const city = useSelector((state:RootState) => state.user.city)
  const phone = useSelector((state:RootState) => state.user.phone)
  const dispatch:AppDispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)

  const setValue = (e:React.ChangeEvent<HTMLInputElement>, name: string) => {
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
    <form className={styles.form} onSubmit={() => {}}>
        <div className='flex justify-between'>
            <Field type='text' name='firstName' label='First Name' value={firstName} onChangeHandler={setValue} />
            <Field type='text' name='lastName' label='Last Name' value={lastName} onChangeHandler={setValue} />
        </div>
        <Field type='text' name='city' label='City' value={city} onChangeHandler={setValue} />
        <TextArea label='About' name='about' />
        <PhoneField value={phone} onChangeHandler={setValue} />
        <div className={disabled ? styles.disabledButton : styles.saveButton} onClick={(e) => {
          e.preventDefault()

          }}>
            <Button type='submit' text='Save' disabled={disabled} />
        </div>
    </form>
  )
}

export default Form