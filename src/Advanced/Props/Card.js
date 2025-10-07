import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      {children}
    </div>
  );
}

export default Card;
