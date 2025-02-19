import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import './Navbar.css';
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get auth state

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
        <Link to="/">NirvanaMind</Link>
      </div>
      <div className="navbar-links">
        {user ? ( // Show dashboard & logout if user is logged in
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/community">Community</Link>
            <Link to="/therapy-sessions">Therapy Sessions</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="logout-button">Logout</button>
          </>
        ) : ( // Show login & register if user is not logged in
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
