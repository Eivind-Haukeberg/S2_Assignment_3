import React from 'react';
import './Filter.css';

// filter on month
const Filter = ({ onChange }) => (
  <select className='filter__select' onChange={(e) => onChange(e.target.value)}>
    <option value=''>Filter by Month</option>
    {[...Array(12)].map((_, i) => (
      <option key={i} value={i}>
        {new Date(0, i).toLocaleString('default', { month: 'long' })}
      </option>
    ))}
  </select>
);

export default Filter;
