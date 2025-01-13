import React, { useState } from 'react'

function MultiCheck() {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1:false,
        checkbox2:false,
        checkbox3:false,
        checkbox4:false,
    });
    function handleMultipleCheckbox(checkboxName){
    setCheckboxes({
              ...checkboxes,[checkboxName]:!checkboxes[checkboxName],
         });
        }
  return (
    <div>
        <form>
            <label>
      <input
          type="checkbox"
          checked={checkboxes.checkbox1}
          name='checkbox1'
          onChange={()=>handleMultipleCheckbox('checkbox1')}
        /> Developing
        </label>
        <br />
        <label>
      <input
          type="checkbox"
          checked={checkboxes.checkbox2}
          onChange={()=>handleMultipleCheckbox('checkbox2')}
        /> Testing
        </label>
        <br />
        <label>
      <input
          type="checkbox"
          checked={checkboxes.checkbox3}
          onChange={()=>handleMultipleCheckbox('checkbox3')}
        /> Back End 
        </label>
        <br />
        <label>
      <input
          type="checkbox"
          checked={checkboxes.checkbox4}
          onChange={()=>handleMultipleCheckbox('checkbox4')}
        /> Full Stack
        </label>
        </form>
    </div>
  )
}

export default MultiCheck
