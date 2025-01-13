// // import React, { useState } from 'react'


// // function Events() {
// //   // Events in the context of programming generally refer to actions or occurrences that happen within a system or application, 
// //   // often initiated by the user or by the system itself. 
// //   // In web development, events typically refer to actions or interactions that take place within a web page or web application, 
// //   // such as clicking a button, typing into a text input, submitting a form, hovering over an element, etc.

// //   //In web development, events are usually handled using event listeners or event handlers, 
// //   // which are functions that are executed when a particular event occurs.
// //     const [input, setInput] =useState();
// //    // const [checkboxValue, setcheckboxValsdue] = useState()
// //     const [selected, setSelected] = useState();
    
// //     const [isChecked, setIsChecked] = useState(false);
// //     const [checkboxes, setCheckboxes] = useState({
// //         checkbox1:false,
// //         checkbox2:false,
// //         checkbox3:false,
// //         checkbox4:false,
// //     });
// //     const [selectedOption, setSelectedOption] = useState('')
// //     const [rangevalue, setRangeValue ] = useState()
// //     const handleChange = (e) => {
// //         setSelected(e.target.value)
// //     }

// //     const handleCheckboxChange = () => {
// //         setIsChecked(!isChecked)
// //     }

// //     const handleMultipleCheckbox = (e) => {
    
// //        // setCheckboxes({
// //       //      ...checkboxes,[checkboxName]:!checkboxes[checkboxName],
// //       //  });

// //         setCheckboxes({...checkboxes,[e]:!checkboxes[e]})
        

// //     }

// //     const handleOptionChange = (e) => {
// //         setSelectedOption(e.target.value)

// //     }
// //   return (
// //     <div>
// //       <form>
// //         <input 
// //         type='text'
// //         value={input}
// //         onChange={(e)=>setInput(e.target.value)}/>
// //       <select value={selected} OnChange={handleChange}>
// //         <option>-Select-</option>
// //         <option>Tamil</option>
// //         <option>English</option>
// //         <option>Maths</option>
// //       </select>
// //       <br />
// //       <label>
// //         <input
// //           type="checkbox"
// //           checked={isChecked}
// //           onChange={handleCheckboxChange}
// //         />
// //         check me
// //       </label>
// //       <br />
// //       <br />
// //       <h3>Are of Interests</h3>
      
// //       <label>
// //       <input
// //           type="checkbox"
// //           checked={checkboxes.checkbox1}
// //           onChange={()=>handleMultipleCheckbox('checkbox1')}
// //         /> Developing
// //         </label>
// //         <br />
// //         <label>
// //       <input
// //           type="checkbox"
// //           checked={checkboxes.checkbox2}
// //           onChange={()=>handleMultipleCheckbox('checkbox2')}
// //         /> Testing
// //         </label>
// //         <br />
// //         <label>
// //       <input
// //           type="checkbox"
// //           checked={checkboxes.checkbox3}
// //           onChange={()=>handleMultipleCheckbox('checkbox3')}
// //         /> Back End 
// //         </label>
// //         <br />
// //         <label>
// //       <input
// //           type="checkbox"
// //           checked={checkboxes.checkbox4}
// //           onChange={()=>handleMultipleCheckbox('checkbox4')}
// //         /> Full Stack
// //         </label>
// //         <br />
// //       <label>
// //         <h3>Gender</h3>
// //       </label>
// //       <label>
// //         <input
// //           type="radio"
// //           value="male"
// //           checked={selectedOption === 'male'}
// //           onChange={handleOptionChange}
// //         />
// //         Male
// //       </label>
// //       <br />

// //       <label>
// //         <input
// //           type="radio"
// //           value="female"
// //           checked={selectedOption === 'female'}
// //           onChange={handleOptionChange}
// //         />
// //         Female
// //       </label>

// //       <br />
// //       <input type="tel" />
// //       <input type="range" min="10" max="50" value={rangevalue} onChange={(e) => setRangeValue(e.target.value)} />
// //       <p>
// //         <button type='submit'>click</button>
// //       </p>
// //       </form>
// //       {rangevalue}
// //     </div>
// //   )
// // }

// // export default Events;


// import React, { useState } from 'react';

// function Events() {
//   const [checkboxes, setCheckboxes] = useState({
//     checkbox1: '',
//     checkbox2: '',
//     checkbox3: '',
//     checkbox4: '',
//   });

//   const handleMultipleCheckbox = (checkboxName, value) => {
//     setCheckboxes((prevState) => {
//       const newCheckboxes = { ...prevState };
//       if (newCheckboxes[checkboxName] === value) {
//         delete newCheckboxes[checkboxName]; // If checked, remove the value
//       } else {
//         newCheckboxes[checkboxName] = value; // If unchecked, store its value
//       }
//       return newCheckboxes;
//     });
//   };

//   return (
//     <div>
//       <form>
//         <h3>Areas of Interest</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={checkboxes.checkbox1 === 'Developing'}
//             onChange={() => handleMultipleCheckbox('checkbox1', 'Developing')}
//           />
//           Developing
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             checked={checkboxes.checkbox2 === 'Testing'}
//             onChange={() => handleMultipleCheckbox('checkbox2', 'Testing')}
//           />
//           Testing
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             checked={checkboxes.checkbox3 === 'Back End'}
//             onChange={() => handleMultipleCheckbox('checkbox3', 'Back End')}
//           />
//           Back End
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             checked={checkboxes.checkbox4 === 'Full Stack'}
//             onChange={() => handleMultipleCheckbox('checkbox4', 'Full Stack')}
//           />
//           Full Stack
//         </label>
//         <br />
//       </form>
//       <div>
//         <h4>Selected Interests:</h4>
//         <ul>
//           {Object.values(checkboxes).map(
//             (value, idx) => value && <li key={idx}>{value}</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Events;

import React, { useState } from 'react';

function Events() {
  const [interest, setInterest] = useState([]);

  const handleSelectChange = (e) => {
    // Get all selected options as an array
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    setInterest(selectedValues);
  };

  return (
    <div>
      <h3>Select your areas of interest (Multiple selection):</h3>
      <select multiple={true} value={interest} onChange={handleSelectChange}>
        <option value="developing">Developing</option>
        <option value="testing">Testing</option>
        <option value="backend">Back End</option>
        <option value="fullstack">Full Stack</option>
      </select>
      <h4>Selected Interests:</h4>
      <ul>
        {interest.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul> 
    </div>
  );
}

export default Events;

