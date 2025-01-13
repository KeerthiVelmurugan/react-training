import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './celtofahren.css'

function CelciustoFahren() {
    const [celcius, setCelcius] = useState()
    const [fahren, setFahren] =useState()

    const handlesubmit = () => {
        setFahren(celcius*1.8+32)

    }

  return (
    <div>
      <Form>
        <br />
        <Container className='container'>
            <h1>FD Calculator</h1>
        <Form.Control
        type='text'
        onChange={(e) => {setCelcius(e.target.value)}}
        />
        <br />
        <Button variant='warning'className='rounded-pill'  onClick={() =>{handlesubmit()}}>convert</Button>
        <h2>{fahren} F</h2>
        </Container>
      </Form>
    </div>
  )
}

export default CelciustoFahren
