import React from 'react'
import { useSelector } from 'react-redux'
import { removeUserFromFirebaseHandler } from '../../firebaseConfig/firebase'
import { AppDispatch, RootState } from '../../redux/store'
import { setUsersListFromFirebase } from '../../redux/userSlice'
import {User} from '../../types/User'

import styles from './UserItem.module.scss'

interface IUserItemProps {
    firstName: string,
    lastName: string,
    city: string,
    about: string,
    phone: string,
    index: number,
    id?: string,
    dispatch: AppDispatch,
    users: User[]
}

const UserItem = ({ firstName, lastName, city, about, phone, index, id, dispatch, users }:IUserItemProps) => {
  const usersListFromFirebase = useSelector((state:RootState) => state.user.usersListFromFirebase)
  return (
    <div className={styles.userItem} >
        <div className={styles.name}>
            <span className={styles.number}>{index}</span>
            <span>{firstName} </span>
            <span>{lastName}</span>
        </div>
        <div>{city}</div>
        <div>{about}</div>
        <div>{phone} </div>

        <button className={styles.removeButton} onClick={() => {
          if(id) removeUserFromFirebaseHandler(id)
          dispatch(setUsersListFromFirebase(users.filter((user: any) => id !== user.id)))
        }}>Remove</button>
    </div>
  )
}

export default UserItem