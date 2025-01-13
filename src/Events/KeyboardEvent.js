import React from "react";
function KeyHandler() {
    const handleKeyDown = (event) => {
      console.log('Key down:', event.key);
    };

    function keyhand(e){
        console.log('keys:',e.key)
        
    }
  
    return (
    //   <input type="text" onKeyDown={handleKeyDown} />
      <input type="text" onKeyDown={keyhand} />
    );
  }
  
  export default KeyHandler