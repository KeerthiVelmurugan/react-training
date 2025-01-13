import React from 'react'

function ColorChange() {
    let isImportant = false

        return (
          <div style={{ color: isImportant ? 'red' : 'blue' }}>
            This text is {isImportant ? 'important' : 'not important'}.
          </div>
        );
      }
      


export default ColorChange
