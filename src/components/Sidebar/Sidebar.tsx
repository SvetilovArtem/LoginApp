import React from 'react'
import SvgIconCreator from '../../icons/SvgIconCreator'
import User from './User/User'

const Sidebar = () => {
  return (
    <div className='max-w-xs p-4 sidebar'>
        <User />
        <div className='flex gap-2 items-center bg-gray-100 w-11/12 p-1 rounded-[7px]'>
            <SvgIconCreator type='mech' />
            <span className='text-slate-600'>General</span>
        </div>
    </div>
  )
}

export default Sidebar