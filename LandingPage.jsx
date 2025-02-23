import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Expense Tracker</div>
        <nav className="desktop-nav">
          <ul>
            <li onClick={() => handleNavigation('#home')}>Home</li>
            <li onClick={() => handleNavigation('#Project')}>Project</li>
            <li onClick={() => handleNavigation('#service')}>Service</li>
            <li onClick={() => handleNavigation('#resources')}>Resources</li>
            <li onClick={() => handleNavigation('#about')}>About us</li>
            <li>
              <button className="btn-free-trial" onClick={() => handleNavigation('/signup')}>
                Free Trial
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Expenses, Analyze Your Spending, and Save More <span className="highlight">ExpenseTracker</span></h1>
          <p>With Finance Tracker, you can easily keep track of your income and expenses, view detailed analytics, and plan for a better financial future.
          </p>
          <button className="btn-primary" onClick={() => handleNavigation('/signup')}>
            Get Started
          </button>
        </div>

        {/* Hero Images Grid with Two Images */}
        <div className="hero-images">
          <div className="hero-image">
            <img src="/image1.jpeg" alt="Financial Chart 1" />
          </div>
          <div className="hero-image">
            <img src="/images.jpeg" alt="Financial Chart 2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Unlock Premium Benefits with Our Advanced Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>AI-Powered Assistance</h3>
            <p>Access a tailored AI assistant that adapts to your needs, delivering personalized insights.</p>
          </div>
          <div className="feature-item">
            <h3>Exclusive Features</h3>
            <p>Unlock advanced features like enhanced analytics, deeper customization, and priority support.</p>
          </div>
          <div className="feature-item">
            <h3>Growth Rate</h3>
            <p>Measure your organization's revenue increase effectively with intuitive tools.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
