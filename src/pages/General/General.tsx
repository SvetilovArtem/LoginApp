import React from 'react'
import Content from '../../components/Content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import './General.module.scss'


const General = () => {
  return (
    <div className='flex font-inter general'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default General