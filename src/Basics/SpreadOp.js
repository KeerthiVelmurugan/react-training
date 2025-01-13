import React from 'react'

function SpreadOp() {
    let num1 = [1,2,3]
    let num2 = [7,8,9];
    let numbers =[...num1,...num2];
    console.log(numbers)
    let details = {
        name:'kavi',
        class:3,
        section:'b'
    }
    let details2 ={
        fatherName:'Velu',
        motherName:'Keerthi'
    }

    let stDetail = {...details,'place':'vilankurichi'};
    console.log(stDetail);

    const student = (...num1) => {
        console.log(num1);

    }
    
  return (
    <div>
      
    </div>
  )
}

export default SpreadOp
