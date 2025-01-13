

import React from 'react'

function SpanExample() {
  return (
    <div>
      <p>Click the <span style={{cursor: "pointer",
      color: "blue"}}  onClick={()=> {alert('Span clicked!')}}>clickable text</span> to see an alert.</p>
    </div>
  )
}

export default SpanExample

