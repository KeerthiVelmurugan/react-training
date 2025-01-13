import React, { useContext } from 'react'
import { DetailsContext } from './ParentComp'

function Mobile() {

    const {details, setDetails} = useContext(DetailsContext)

    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='number' name='mob' onChange={handleChange} />
    </div>
  )
}

export default Mobile


