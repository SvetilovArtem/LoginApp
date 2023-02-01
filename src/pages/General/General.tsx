import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import { signOutHandler } from '../../firebaseConfig/firebase'
import { AppDispatch, RootState } from '../../redux/store'
import styles from './General.module.scss'


const General = () => {
  const isAuth = useSelector((state:RootState) => state.user.isAuth)
  const navigate = useNavigate()

  const dispatch:AppDispatch = useDispatch()

  const onSignOutHandler = () => {
    signOutHandler(dispatch, navigate, isAuth)
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