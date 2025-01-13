// Button.jsx
import React from 'react';

const Button = ({ label, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
      <a href='/cdt' target='_blank'>CountDownTimer</a>
    </button>
  );
};

export default Button;
