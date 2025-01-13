import { Button } from 'react-bootstrap';
import { createContext, useReducer, useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = createContext();

const initialState =0;
const reducer = (count,action) =>
{
  switch(action)
  {
    case 'increment':
      return count +1;
  
  case 'decrement':
    return count - 1;

    case 'reset':
      return 0;
    default:
      return count;
}}

function Main() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // const [count , setCount] = useState(0);
  return (
    
    <>
    <CountContext.Provider value={{count, dispatch}}>
    {/* <CountContext.Provider value={{count, setCount}} */}
    {count}
    <Button onClick={() => {dispatch('increment')}}>plus</Button>
    <ComponentA />
    <br />
    <hr />

    <ComponentB />
    <br />
    <hr />
    <ComponentC />
    </CountContext.Provider>

    </>

  );
}

export default Main;
