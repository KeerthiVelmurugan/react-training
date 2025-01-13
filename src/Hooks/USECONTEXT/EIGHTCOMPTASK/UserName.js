import React, { useContext } from 'react'
import { DetailsContext } from './ParentComp'

function UserName() {
    const {details, setDetails} = useContext(DetailsContext)
    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='text' name='userName' onChange={handleChange} />
      {/* {details.UserName} */}
    </div>
  )
}

export default UserName
