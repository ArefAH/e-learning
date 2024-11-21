import React from 'react'
import Logo from './../../assets/images/logo.png'
import Button from '../base/Button'
import {useNavigate} from 'react-router-dom'
import '../../styles/Navbar.css'

const Navbar = ({home}) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    window.localStorage.clear();
    navigate('/')
  }
  return (
    <div className='nav-bar'>
      <img onClick={()=>{navigate(`/${home}`)}} src={Logo} alt="Logo" />
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}

export default Navbar