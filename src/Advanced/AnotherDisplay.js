import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function AnotherDisplay() {
  //  let location = useLocation()
    // let {state} = location
    // let formData= state || {}

    // let formData = location.state
    // let {email,message} = location.state
    let {userId} = useParams()
    console.log(userId)
  return (
    <div>
      {/* {formData.name}
      {email}
      {message} */}
      {userId}
    </div>
  )
}

export default AnotherDisplay
