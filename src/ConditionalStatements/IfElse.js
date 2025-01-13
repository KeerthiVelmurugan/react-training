import React from 'react'

function IfElse() {

    let x=5
    const ifstatement = () =>{

    
    if(x>10)
    {
      console.log('x is greater')
      return 'x is big'
    }
    else{
      console.log('x is smaller')
      return 'x is small'
    }
  }
  return (
    <div>
      {x}
      <br />
      {ifstatement()}
    </div>
  )
}

export default IfElse
