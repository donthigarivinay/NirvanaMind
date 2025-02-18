import React from 'react';

const Resources = () => {
  const resources = [
    { id: 1, title: 'Managing Anxiety', type: 'Article' },
    { id: 2, title: 'Guided Meditation', type: 'Video' },
    { id: 3, title: 'CBT Techniques', type: 'Worksheet' },
  ];

  return (
    <div className="resources">
      <h1>Resource Library</h1>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource">
            <h2>{resource.title}</h2>
            <p>{resource.type}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;