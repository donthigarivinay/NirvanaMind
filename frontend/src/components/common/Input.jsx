import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="common-input"
    />
  );
};

export default Input;