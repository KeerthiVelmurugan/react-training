import React from 'react'

function DateObj() {
    let a;
    a = new Date();
    console.log(a)
  let  b = a.getDate()
  a.setDate(15)
    console.log(b)
    console.log(a);
  return (
    <div>
      {a.toDateString()}
      <br />
      
      
    </div>
  )
}

export default DateObj
