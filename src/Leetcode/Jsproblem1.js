import React from 'react'

function Jsproblem1() {
    // function createHelloWorld() {
    //     // Inner function that always returns "Hello World"
    //     const helloWorldFunction = function() {
    //       return "Hello World";
    //     };
      
    //     // Return the inner function
    //     return helloWorldFunction;
    //   }
      
    //   // Call createHelloWorld to get the inner function
    //   const helloWorldFunction = createHelloWorld();
      
    //   // Call the inner function to get "Hello World"
    //   const result = helloWorldFunction();
      
    //   console.log(result); // Output: Hello World

    function createHelloWorld(){
        function helloWorldFunction(){
            return "Hello world"
        }
        return helloWorldFunction()
    }

    const f= createHelloWorld()
    console.log(f)
      
  return (
    <div>
      
    </div>
  )
}

export default Jsproblem1
