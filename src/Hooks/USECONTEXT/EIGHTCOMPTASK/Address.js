import React, { useContext } from 'react'
import { DetailsContext } from './ParentComp'

function Address() {
    const {details, setDetails} = useContext(DetailsContext)

    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='text' name='address' onChange={handleChange} />
    </div>
  )
}

export default Address
