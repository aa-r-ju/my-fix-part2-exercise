import React from 'react'

const Course = ({course}) => {
    console.log('hello')

     return (
    <div> {course.map((item,index) => 
    <p key = {index}>{item.name} {item.exercises}</p>)} </div>
  )
}

export default Course
