import React from 'react';
import './Button.css';

// Buttons

const Button = ({
  children,
  onClick,
  type = 'button',
  styleType = 'primary',
}) => (
  <button
    className={`button button--${styleType}`}
    type={type}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
