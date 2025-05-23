import React from 'react';
import Button from '../Button/Button';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete }) => (
  <tr className='expense-item'>
    <td>{expense.title}</td>
    <td>${expense.amount.toFixed(2)}</td>
    <td>{new Date(expense.date).toLocaleDateString()}</td>
    <td>{expense.category}</td>
    <td>
      <Button styleType='danger' onClick={() => onDelete(expense.id)}>
        Delete
      </Button>
    </td>
  </tr>
);

export default ExpenseItem;
