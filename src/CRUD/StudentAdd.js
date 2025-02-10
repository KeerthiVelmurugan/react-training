import React, { useState } from 'react';
import axios from 'axios';

const StudentAdd = () => {
  // Using useState with an object to manage all form fields
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    year: '',
    department: '',
    gender: '',
  });

  // Handle change for any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://92.205.109.210:8051/api/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Roll No: </label>
          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Year: </label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Department: </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentAdd;
