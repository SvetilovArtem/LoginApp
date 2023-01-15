import React from 'react'
import '../../../index.css'

const User = () => {
  return (
    <div className='flex items-center gap-1 text-xl mb-16'>
        <img src="https://klike.net/uploads/posts/2019-03/1551511804_3.jpg" alt="" className='rounded-full w-7 h-7'/>
        <div >
            <div>Eric Frusciante</div>
            <a href='mailto:eric@gmail.com' style={{color: '#707070'}}>eric@gmail.com</a>
        </div>
    </div>
  )
}

export default User