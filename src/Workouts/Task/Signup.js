import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios';

function Signup() {
    const [data, setData] =useState({
        
        
        email:"",
        password:"",
        name:"",
    })

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        const input = {
            
            email:data.email,
            password:data.password,
            name:data.name,
            avatar:"https://picsum.photos/800"
}

        axios.post('https://api.escuelajs.co/api/v1/users',input)
        alert("success")
        
    }
  return (
    <div>
      <Form>
        <Container>
            <Form.Label>user Name</Form.Label>
            <Form.Control type='text' name='name' onChange={handleChange} />
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

export default Signup
