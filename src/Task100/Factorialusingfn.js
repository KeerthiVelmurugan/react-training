import React from 'react';

function FactorialUsingFn() {
    let f = 5;

    const factorial = (f) => {
        if (f < 0) {
            return "Please enter a non-negative number";
        } else if (f === 0) {
            return 1;
        } else {
            console.log(f*factorial(f-1))
            return f * factorial(f - 1);
        }
    };

    const result = factorial(f);

    return (
        <div>
            {result}
        </div>
    );
}

export default FactorialUsingFn;


// import React, { useState } from 'react'

// function Factorialusingfn() {
//     const [n,setN] = useState(0)
//     const[result,setResult] = useState()

//     function fact(f){
//         let x=1
//      //   f=parseInt(f)
//         if(isNaN(f) ||f<=0){
//            // setResult(0) 
//            x=0
//         }
//         else if(f==1)
//         {
//            // setResult(1)
//            x=1
//         }
//         else{
//             x=f*fact(f-1)
//            // setResult(f*fact(f-1))
//         }
//         setResult(x)
//     }



//   return (
//     <div>
//       <input type='text' onChange={(e) => {setN(e.target.value)}} />
//       <button type='submit' onClick={() => {fact(n)}}>click</button>
//       {result}
//     </div>
//   )
// }

// export default Factorialusingfn
