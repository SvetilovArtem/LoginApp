import React from 'react'
import SvgIconCreator from '../../icons/SvgIconCreator'
import User from './User/User'

const Sidebar = () => {
  return (
    <div className='max-w-xs p-4 sidebar'>
        <User />
        <div className='flex gap-2 items-center bg-gray-300 w-11/12'>
            <SvgIconCreator type='mech' />
            <span>General</span>
        </div>
    </div>
  )
}

export default Sidebar