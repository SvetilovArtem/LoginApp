import React from 'react'
import '../../../index.css'

const User = () => {
  return (
    <div className='flex items-center gap-1 text-xl mb-16 text-sm'>
        <img src="https://klike.net/uploads/posts/2019-03/1551511804_3.jpg" alt="" className='rounded-full w-10 h-10'/>
        <div >
            <div>Eric Frusciante</div>
            <a href='mailto:eric@gmail.com' className='text-neutral-500'>eric@gmail.com</a>
        </div>
    </div>
  )
}

export default User