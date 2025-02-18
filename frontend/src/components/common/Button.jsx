import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button type={type} className="common-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;