import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <h1>Build Your Portfolio</h1>
      <p>Create your professional digital portfolio easily.</p>
      <Link to="/builder">
        <button className="cta-button">Start Building</button>
      </Link>
    </div>
  );
}
