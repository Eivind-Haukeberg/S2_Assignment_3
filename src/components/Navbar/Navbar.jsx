import React from 'react';
import styles from './Navbar.module.css';

// Navbar with title
const Navbar = () => (
  <nav className={styles['navbar']}>
    <h1 className={styles['navbar__title']}>Expense Tracker</h1>
  </nav>
);

export default Navbar;
