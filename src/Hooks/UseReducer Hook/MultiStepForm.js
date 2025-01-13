import React, { useReducer } from 'react';

// Initial state
const initialState = {
  step: 1,
  data: {
    name: '',
    email: '',
    address: ''
  }
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'nextStep':
      return { ...state, step: state.step + 1 };
    case 'prevStep':
      return { ...state, step: state.step - 1 };
    case 'setData':
      return { ...state, data: { ...state.data, [action.field]: action.value } };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'setData', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(state.data);
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      {state.step === 1 && (
        <div>
          <h2>Step 1</h2>
          <input
            name="name"
            value={state.data.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <button onClick={() => dispatch({ type: 'nextStep' })}>Next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h2>Step 2</h2>
          <input
            name="email"
            value={state.data.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button onClick={() => dispatch({ type: 'prevStep' })}>Back</button>
          <button onClick={() => dispatch({ type: 'nextStep' })}>Next</button>
        </div>
      )}
      {state.step === 3 && (
        <div>
          <h2>Step 3</h2>
          <input
            name="address"
            value={state.data.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <button onClick={() => dispatch({ type: 'prevStep' })}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
