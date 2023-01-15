import React from 'react'
import Button from '../components/Button/Button'
import SvgIconCreator from '../icons/SvgIconCreator'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.loginPage}>
        <h1 className={styles.title}>Login App</h1>
        <a href="#" className={styles.link}>by SvetilovArtem</a>
        <div className={styles.button}>
          <Button text='Sign in with Google' type='button'>
              <SvgIconCreator type='google' />
          </Button>
        </div>
        <a href='#' className={styles.githubIcon}>
          <SvgIconCreator type='github' />
        </a>
    </div>
  )
}

export default Login