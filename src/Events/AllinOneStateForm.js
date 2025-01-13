// import React, { useState } from 'react';

// function FormEventsExample() {
//     const [state, setState] = useState({
//         input: '',
//         name: '',
//         age: '',
//         mobno: '',
//         selected: '',
//         isChecked: false,
//         checkboxes: {
//             checkbox1: false,
//             checkbox2: false,
//             checkbox3: false,
//             checkbox4: false,
//         },
//         selectedOption: ''
//     });

//     const handleChange = (e) => {
//         setState({
//             ...state,
//             selected: e.target.value
//         });
//     };

//     const handleCheckboxChange = () => {
//         setState({
//             ...state,
//             isChecked: !state.isChecked
//         });
//     };

//     const handleMultipleCheckbox = (checkboxName) => {
//         setState({
//             ...state,
//             checkboxes: {
//                 ...state.checkboxes,
//                 [checkboxName]: !state.checkboxes[checkboxName]
//             }
//         });
//     };

//     const handleOptionChange = (e) => {
//         setState({
//             ...state,
//             selectedOption: e.target.value
//         });
//     };

//     const handleSubmit = () => {
//         console.log(state);
//     };

//     return (
//         <div>
//             <input
//                 type='text'
//                 value={state.name}
//                 placeholder="Name"
//                 onChange={(e) => setState({ ...state, name: e.target.value })}
//             />
//             <br />
//             <input
//                 type='text'
//                 value={state.age}
//                 placeholder="Age"
//                 onChange={(e) => setState({ ...state, age: e.target.value })}
//             />
//             <br />
//             <input
//                 type='text'
//                 value={state.mobno}
//                 placeholder="Mobile Number"
//                 onChange={(e) => setState({ ...state, mobno: e.target.value })}
//             />
//             <br />
//             <input
//                 type='text'
//                 value={state.input}
//                 placeholder="Input"
//                 onChange={(e) => setState({ ...state, input: e.target.value })}
//             />
//             <br />
//             <select value={state.selected} onChange={handleChange}>
//                 <option>-Select-</option>
//                 <option>Tamil</option>
//                 <option>English</option>
//                 <option>Maths</option>
//             </select>
//             <br />
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={state.isChecked}
//                     onChange={handleCheckboxChange}
//                 />
//                 check me
//             </label>
//             <br />
//             <br />
//             <h3>Area of Interests</h3>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={state.checkboxes.checkbox1}
//                     onChange={() => handleMultipleCheckbox('checkbox1')}
//                 /> Developing
//             </label>
//             <br />
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={state.checkboxes.checkbox2}
//                     onChange={() => handleMultipleCheckbox('checkbox2')}
//                 /> Testing
//             </label>
//             <br />
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={state.checkboxes.checkbox3}
//                     onChange={() => handleMultipleCheckbox('checkbox3')}
//                 /> Back End 
//             </label>
//             <br />
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={state.checkboxes.checkbox4}
//                     onChange={() => handleMultipleCheckbox('checkbox4')}
//                 /> Full Stack
//             </label>
//             <br />
//             <label>
//                 <h3>Gender</h3>
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     value="male"
//                     checked={state.selectedOption === 'male'}
//                     onChange={handleOptionChange}
//                 />
//                 Male
//             </label>
//             <br />
//             <label>
//                 <input
//                     type="radio"
//                     value="female"
//                     checked={state.selectedOption === 'female'}
//                     onChange={handleOptionChange}
//                 />
//                 Female
//             </label>
//             <br />
//             <button onClick={handleSubmit}>Submit</button>
//             <p></p>
//         </div>
//     );
// }

// export default FormEventsExample;

import React, { useState } from 'react';

function FormEventsExample() {
    const [state, setState] = useState({
        input: '',
        name: '',
        age: '',
        mobno: '',
        selected: '',
        isChecked: false,
        checkboxes: {
            developing: false,
            testing: false,
            backend: false,
            fullstack: false,
        },
        selectedOption: ''
    });

    const handleChange = (e) => {
        setState({
            ...state,
            selected: e.target.value
        });
    };

    const handleCheckboxChange = () => {
        setState({
            ...state,
            isChecked: !state.isChecked
        });
    };

    const handleMultipleCheckbox = (checkboxName) => {
        setState({
            ...state,
            checkboxes: {
                ...state.checkboxes,
                [checkboxName]: !state.checkboxes[checkboxName]
            }
        });
    };

    const handleOptionChange = (e) => {
        setState({
            ...state,
            selectedOption: e.target.value
        });
    };

    const handleSubmit = () => {
        const selectedCheckboxes = Object.keys(state.checkboxes)
            .filter(key => state.checkboxes[key]);

        console.log({
            ...state,
            selectedCheckboxes
        });
    };

    return (
        <div>
            <input
                type='text'
                value={state.name}
                placeholder="Name"
                onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <br />
            <input
                type='text'
                value={state.age}
                placeholder="Age"
                onChange={(e) => setState({ ...state, age: e.target.value })}
            />
            <br />
            <input
                type='text'
                value={state.mobno}
                placeholder="Mobile Number"
                onChange={(e) => setState({ ...state, mobno: e.target.value })}
            />
            <br />
            <input
                type='text'
                value={state.input}
                placeholder="Input"
                onChange={(e) => setState({ ...state, input: e.target.value })}
            />
            <br />
            <select value={state.selected} onChange={handleChange}>
                <option>-Select-</option>
                <option>Tamil</option>
                <option>English</option>
                <option>Maths</option>
            </select>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={state.isChecked}
                    onChange={handleCheckboxChange}
                />
                check me
            </label>
            <br />
            <br />
            <h3>Area of Interests</h3>
            <label>
                <input
                    type="checkbox"
                    checked={state.checkboxes.developing}
                    onChange={() => handleMultipleCheckbox('developing')}
                /> Developing
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={state.checkboxes.testing}
                    onChange={() => handleMultipleCheckbox('testing')}
                /> Testing
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={state.checkboxes.backend}
                    onChange={() => handleMultipleCheckbox('backend')}
                /> Back End 
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={state.checkboxes.fullstack}
                    onChange={() => handleMultipleCheckbox('fullstack')}
                /> Full Stack
            </label>
            <br />
            <label>
                <h3>Gender</h3>
            </label>
            <label>
                <input
                    type="radio"
                    value="male"
                    checked={state.selectedOption === 'male'}
                    onChange={handleOptionChange}
                />
                Male
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="female"
                    checked={state.selectedOption === 'female'}
                    onChange={handleOptionChange}
                />
                Female
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p></p>
        </div>
    );
}

export default FormEventsExample;
