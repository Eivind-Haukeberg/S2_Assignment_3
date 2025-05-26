import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense, onUpdateExpense, editingExpense }) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, date, category } = form;
    if (!title || !amount || !date || !category) {
      alert('All fields are required.');
      return;
    }

    const expenseData = {
      ...form,
      amount: parseFloat(amount),
      date: new Date(date).toISOString(),
      id: editingExpense ? editingExpense.id : crypto.randomUUID(),
    };

    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);
    }

    setForm({ title: '', amount: '', date: '', category: '' });
  };

  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <input
        className='expense-form__input'
        name='title'
        placeholder='Title'
        value={form.title}
        onChange={handleChange}
      />
      <input
        className='expense-form__input'
        name='amount'
        type='number'
        placeholder='Amount'
        value={form.amount}
        onChange={handleChange}
      />
      <input
        className='expense-form__input'
        name='date'
        type='date'
        value={form.date}
        onChange={handleChange}
      />
      <select
        className='expense-form__select'
        name='category'
        value={form.category}
        onChange={handleChange}>
        <option value=''>Select Category</option>
        <option value='Computers'>Computers</option>
        <option value='Television'>Television</option>
        <option value='Gaming'>Gaming</option>
      </select>
      <Button type='submit' styleType='primary'>
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
