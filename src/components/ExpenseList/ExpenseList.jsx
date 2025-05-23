import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDelete }) => (
  <table className='expense-list'>
    <thead>
      <tr>
        <th>Title</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

export default ExpenseList;
