import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { CountContext } from './Main';


function ComponentD() {
    const {count, dispatch} = useContext(CountContext)
   // const {count,setCount} = useContext(CountContext)
  return (
    <div>
      ComponentD {count}
      {/* <Button onClick={() => setCount(count+1)}> add 
        </Button> */}
      <Button onClick={() => dispatch('increment')}> add 
        </Button>
        <Button onClick={() => dispatch('decrement')}> subtract 
        </Button>
        <Button onClick={() => dispatch('reset')}> reset
        </Button>
    </div>
  )
}

export default ComponentD
