import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Mental Health Support Platform</h1>
      <p>Your journey to better mental health starts here.</p>
      <div className="cta-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;