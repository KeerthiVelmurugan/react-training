import React, { useState } from 'react';

function CheckboxForm() {
  const [formData, setFormData] = useState({
    name: '',
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      // Add selected skill
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], value]
      }));
    } else {
      // Remove unselected skill
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name].filter((skill) => skill !== value)
      }));
    }
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Select Your Skills</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleTextChange}
        /><br /><br />

        <label>
          <input
            type="checkbox"
            name="skills"
            value="HTML"
            onChange={handleChange}
          />
          HTML
        </label><br />

        <label>
          <input
            type="checkbox"
            name="skills"
            value="CSS"
            onChange={handleChange}
          />
          CSS
        </label><br />

        <label>
          <input
            type="checkbox"
            name="skills"
            value="JavaScript"
            onChange={handleChange}
          />
          JavaScript
        </label><br />

        <label>
          <input
            type="checkbox"
            name="skills"
            value="React"
            onChange={handleChange}
          />
          React
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckboxForm;
// | **Goal / Use Case**                             | **Best Input Type**                      | **Why?**                                            |
// | ----------------------------------------------- | ---------------------------------------- | --------------------------------------------------- |
// | ✅ Select **multiple values** (like skills)      | ✅ `Checkbox` or `Select` with `multiple` | Both can store arrays of selected values.           |
// | ✅ Select **only one** (like gender, department) | ✅ `Radio` or `Select`                    | Both store just a single value.                     |
// | ✅ Store **true/false** (like "subscribe")       | ✅ `Checkbox` only                        | Because it gives a boolean: `checked = true/false`. |

