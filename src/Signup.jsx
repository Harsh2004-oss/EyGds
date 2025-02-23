import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="decorative-section">
          <h1>Join Us Today</h1>
          <p>Unlock exclusive features and take the first step towards your goals.</p>
          <div className="welcome-illustration">
            <img src="welcome.jpeg" alt="Welcome Illustration" className="illustration" />
          </div>
        </div>
        <div className="signup-box">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="fullName">
                <i className="fas fa-user"></i> Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>
            <button type="submit" className="btn-signup">
              SIGN UP
            </button>
          </form>
          <p className="or-login">Already have an account?</p>
          <a href="/login" className="btn-login-link">
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
