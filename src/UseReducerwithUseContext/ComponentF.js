import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { CountContext } from './Main';

function ComponentF() {
    const {count, dispatch} = useContext(CountContext);
    // const {count, setCount} = useContext();
  return (
    <div>
        
        Component F
        <Button onClick={() => dispatch('increment')}> + 
        </Button>
       &nbsp; {count}&nbsp;
        <Button onClick={() => dispatch('decrement')}> - 
        </Button>
        <Button onClick={() => dispatch('reset')}> reset
        </Button>

    </div>
  )
}

export default ComponentF;
