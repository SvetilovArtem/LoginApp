import React from 'react'

import styles from './Field.module.scss'

interface FieldProps {
    type: string,
    label: string,
    name: string,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>, name: string) => void,
    value: string,
    error: boolean,
    setError: (e:boolean) => void
}

const Field = ({type, label, name, onChangeHandler, value, error, setError}:FieldProps) => {

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
          data-testid="field-element"
          />
    </div>
  )
}

export default Field