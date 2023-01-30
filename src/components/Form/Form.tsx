import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseApp, saveUserToFirebaseHandler } from '../../firebaseConfig/firebase'
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
  const about = useSelector((state:RootState) => state.user.about)
  const dispatch:AppDispatch = useDispatch()

  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  let user = {
    firstName: firstName,
    lastName: lastName,
    city: city,
    about: about,
    phone: phone
  }

  const [errors, setErrors] = useState(true)

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
  useEffect(() => {
    firstNameError || lastNameError || cityError || phoneError ? setErrors(true) : setErrors(false)
    console.log(FirebaseApp)
  },[firstNameError, lastNameError, cityError, phoneError])

  return (
    <form className={styles.form} onSubmit={() => {}}>
        <div className='flex justify-between'>
            <Field type='text' name='firstName' label='First Name' value={firstName} onChangeHandler={setValue} error={firstNameError} setError={setFirstNameError} />
            <Field type='text' name='lastName' label='Last Name' value={lastName} onChangeHandler={setValue} error={lastNameError} setError={setLastNameError} />
        </div>
        <Field type='text' name='city' label='City' value={city} onChangeHandler={setValue} error={cityError} setError={setCityError} />
        <TextArea label='About' name='about' />
        <PhoneField value={phone} onChangeHandler={setValue} error={phoneError} setError={setPhoneError} />
        <div className={errors ? styles.disabledButton : styles.saveButton} onClick={(e) => {
          e.preventDefault()
          saveUserToFirebaseHandler(user)
        }}>
            <Button type='submit' text='Save' disabled={errors} />
        </div>
    </form>
  )
}

export default Form