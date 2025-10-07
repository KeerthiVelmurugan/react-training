import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    user_email: "",
    user_password: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://foodapp.assistprime.in/api/user-login",
        form
      );
      if (res.data.message === "Login successful!") {
        navigate("/homepag");
      } else {
        setMessage("Invalid email or password");
      }
    } catch (err) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="user_email" placeholder="Email" onChange={handleChange} required />
        <input name="user_password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
