import React from 'react'
import Logo from './../../assets/images/logo.png'
import '../../styles/Navbar.css'

const Navbar = () => {

  return (
    <div className='nav-bar'>
      <img src={Logo} alt="Logo" />
      <ul>
        <p>Courses</p>
        <p>Announcements</p>
        <p>Assignments</p>
      </ul>
    </div>
  )
}

export default Navbar