import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <div className="widgets">
        <div className="widget">
          <h2>Mood Tracker</h2>
          <p>Track your daily mood and emotions.</p>
          <button>Go to Mood Tracker</button>
        </div>
        <div className="widget">
          <h2>Community Support</h2>
          <p>Connect with others and share your experiences.</p>
          <button>Go to Community</button>
        </div>
        <div className="widget">
          <h2>Resources</h2>
          <p>Access articles, videos, and tools for mental health.</p>
          <button>Go to Resources</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;