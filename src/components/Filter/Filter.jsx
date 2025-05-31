import React from 'react';
import styles from './Filter.module.css';

// filter on category
const Filter = ({ onChange }) => (
  <select
    className={styles['filter__select']}
    onChange={(e) => onChange(e.target.value)}>
    <option value=''>Filter by Category</option>
    <option value='Computers'>Computers</option>
    <option value='Television'>Television</option>
    <option value='Gaming'>Gaming</option>
  </select>
);

export default Filter;
