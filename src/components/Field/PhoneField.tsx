import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import styles from './Field.module.scss'

interface PhoneFieldProps {
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>, name: string) => void,
    value: string
}

const PhoneField = ({ onChangeHandler, value}:PhoneFieldProps) => {

  const [error, setError] = useState(false)
  let inputValue

  const validateHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const number = RegExp(/[^0-9a-z\(\)\-\+\s]/i)
    if(number.test(e.currentTarget.value) || e.currentTarget.value.length <= 1) {
        setError(true)
    } else {
        setError(false)
    }
    inputValue = '+' + value
    console.log(inputValue)
  }

  return (
    <div className={styles.field}>
        <label 
          htmlFor='phone'
          style={{fontSize: '14px'}} 
          className={error ? styles.errorLabel : styles.label}>Phone</label>
        <MaskedInput 
          mask={['+', /[1-9]/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', '-', /\d/,  /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          className={error ? styles.error : styles.input}
          maxLength={18}
          type='tel' 
          value={inputValue} 
          name='phone'
          onBlur={e => validateHandler(e)}
          onChange={(e) => {
            onChangeHandler(e, 'phone')
            validateHandler(e)
          }}  />

    </div>
  )
}

export default PhoneField