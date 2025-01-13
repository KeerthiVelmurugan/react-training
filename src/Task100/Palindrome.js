import React from 'react'

function Palindrome() {

    let str = "amhelloma"

    function check(){
        for(let i=0;i<str.length/2;i++){
            if(str[i]!==str[str.length-1-i])
            {
                console.log("no")
                return
            }
        }

        console.log("yes")
    }

    check()
  return (
    <div>
      
    </div>
  )
}

export default Palindrome
