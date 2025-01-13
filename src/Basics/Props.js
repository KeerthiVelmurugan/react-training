import React from 'react'
import Props1 from './Props1'

function Props(prop) {
    let des = 'developer'
    let k="ji"

  return (
    <div>
      <h1>Emp name : {prop.name}</h1>
      <h2>Emp id:{prop.id}</h2>
      <Props1 de={des} l="hi" k={k} />
      <img width="200px" height="200px" src="http://127.0.0.1:8000/media/image/VivoY56BlackEngine.webp" alt='image'></img>

    </div>
  )
}

export default Props
