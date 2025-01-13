import React from 'react'

const BasicObject = () => {
    const number= 12345678.89;
  let  num ={
        age:25,
        class:67,
        address:{
            doorno:5,
            street: 'as street'
        }
    }
    let details = new Object();
    details.name= 'keerthi'
    details.age= 30
    console.log(details)
    delete num.class
    
    console.log(num)
  return (
    <div>
      hello
    </div>
  )
}

export default BasicObject
