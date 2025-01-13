import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
function MouseHandler() {

    const [result,setResult] = useState()
    const handleMouseOver = () => {
      console.log('Mouse over');
    };
  
    const handleMouseOut = () => {
      console.log('Mouse out');
    };
    const handleButton = () => {
        setResult(<button style={{display:'contents'}}>click me</button>)
    }

    const handleOut = () => {
        setResult("")
    }
  
    return (
      <div >
        hello
        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>hi</p>
        <Button onMouseEnter={handleButton} onMouseLeave={handleOut}>save</Button>
        
        {result}
      </div>
    );
  }

  export default MouseHandler
  