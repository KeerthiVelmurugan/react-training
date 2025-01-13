import React, { useContext } from 'react'
import { DetailsContext } from './ParentComp'

function Age() {
    const {details,setDetails} = useContext(DetailsContext)
    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='text' name='age' onChange={handleChange} />
    </div>
  )
}

export default Age
