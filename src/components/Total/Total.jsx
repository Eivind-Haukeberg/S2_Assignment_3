import React from 'react';
import './Total.css';

// sum of expenses from the list
const Total = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return <h2 className='total__value'>Total: ${total.toFixed(2)}</h2>;
};

export default Total;
