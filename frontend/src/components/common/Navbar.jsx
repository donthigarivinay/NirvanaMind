import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mental Health Support</Link>
      </div>
      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/community">Community</Link>
            <Link to="/therapy-sessions">Therapy Sessions</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> {/* Link to Login page */}
            <Link to="/register">Register</Link> {/* Link to Register page */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;