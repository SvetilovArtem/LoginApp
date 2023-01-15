import React from 'react'
import Button from '../components/Button/Button'
import SvgIconCreator from '../icons/SvgIconCreator'
import '../index.css'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-61 mt-56 mb-56 mx-auto'>
        <h1 className='text-5xl'>Login App</h1>
        <a href="#" className='mb-12'>by SvetilovArtem</a>
        <div className='googleButton border-solid border-2 border-b-zinc-700 rounded-lg text-base w-px-190 max-h-px-40 p-1'>
          <Button text='Sign in with Google' type='button'>
              <SvgIconCreator type='google' />
          </Button>
        </div>
        <a href='#' className="absolute top-3 right-6">
          <SvgIconCreator type='github' />
        </a>
    </div>
  )
}

export default Login