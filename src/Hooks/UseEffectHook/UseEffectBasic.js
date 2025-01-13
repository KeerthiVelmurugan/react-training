import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function UseEffectBasic() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState('state1')
    const [text,setText] = useState()

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[state]);


  return (
    <div>
      <Form>
        <Container style={{marginTop:'50px',width:'500px',alignItems:'center'}}>
        <Form.Control
        type='text' onChange={(e)=>setText(e.target.value)} />
        <br />
        <h2>Input Value is...<h2 style={{color:'blue'}}>{text}</h2></h2>
        <br />
        <Row>
          <Col>
        <Button  variant='warning' onClick={()=> setState('state 2')}>state 2</Button>
        </Col>
        <Col>
        <Button  variant='warning' onClick={()=>setState('state1')}>state 1</Button>
        </Col>
        </Row>
        <br />
      
      <br/>
     <h1 >The state name is.... <h2 style={{color:'red'}}>{state}</h2></h1> 
     <h1 style={{color:'Green'}}>{count}</h1>
      </Container>
      </Form>
    </div>
  )
}

export default UseEffectBasic
