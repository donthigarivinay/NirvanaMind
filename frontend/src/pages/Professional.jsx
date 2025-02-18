import React from 'react';

const Professional = () => {
  const professionals = [
    { id: 1, name: 'Dr. Jane Doe', specialty: 'Anxiety' },
    { id: 2, name: 'Dr. John Smith', specialty: 'Depression' },
  ];

  return (
    <div className="professional">
      <h1>Professional Support</h1>
      <div className="professional-list">
        {professionals.map((professional) => (
          <div key={professional.id} className="professional-card">
            <h2>{professional.name}</h2>
            <p>{professional.specialty}</p>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professional;