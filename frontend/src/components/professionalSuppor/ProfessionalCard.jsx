import React from 'react';
import './ProfessionalCard.css';

const ProfessionalCard = ({ name, specialty }) => {
  return (
    <div className="professional-card">
      <h2>{name}</h2>
      <p>{specialty}</p>
      <button>Book Appointment</button>
    </div>
  );
};

export default ProfessionalCard;