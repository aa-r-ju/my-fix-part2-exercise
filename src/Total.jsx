import React from 'react'

const Total = ({total}) => {
let sum = 0;
for(let i = 0; i<total.length;i++){
   let currentValue = total[i].exercises
    sum+=currentValue
}
  return (
    <div>
    <p> <b>Total of {sum} exercises</b> </p>
    </div>
  )
}

export default Total