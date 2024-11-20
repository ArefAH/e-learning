import React from 'react'
import Navbar from '../components/common/Navbar'
import Plus from './../assets/icons/plus.svg'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="courses">
      <h2>You are not enrolled in any courses yet</h2>
    </div>
    <button className='add-button'><img src={Plus} alt="Plus Icon" /></button>
    </>
  )
}

export default Home