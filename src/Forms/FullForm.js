import React, { useState } from 'react';

function FullForm() {
  const [formData, setFormData] = useState({
    name: '',
    skills: [],
    gender: '',
    department: '',
    languages: [],
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === 'checkbox' && name === 'skills') {
      // Handle skills checkbox array
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value)
      }));
    } else if (type === 'checkbox' && name === 'subscribe') {
      // Handle boolean checkbox
      setFormData((prev) => ({
        ...prev,
        [name]: checked
      }));
    } else {
      // Handle text, radio, and single select
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Full Example Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />

        {/* Skills - Checkboxes */}
        <label>Skills:</label><br />
        {['HTML', 'CSS', 'JavaScript', 'React'].map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleChange}
            />
            {skill}
          </label>
        ))}<br /><br />

        {/* Gender - Radio Buttons */}
        <label>Gender:</label><br />
        {['Male', 'Female', 'Other'].map((gender) => (
          <label key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={formData.gender === gender}
              onChange={handleChange}
            />
            {gender}
          </label>
        ))}<br /><br />

        {/* Department - Single Select */}
        <label>Department:</label><br />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">-- Select Department --</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Full Stack">Full Stack</option>
        </select><br /><br />

        {/* Languages - Multi Select */}
        <label>Known Languages:</label><br />
        <select
          name="languages"
          multiple
          value={formData.languages}
          onChange={handleMultiSelect}
          size={4}
        >
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
        </select><br /><br />

        {/* Subscribe - Boolean Checkbox */}
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FullForm;
