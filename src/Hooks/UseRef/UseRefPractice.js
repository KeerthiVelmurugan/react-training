import React, { useRef, useState } from 'react'

function UseRefPractice() {
    const myRef = useRef()
    const myRef1= useRef()
    const myRef2= useRef()

    const inputRef = useRef()
    const [isDisable, setIsDisable] = useState(false)

    function handleClick(){
        console.log(myRef.current);
        myRef.current.style.backgroundColor= "green"
        myRef.current.style.height="100px"
        myRef.current.style.width="200px"
        

    }

    function handleChange(){
        console.log(inputRef.current.value);
        console.log(inputRef.current.value.length);
        
        
    }
    console.log("hello");

    function handleFocus(){
        // inputRef.current.focus()
        // inputRef.current.blur()
        
        inputRef.current.disabled=! isDisable
    }


    
  return (
    <div>
        <div style={{position:"fixed"}}>
         <button onClick={() => myRef.current.scrollIntoView()}>section1</button>
          <button onClick={() => myRef1.current.scrollIntoView()}>section2</button>
           <button onClick={() => myRef2.current.scrollIntoView()}>section3</button>
           </div>
    <div ref={myRef} onClick={handleClick} style={{height:"500px", width:"500px"}}>
        kdjkjdsjkdjkbgdjf
        <input ref={inputRef} onChange={handleChange}></input>
        <button onClick={handleFocus}>focus</button>
      
    </div>
    <div ref={myRef1} style={{height:"800px", width:"500px", backgroundColor:"brown"}}>

    </div>
    <div ref={myRef2} style={{height:"800px", width:"500px", backgroundColor:"red"}}>

    </div>
    </div>

  

  )
}

export default UseRefPractice


// | Property/Method     | Description                                  | Example                                   |
// | ------------------- | -------------------------------------------- | ----------------------------------------- |
// | `.value`            | Gets or sets the current value of an input   | `ref.current.value = "Hello"`             |
// | `.focus()`          | Sets focus to the element                    | `ref.current.focus()`                     |
// | `.blur()`           | Removes focus from the element               | `ref.current.blur()`                      |
// | `.select()`         | Selects the text inside an input or textarea | `ref.current.select()`                    |
// | `.scrollIntoView()` | Scrolls the element into view                | `ref.current.scrollIntoView()`            |
// | `.click()`          | Simulates a click on the element             | `ref.current.click()`                     |
// | `.disabled`         | Enables/disables the input or button         | `ref.current.disabled = true`             |
// | `.value.length`     | Length of the input's current value          | `const length = ref.current.value.length` |