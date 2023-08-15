import React from "react"
import Header from "./Header"
import Course from "./Course"
import Total from "./Total"
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const newValue = {name:"Redux",exercises:11,id:4}
    course.parts.push(newValue)


  return(  <>  
  <Header header = {course.name} />
   <Course course={course.parts} /> 
   <Total total= {course.parts} />
  </>
)

}

export default App