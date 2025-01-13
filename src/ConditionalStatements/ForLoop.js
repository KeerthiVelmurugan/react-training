import React from 'react'

function ForLoop() {

  // A "definite loop" typically refers to a loop where the number of iterations is predetermined or definite. 
  // In programming, this is often achieved using constructs like the for loop, where the loop iterates a 
  // specific number of times based on a defined condition.
    const n =20;
    const numbers = [];
    for(let i=1; i<n; i++){
        numbers.push(i);
    }
  return (
    <div>
      <ul>
        {
            numbers.map((i,index)=>(
                <li key={index}>{i}</li>
            )
            )
        }
      </ul>
    </div>
  )
}

export default ForLoop
