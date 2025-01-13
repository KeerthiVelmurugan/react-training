import React from 'react'

function Variable() {

  // In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during 
  // the compile phase, before the code is executed. This means that you can refer to variables and functions before their actual 
  // declaration in the code.


  // var Declarations: Hoisted to the top of their function scope, but initialized with undefined until the code execution reaches the actual 
  // line of declaration.

//   let and const Declarations and Temporal Dead Zone (TDZ)
// Unlike var, variables declared with let and const are also hoisted but are not initialized. 
// They remain in a "temporal dead zone" from the start of the block until the declaration is encountered. During this time, 
//any attempt to access them will result in a ReferenceError.

// Temporal Dead Zone (TDZ) is the period between the entering of the block scope and the variable's declaration where the variable 
//cannot be accessed.


      //console.log(_x)
      console.log(g)
      var g=8
    let _x=6
    let $y="6"
    let z=true
    let a=12
    let link= "https://www.google.com"
    let x=20
    console.log("a"+(6).toString())
    const result = (a>x) && (a>_x)
    console.log(result)
    const h=a+x
    let b=3;
    const r= !(a>b) || (a>x)
    console.log(r)
    const c= a&b
    console.log(a>>1)
    


  return (
    <div>
      {_x}
      <br />{$y}
      <br />
      {typeof(y)}
      <br />
      {typeof(z)}
      <br />
      {(10>9)}
      < a href={link}>link</a>
      <br />
       {result.toString()} {h}
       <br />
       {++a}
       <br />
       {a++}

      
    </div>
  )
}

export default Variable
