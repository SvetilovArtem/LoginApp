import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import { signOutHandler } from '../../firebaseConfig/firebase'
import { AppDispatch } from '../../redux/store'
import styles from './General.module.scss'


const General = () => {
  const navigate = useNavigate()

  const dispatch:AppDispatch = useDispatch()

  const onSignOutHandler = () => {
    signOutHandler(dispatch, navigate)
  }

  return (
    <div className='flex font-inter general p-4'>
      <Sidebar />
      <Content />
      <div className={styles.signoutButton} onClick={onSignOutHandler}>
        <Button type='button' text='Sign out' disabled={false} />
      </div>
    </div>
  )
}

export default General