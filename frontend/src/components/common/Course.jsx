import React from 'react'
import '../../styles/Course.css'

const Course = ({title, description}) => {
  return (
    <div className='course-card'>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Course