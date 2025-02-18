import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ title, type }) => {
  return (
    <div className="resource-card">
      <h2>{title}</h2>
      <p>{type}</p>
      <button>View</button>
    </div>
  );
};

export default ResourceCard;