import React, { useState } from 'react'
import {Formik,ErrorMessage} from 'formik';
import * as yup from 'yup';
import { Button, Card, Container, Form } from 'react-bootstrap';

function FormforValidation() {
    const [input,setInput] = useState({
        userName:'',
        password:'',
        mobilenumber:'',
        age:'',
        website:'',
    })

    // const initialValues = {
    //     userName:'',
    //     password:'',
    // }
    const schema = yup.object().shape({
        userName: yup.string().uppercase().strict().required().max(10,'username does not exist 10 charecters'),
        //password:yup.string().required().min(8,"password contains atleast 8 characters"),
        mobilenumber:yup.string().matches(/^[0-9]{10}$/,'invaild mobile number').required(),
        password:yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!#$%&*]).{8,}$/,'password contain 8 char and one number and one special char'),
        age:yup.number().positive('age must be positive number').integer('abe must be integer').required('age is required field'),
        website:yup.string().url().required(),
      });
      const handleInput = (e) => {
     
        setInput((prev) => ({
            ...prev,[e.target.name]:e.target.value,
        }))
      }
      const handleSubmit = (values) => {
      // e.preventDefault();
        console.log(values)
      }
  return (
    <div>
        <Formik 
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={input}
        enableReinitialize
        >
             {({handleSubmit})=>( 
      <Form noValidate >
        <Container>
          <Card>
        <Form.Label>UserName</Form.Label>
        <Form.Control
        type='text'
        name='userName'
        value={input.userName}
     onChange={(e) =>{handleInput()}}
       />
       <ErrorMessage name='userName' className='text-danger' component='div'/>
       <br />
       <br />
       <br />
        <Form.Label>Password</Form.Label>
        <Form.Control
        type='password'
        name='password'
        value={input.password}
       required  onChange={(e) =>{handleInput()}}

       />
       <ErrorMessage name='password' className='text-danger' component='div'/>
       <br />
       <br/>
       <Form.Label>mobile number</Form.Label>
        <Form.Control
        type='text'
        name='mobilenumber'
        value={input.mobilenumber}
       required  onChange={(e) =>{handleInput()}}
       />
       <ErrorMessage name='mobilenumber' className='text-danger' component='div'/>

       <Form.Label>age</Form.Label>
        <Form.Control
        type='text'
        name='age'
        value={input.age}
       required  onChange={(e) =>{handleInput()}}
       />
       <ErrorMessage name='age' className='text-danger' component='div'/>
       <Form.Label>website</Form.Label>
        <Form.Control
        type='text'
        name='website'
        value={input.website}
       required  onChange={(e) =>{handleInput()}}
       />
       <ErrorMessage name='website' className='text-danger' component='div'/>
       <Button type='submit'  onClick={(e) =>{handleSubmit(e)}}>Submit</Button>
       </Card>
       </Container>
      </Form>
            )} 
      </Formik>
    </div>
  )
}

export default FormforValidation
