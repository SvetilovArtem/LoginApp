import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import { auth, provider, signOutHandler } from '../../firebaseConfig/firebase'
import { AppDispatch, RootState } from '../../redux/store'
import { setIsAuth, setUserEmail, setUserFullName, setUserImg } from '../../redux/userSlice'
import styles from './General.module.scss'


const General = () => {
  const navigate = useNavigate()

  const dispatch:AppDispatch = useDispatch()
  const isAuth = useSelector((state:RootState) => state.user.isAuth)

  const onSignOutHandler = () => {
    signOutHandler(dispatch, navigate)
  }

  useEffect(() => {
    if(!isAuth)
      signInWithPopup(auth, provider)
        .then(resp => {
          dispatch(setUserImg(resp.user.photoURL))
          dispatch(setUserEmail(resp.user.email))
          dispatch(setIsAuth(resp.user.emailVerified))
          dispatch(setUserFullName(resp.user.displayName))
          navigate('/general')
    })
  }, [dispatch, isAuth, navigate])

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