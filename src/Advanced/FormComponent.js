// FormComponent.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormComponent() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(){
    navigate('/display',{state:formData})
    
  }
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        
          <button type="submit">Submit</button>
          <Link to='/Anotherdisplay' state={formData}>
            <button>go to another display </button>
          </Link>
      
      </form>
    </div>
  );
}

export default FormComponent;
