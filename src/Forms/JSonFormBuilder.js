import React, { useState } from 'react';

// ✅ Sample JSON Schema
const formSchema = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Subscribe", type: "checkbox", name: "subscribe" }
];

function JsonFormBuilder() {
  // ✅ Initial State based on Schema
  const initialState = formSchema.reduce((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  // ✅ Handle Change
  const handleChange = (e) => {
    console.log(e.target.checked)
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted. Check console!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Dynamic Form Builder</h2>
      <form onSubmit={handleSubmit}>
        {formSchema.map((field) => (
          <div key={field.name} style={{ marginBottom: '15px' }}>
            <label>
              {field.label}:
              <input
                type={field.type}
                name={field.name}
                checked={field.type === 'checkbox' ? formData[field.name] : undefined}
                value={field.type !== 'checkbox' ? formData[field.name] : undefined}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JsonFormBuilder;
