import React from 'react';
import './MoodSelector.css';

const MoodSelector = ({ mood, onMoodChange }) => {
  return (
    <select value={mood} onChange={onMoodChange} className="mood-selector">
      <option value="">Select your mood</option>
      <option value="happy">😊 Happy</option>
      <option value="sad">😢 Sad</option>
      <option value="angry">😠 Angry</option>
      <option value="anxious">😰 Anxious</option>
    </select>
  );
};

export default MoodSelector;