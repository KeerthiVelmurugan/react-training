// import React, { useState } from 'react'
// import { Formik, ErrorMessage } from 'formik'
// import * as yup from 'yup';


// function SimpleValidation() {

//     const [state,setState] = useState({
//         name:"",
//         age:""
//     })
//     const handleChange = (e) => {
//         setState({...state,[e.target.name]:e.target.value})
//     }

//     const schema = yup.object().shape({
//         //name:yup.string().uppercase().strict().required(),
//           name : yup.string().matches(/^[a-zA-Z0-9]{8,}$/,'password must more than 8').required(),
//         age:yup.number().positive("invalid").integer("invalid").required()
//     })

//         const handleSubmit = () => {
//             console.log(state)
//         }

//   return (
//     <div>
//         <Formik 
//         validationSchema={schema}
//         onSubmit={handleSubmit}
//         initialValues={state}
//         enableReinitialize
//         >
//             {({handleSubmit}) => (
//         <form onSubmit={handleSubmit} noValidate>
//       <input type='text' name='name' onChange={(e)=>{handleChange(e)}} />
//     <ErrorMessage name='name' component='div' className='text-danger'  />
//       <input type='text' name='age' onChange={(e) => {handleChange(e)}} />
//       <ErrorMessage name='age' className='text-danger' component='div' />
//       <button type='submit' >Submit</button>
//       </form>
//       )}
//       </Formik>
//     </div>
//   )
// }

// export default SimpleValidation


import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function SimpleValidation() {
  // Validation schema with Yup
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z0-9]{8,}$/, 'Password must be more than 8 characters')
      .required(),
    age: yup
      .number()
      .positive("Age must be positive")
      .integer("Age must be an integer")
      .required("Age is required"),
  });

  // Form submission handler
  const handleSubmits = (values) => {
    console.log(values); // Form values (name, age)
  };

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmits}
        initialValues={{ name: "", age: "" }} // Formik manages initial values
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <Field
                type="text"
                name="name"
                onChange={handleChange} // Formik's handleChange
                value={values.name} // Formik's values
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div>
              <Field
                type="text"
                name="age"
                onChange={handleChange} // Formik's handleChange
                value={values.age} // Formik's values
              />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </div>
            <button type="submit">Submit</button>
            <div>
              <h3>Form Values:</h3>
              <pre>{JSON.stringify(values,null,6)}</pre> {/* Display form values live */}
            </div>
          </form>
        )}
        
      </Formik>
      
      
    </div>
  );
}

export default SimpleValidation;
