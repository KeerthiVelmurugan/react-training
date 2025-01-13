import React, { useContext } from 'react'
import { DetailsContext } from './ParentComp'

function Mail() {

    const {details, setDetails} = useContext(DetailsContext)

    function handleChange(e){
        setDetails({...details, [e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='email' name='mail' onChange={handleChange} />
    </div>
  )
}

export default Mail
