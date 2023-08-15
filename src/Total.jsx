import React from 'react'

const Total = ({total}) => {
const sum = total.reduce((accumulator,currentValue) =>{
    return accumulator + currentValue.exercises
},0)
  return (
    <div>
    <p> <b>Total of {sum}  exercises</b> </p>
    </div>
  )
}

export default Total