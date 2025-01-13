import React, { useEffect } from 'react'
import { useRef } from 'react'

function UseRef() {
    const colorPargraph = useRef(null)
    const colors = ['#d52dn0', '#03a9f4', '#d14614a', '#9C27B0', '#00897B']

    useEffect( () =>{
        console.log(colorPargraph.current)
    })

    const styleParagraph = () => {
        const randomcolor =Math.floor(Math.random() * colors.length)
        colorPargraph.current.style.color = colors[randomcolor]
    }   
  return (
    <div>
      <button onClick={() => {styleParagraph()}}>click me</button>
      <p ref={colorPargraph}>Welcome to react js</p>
    </div>
  )
}

export default UseRef
