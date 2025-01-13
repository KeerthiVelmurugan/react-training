import React, { useState } from 'react';

const NameInitials = () => {
  // State to hold user input and processed initials
  const [input, setInput] = useState('');
  const [initials, setInitials] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Split the input string into an array of names
    const namesArray = input.split(',').map(name => name.trim());

    // Function to get initials from the array of names
    const getInitials = (names) => {
      return names.map(name => {
        const parts = name.split(' ');
        console.log(parts)
        return parts.map(part => part.charAt(0).toUpperCase()).join('');
      });
    };

    // Update state with the initials
    setInitials(getInitials(namesArray));
    console.log(getInitials(namesArray))
  };

  return (
    <div>
      <h1>Extract Initials</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter names (comma-separated):
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g. John Doe, Jane Smith, Emily Johnson"
          />
        </label>
        <button type="submit">Extract Initials</button>
      </form>

      {initials.length > 0 && (
        <div>
          <h2>Initials</h2>
          <ul>
            {initials.map((initial, index) => (
              <li key={index}>{initial}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NameInitials;
