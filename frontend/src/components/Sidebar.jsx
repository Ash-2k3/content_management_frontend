import React from 'react'
import './Sidebar.css'
import { RiHome2Line } from 'react-icons/ri'
import { VscTools } from 'react-icons/vsc'
import { VscEye } from 'react-icons/vsc'
import { PiUserSwitchLight } from 'react-icons/pi'
import { PiLightbulbFilament } from 'react-icons/pi'
import { IoSettingsOutline } from 'react-icons/io5'

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <RiHome2Line className='iconClass' />
          Home
        </li>
        <li>
          <VscTools className='iconClass' />
          Tools
        </li>
        <li>
          <VscEye className='iconClass'/>
          Campaign Builder
        </li>
        <li>
          <PiUserSwitchLight className='iconClass'/>
          CMS
        </li>
        <li>
          <PiLightbulbFilament className='iconClass'/>
          Ideation
        </li>
        <li className="settings">
          <IoSettingsOutline className='iconClass'/>
          Settings
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
