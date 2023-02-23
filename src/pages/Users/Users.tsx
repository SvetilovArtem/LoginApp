import React from 'react'
import { getUsers } from '../../firebaseConfig/firebase'

const Users = () => {
    console.log(getUsers().then(resp => console.log(JSON.stringify(resp))))
  return (
    <div>Users</div>
  )
}

export default Users