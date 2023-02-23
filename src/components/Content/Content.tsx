import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../../pages/Users/Users'
import Form from '../Form/Form'

const Content = () => {
  return (
    <div className='content px-20 py-12'>
      <h1 className='text-5xl mb-14'>General Info</h1>
      <Routes>
        <Route path='/saveform' element={<Form />} />
        <Route path='/users' element={<Users />} />
      </Routes>    
    </div>
  )
}

export default Content