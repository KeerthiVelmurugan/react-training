// src/LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Create a validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const LoginFormValidation = () => {
  return (
    <Formik
  initialValues={{ username: '', email: '' }}
  validationSchema={validationSchema}
  onSubmit={(values) => {
    console.log('Form data', values);
  }}
  validateOnChange={true}
  validateOnBlur={true}
  validateOnSubmit={false} // This disables validation on submit
>
  {/* Rest of the code */}


      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormValidation;
