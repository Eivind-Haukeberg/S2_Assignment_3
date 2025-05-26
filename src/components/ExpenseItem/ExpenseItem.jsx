import React from 'react';
import Button from '../Button/Button';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete, onEdit }) => (
  <tr className='expense-item'>
    <td>{expense.title}</td>
    <td>${expense.amount.toFixed(2)}</td>
    <td>{new Date(expense.date).toLocaleDateString()}</td>
    <td>{expense.category}</td>
    <td className='expense-item__actions'>
      <Button styleType='edit' onClick={() => onEdit(expense.id)}>
        Edit
      </Button>
      <Button styleType='delete' onClick={() => onDelete(expense.id)}>
        Delete
      </Button>
    </td>
  </tr>
);

export default ExpenseItem;
