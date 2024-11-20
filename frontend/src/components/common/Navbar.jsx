import React from 'react'
import Logo from './../../assets/images/logo.png'
import Button from '../base/Button'
import '../../styles/Navbar.css'

const Navbar = () => {

  return (
    <div className='nav-bar'>
      <img src={Logo} alt="Logo" />
      <Button>Sign Out</Button>
    </div>
  )
}

export default Navbar