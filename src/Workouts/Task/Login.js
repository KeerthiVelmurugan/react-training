import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Login() {
    const [data, setData] =useState({
        
        
        email:"",
        password:"",
        
    })

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        
    }

  return (
    <div>
        <Form>
        <Container>
            
            <Form.Label>email</Form.Label>
            <Form.Control type='email' name='email' onChange={handleChange} />
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' onChange={handleChange}/>
            <Button type='submit' onClick={handleSubmit}>Signup</Button>
        </Container>

      </Form>
      
    </div>
  )
}

export default Login
