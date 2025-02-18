import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save mood to backend or state
    console.log('Mood submitted:', mood);
  };

  return (
    <div className="mood-tracker">
      <h1>Mood Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          How are you feeling today?
          <select value={mood} onChange={handleMoodChange}>
            <option value="">Select your mood</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="angry">😠 Angry</option>
            <option value="anxious">😰 Anxious</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MoodTracker;