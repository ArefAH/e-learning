import React from 'react'
import '../../styles/Course.css'

const Course = ({title, description, onClick}) => {
  return (
    <div className='course-card' onClick={onClick}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Course