import React, { useEffect, useState } from 'react'

function UseEffectStateChange() {
    const [resource, setResource] = useState('posts');
    const [details, setDetails] = useState([])
    useEffect(() => {
    
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
    //  .then(json => console.log(json))
     .then(json =>setDetails(json))
        console.log('hi')
      
    },[resource])
    
  

  return (
    <div>
      <button onClick={() => setResource('posts')}>posts</button>
      <button onClick={() => setResource('comments')}>comments</button>
      <button onClick={() => setResource('albums')}>albums</button>
      <button onClick={() => setResource('users')}>users</button>
    <br />
    {resource}

    {
    details && details.map(item => <pre>{JSON.stringify(item)}</pre>)}
    </div>
  )
}

export default UseEffectStateChange
