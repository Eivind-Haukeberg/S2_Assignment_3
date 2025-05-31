import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './ExpenseForm.module.css';

// Component for adding or editing
const ExpenseForm = ({ onAddExpense, onUpdateExpense, editingExpense }) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  // Fill form if editing
  useEffect(() => {
    if (editingExpense) {
      setForm({
        title: editingExpense.title,
        amount: editingExpense.amount,
        date: editingExpense.date.slice(0, 10),
        category: editingExpense.category,
      });
    }
  }, [editingExpense]);

  // Update form value on change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, date, category } = form;

    // Validate form for all fields
    if (!title || !amount || !date || !category) {
      alert('All fields are required.');
      return;
    }

    // Create expense object
    const expenseData = {
      ...form,
      amount: parseFloat(amount),
      date: new Date(date).toISOString(),
      id: editingExpense ? editingExpense.id : crypto.randomUUID(),
    };

    // Add or update
    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);
    }

    // Reset form
    setForm({ title: '', amount: '', date: '', category: '' });
  };

  // Render form
  return (
    <form className={styles['expense-form']} onSubmit={handleSubmit}>
      <input
        className={styles['expense-form__input']}
        name='title'
        placeholder='Title'
        value={form.title}
        onChange={handleChange}
      />
      <input
        className={styles['expense-form__input']}
        name='amount'
        type='number'
        placeholder='Amount'
        value={form.amount}
        onChange={handleChange}
      />
      <input
        className={styles['expense-form__input']}
        name='date'
        type='date'
        value={form.date}
        onChange={handleChange}
      />
      <select
        className={styles['expense-form__select']}
        name='category'
        value={form.category}
        onChange={handleChange}>
        <option value=''>Select Category</option>
        <option value='Computers'>Computers</option>
        <option value='Television'>Television</option>
        <option value='Gaming'>Gaming</option>
      </select>
      <Button type='submit' styleType='primary'>
        {editingExpense ? 'Update Expense' : 'Add Expense'}
      </Button>
    </form>
  );
};

export default ExpenseForm;
