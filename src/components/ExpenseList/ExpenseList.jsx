import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

// Renders a table
const ExpenseList = ({ expenses, onDelete, onEdit }) => (
  <div className='expense-list__wrapper'>
    <table className='expense-list'>
      <caption className='expense-list__caption'>Expense List</caption>
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
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseList;
