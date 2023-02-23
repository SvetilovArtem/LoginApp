import React from 'react'
import styles from './UserItem.module.scss'

interface IUserItemProps {
    firstName: string,
    lastName: string,
    city: string,
    about: string,
    phone: string,
    index: number
}

const UserItem = ({ firstName, lastName, city, about, phone, index }:IUserItemProps) => {
  return (
    <div className={styles.userItem}>
        <div className={styles.name}>
            <span>{index}) </span>
            <span>{firstName} </span>
            <span>{lastName}</span>
        </div>
        <div>{city}</div>
        <div>{about}</div>
        <a href="">{phone}</a>
    </div>
  )
}

export default UserItem