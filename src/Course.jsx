import React from 'react'

const Course = ({course}) => {
  return (
    <div> {course.map(value => 
    <p key = {value.id}>{value.name} {value.exercises} </p>)} </div>
  )
}

export default Course
