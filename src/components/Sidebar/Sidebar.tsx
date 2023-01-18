import React from 'react'
import SvgIconCreator from '../../icons/SvgIconCreator'
import User from './User/User'
import './Sidebar.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Sidebar = () => {
  const img = useSelector((state:RootState) => state.user.userImg)
  const email = useSelector((state:RootState) => state.user.userEmail)
  const name = useSelector((state:RootState) => state.user.userFullName)
  return (
    <div className='max-w-xs p-4 sidebar bg-white'>
        <User img={img} email={email} name={name} />
        <div className='flex gap-2 items-center bg-gray-100 w-11/12 py-1 px-4 rounded-[7px]'>
            <SvgIconCreator type='mech' />
            <span className='text-slate-600'>General</span>
        </div>
    </div>
  )
}

export default Sidebar