import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    text?: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    children?: React.ReactNode
    onClickHandler?: () => void
}

const Button = ({text, type, onClickHandler, children}:ButtonProps) => {
  return (
    <button type={type} onClick={onClickHandler} className={styles.button}>{children}{text}</button>
  )
}

export default Button