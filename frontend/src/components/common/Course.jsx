import React from 'react'
import '../../styles/Course.css'

const Course = ({title, description}) => {
  return (
    <div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Course