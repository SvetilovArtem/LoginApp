import React from 'react'
import '../../../index.css'

interface UserProps {
  img: string,
  email: string,
  name: string
}

const User = ({ img, email, name }:UserProps) => {
  return (
    <div className='flex items-center gap-1 text-xl mb-16 text-sm'>
        <img src={img ? img : "https://klike.net/uploads/posts/2019-03/1551511804_3.jpg"} alt="" className='rounded-full w-10 h-10'/>
        <div >
            <div>{name ? name : 'Eric Frusciante'}</div>
            <a href={email ? email : 'mailto:eric@gmail.com'} className='text-neutral-500'>{email ? email : 'eric@gmail.com'}</a>
        </div>
    </div>
  )
}

export default User