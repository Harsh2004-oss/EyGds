import React from "react";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log("Login Details:", { username, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section: Login Form */}
        <div className="form-section">
          <h2>Welcome Back!</h2>
          <p>Please log in to access your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">
                <i className="fas fa-user"></i> Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

        {/* Right Section: Decorative Content */}
        <div className="decorative-section">
          <h1>Welcome to Our Platform</h1>
          <p>Manage your tasks and achieve your goals efficiently.</p>
          <div className="card-preview">
            <div className="card">
              <p>Track your progress</p>
              <span>Stay ahead with detailed insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
