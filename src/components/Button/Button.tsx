import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    text?: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    children?: React.ReactNode
    onClickHandler?: () => void,
    disabled: boolean
}

const Button = ({text, type, onClickHandler, children, disabled}:ButtonProps) => {
  return (
    <button type={type} onClick={onClickHandler} disabled={disabled} className={styles.button}>{children}{text}</button>
  )
}

export default Button