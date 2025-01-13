import React, { useState } from 'react'

function CallBackExample() {
    let [result,setResult]= useState()

    function myresult(s){
        setResult(s)
    }
   
        function sum(n,m,callback){
        let s= n+m
        callback(s)
    }
    

    
  return (
    <div>
        <button onClick={()=>{sum(3,4,myresult)}}>click</button>
      {result}
    </div>
  )
}

export default CallBackExample
