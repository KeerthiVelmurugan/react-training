import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FaUser , FaLock } from "react-icons/fa";

function Icons() {

  return (
    <div>
        <Form.Group controlId="formGridUserName">
  <Form.Label>User Name*</Form.Label>
  <div style={{ position: 'relative' }}>
    <FaUser
      style={{
        color: '#FFAB91',
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        pointerEvents: 'none' // Ensures icon doesn't interfere with input
      }}
    />
    <Form.Control
      type="text"
      placeholder="User Name"
      name="UserName"
    //   value={loginData.UserName}
    //   onChange={(e) => handleLoginData(e)}
      style={{ paddingLeft: '35px' }}
    />
  </div>
</Form.Group>

<div style={{ position: 'relative', width: 'fit-content' }}>
  <svg 
    width="16" 
    height="16" 
    fill="#FFAB91"
    style={{
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16"
  >
    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm4-3a4 4 0 11-8 0 4 4 0 018 0zm-6.285 5.588A4.785 4.785 0 003 13.5C3 15.433 4.567 17 6.5 17h3a3.5 3.5 0 003.5-3.5 4.785 4.785 0 00-2.715-4.412z" />
  </svg>
  <input
    type="text"
    placeholder="User Name"
    style={{
      paddingLeft: '35px',
      height: '40px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    }}
  />
</div>

<div style={{ position: 'relative', width: 'fit-content' }}>
  <i 
    className="fas fa-user" 
    style={{
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#FFAB91',
      pointerEvents: 'none'
    }}
  ></i>
  <input
    type="text"
    placeholder="User Name"
    style={{
      paddingLeft: '35px', // Space for the icon
      height: '40px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    }}
  />
</div>

<Form.Group  controlId="formGridUserName">
        <Form.Label>User Name*</Form.Label>
        <InputGroup >
        <InputGroup.Text id="basic-addon1">
        <FaUser style={{ color: '#FFAB91' }}/>
        </InputGroup.Text>
          <Form.Control 
          type="text" 
          placeholder="User Name"
          name="UserName"
        //   value={loginData.UserName}
        //   onChange={(e) => handleLoginData(e)}
          />
        </InputGroup>
        </Form.Group>




      
    </div>
  )
}

export default Icons
