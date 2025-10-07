import React, { useReducer } from 'react';

const initialState = { fields: [{ name: '', age: '' }] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, fields: [...state.fields, { name: '', age: '' }] };
    case 'remove':
      return { ...state, fields: state.fields.filter((_, index) => index !== action.index) };
    case 'change':
      const updatedFields = state.fields.map((field, index) => 
        index === action.index ? { ...field, [action.field]: action.value } : field
      );
      return { ...state, fields: updatedFields };
    default:
      return state;
  }
};



function DynamicForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.fields)

  return (
    <div>
      <h2>Dynamic Form</h2>
      {state.fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            value={field.name}
            onChange={(e) => dispatch({ type: 'change', index, field: 'name', value: e.target.value })}
          />
          <input
            type="number"
            placeholder="Age"
            value={field.age}
            onChange={(e) => dispatch({ type: 'change', index, field: 'age', value: e.target.value })}
          />
          <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: 'add' })}>Add More</button>
    </div>
  );
}

export default DynamicForm;
