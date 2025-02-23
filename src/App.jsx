import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <div className="default-message-container">
                <h2>404 - Page Not Found</h2>
                <p>Oops! The page you’re looking for doesn’t exist.</p>
                <p>
                  Go back to the <a href="/">Home</a> or try visiting <a href="/login">Login</a>.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
