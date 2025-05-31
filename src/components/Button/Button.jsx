import React from 'react';
import styles from './Button.module.css';

// Buttons

const Button = ({
  children,
  onClick,
  type = 'button',
  styleType = 'primary',
}) => (
  <button
    className={`${styles['button']} ${styles[`button--${styleType}`]}`}
    type={type}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
