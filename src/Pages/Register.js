import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    user_email: "",
    user_name: "",
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
        "https://foodapp.assistprime.in/api/user-register",
        form
      );
      setMessage(res.data.message);
      navigate("/loginpage");
    } catch (err) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="user_name" placeholder="Name" onChange={handleChange} required />
        <input name="user_email" placeholder="Email" onChange={handleChange} required />
        <input name="user_password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
