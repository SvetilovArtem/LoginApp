import React, { useState } from 'react'

import styles from './Field.module.scss'

interface FieldProps {
    type: string,
    label: string,
    name: string,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>, name: string) => void,
    value: string
}

const Field = ({type, label, name, onChangeHandler, value}:FieldProps) => {

  const [error, setError] = useState(false)

  const validate = (e:any) => {

    const letters = RegExp(/[^A-zА-я]/)

    if(e.currentTarget.name === 'firstName') {
      if(letters.test(e.currentTarget.value)  || e.currentTarget.value.length <= 1) {
        setError(true)
      } else {
        setError(false)
      }
    }
    if(e.currentTarget.name === 'lastName') {
      if(letters.test(e.currentTarget.value)  || e.currentTarget.value.length <= 1) {
        setError(true)
      } else {
        setError(false)
      }
    }
    if(e.currentTarget.name === 'city') {
      if(letters.test(e.currentTarget.value)  || e.currentTarget.value.length <= 1) {
        setError(true)
      } else {
        setError(false)
      }
    }

  }

  return (
    <div className={styles.field}>
        <label 
          htmlFor={name} 
          style={{fontSize: '14px'}} 
          className={error ? styles.errorLabel : styles.label}>{label}</label>
       
        <input 
          type={type} 
          value={value} 
          name={name} 
          maxLength={12}
          className={error ? styles.error : styles.input} 
          onBlur={e => validate(e)}
          onChange={(e) => {
            onChangeHandler(e, name)
            validate(e)
          }}
          />
    </div>
  )
}

export default Field