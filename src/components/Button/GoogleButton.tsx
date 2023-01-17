import React from 'react'
import SvgIconCreator from '../../icons/SvgIconCreator'
import './GoogleButton.scss'

const GoogleButton = () => {
  return (
    <div className='flex items-center h-10 w-50 px-2 bg-white googleButton border border-zinc-300 cursor-pointer'>
        <SvgIconCreator type='google' />
        <span>Sign in with Google</span>
    </div>
  )
}

export default GoogleButton