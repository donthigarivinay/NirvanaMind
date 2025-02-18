import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/community">Community</Link>
        <Link to="/therapy-sessions">Therapy Sessions</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Mental Health Support Platform. All rights reserved.</p>
        <p>Designed with ❤️ by Your Team</p>
      </div>
    </footer>
  );
};

export default Footer;