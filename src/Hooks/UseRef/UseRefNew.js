
import React, { useRef } from 'react'

function UseRefNew() {
    const inputRef = useRef(null);

const handleSelect = () => {
  inputRef.current.select(); // Select all text inside input
};

const handleDisable = () => {
  inputRef.current.disabled = true; // Disable input
};
  return (
    <div>
      <input ref={inputRef} value="hello" onClick={handleSelect}  ></input>
    </div>
  )
}

export default UseRefNew


// | Property/Method     | Description                                  | Example                                   |
// | ------------------- | -------------------------------------------- | ----------------------------------------- |
// | `.value`            | Gets or sets the current value of an input   | `ref.current.value = "Hello"`             |
// | `.focus()`          | Sets focus to the element                    | `ref.current.focus()`                     |
// | `.blur()`           | Removes focus from the element               | `ref.current.blur()`                      |
// | `.select()`         | Selects the text inside an input or textarea | `ref.current.select()`                    |
// | `.scrollIntoView()` | Scrolls the element into view                | `ref.current.scrollIntoView()`            |
// | `.click()`          | Simulates a click on the element             | `ref.current.click()`                     |
// | `.disabled`         | Enables/disables the input or button         | `ref.current.disabled = true`             |
// | `.value.length`     | Length of the input's current value          | `const length = ref.current.value.length` |

