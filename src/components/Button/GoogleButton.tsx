import React from 'react'
import SvgIconCreator from '../../icons/SvgIconCreator'
import './GoogleButton.scss'

interface GoogleButtonProps {
  onClickHandler: () => void
}

const GoogleButton = ({ onClickHandler }:GoogleButtonProps) => {
  return (
    <div 
      className='flex items-center h-10 w-50 px-2 bg-white googleButton border border-zinc-300 cursor-pointer'
      onClick={onClickHandler}>
        <SvgIconCreator type='google' />
        <span>Sign in with Google</span>
    </div>
  )
}

export default GoogleButton