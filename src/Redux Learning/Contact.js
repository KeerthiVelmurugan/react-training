import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFruits } from './slices/fruitSlice'

function Contact() {
    const dispatch = useDispatch()
    const [fruitName,setFruitName] = useState('')

    function addFruit(){
        dispatch(setFruits(fruitName))
        setFruitName('')

    }

  return (
    <div> Fruits component
        <input type='text' value={fruitName} onChange={(e)=>{setFruitName(e.target.value)}} />
        <button onClick={addFruit} >add</button>
      
    </div>
  )
}

export default Contact
