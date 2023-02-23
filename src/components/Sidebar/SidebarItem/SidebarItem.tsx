import React from 'react'
import { NavLink } from 'react-router-dom'
import SvgIconCreator from '../../../icons/SvgIconCreator'

import styles from './SidebarItem.module.scss'

interface ISidebarItemProps {
    title: string,
    to: string,
    onClickHandler: (e:string) => void,
    active: string
}

const SidebarItem = ({ title, to, onClickHandler, active }:ISidebarItemProps) => {
  return (
    <NavLink to={to} onClick={() => onClickHandler(title)} className={active === title ? styles.sidebarItem + ' ' + styles.active : styles.sidebarItem}>
        <SvgIconCreator type='mech' />
        <span className='text-slate-600'>{title}</span>
    </NavLink>
  )
}

export default SidebarItem