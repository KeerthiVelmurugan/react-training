import React, { useReducer } from 'react';

// Initial state
const initialState = { isAuthenticated: false, user: null };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { isAuthenticated: true, user: action.user };
    case 'logout':
      return { isAuthenticated: false, user: null };
    default:
      throw new Error('Unknown action type');
  }
}

const AuthApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={() => dispatch({ type: 'logout' })}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch({ type: 'login', user: { name: 'John Doe' } })}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthApp;
