import React from 'react';
import { Link } from 'react-router-dom';
import "../cssfolder/openingPage.css";

export default function OpeningPage() {
  return (
    <div className="openingpage-card-container">
      <div className="openingpage-welcome-text">Welcome to FileTracker App</div>
      
      <div className="openingpage-card-row">
        <Link to="/admin" className="openingpage-card-link">
          <div className="openingpage-card">
            <h2>Admin Login</h2>
          </div>
        </Link>
        <Link to="/office" className="openingpage-card-link">
          <div className="openingpage-card">
            <h2>Office Login</h2>
          </div>
        </Link>
      </div>
      <div className="openingpage-card-row">
        <Link to="/employee" className="openingpage-card-link">
          <div className="openingpage-card">
            <h2>Employee Login</h2>
          </div>
        </Link>
        <Link to="/monitoring" className="openingpage-card-link">
          <div className="openingpage-card">
            <h2>Monitoring</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
