import React, { useState } from 'react'
import User from './User/User'
import './Sidebar.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SidebarItem from './SidebarItem/SidebarItem'

const Sidebar = () => {
  const img = useSelector((state:RootState) => state.user.userImg)
  const email = useSelector((state:RootState) => state.user.userEmail)
  const name = useSelector((state:RootState) => state.user.userFullName)

  const [active, setActive] = useState('General')

  const items = [
    {title: 'General', to: '/general/saveform'},
    {title: 'Users', to: '/general/users'}
  ]
  const onActiveItem = (title:string) => {
    setActive(title)
  }
  return (
    <div className='max-w-xs sidebar bg-white'>
        <User img={img} email={email} name={name} />
        {items.map(item => <SidebarItem key={item.title} title={item.title} to={item.to} active={active} onClickHandler={() => onActiveItem(item.title)} />)}
    </div>
  )
}

export default Sidebar