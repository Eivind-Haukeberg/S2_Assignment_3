import React, { useState } from 'react';
import Button from '../Button/Button';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

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

    const newExpense = {
      id: crypto.randomUUID(),
      ...form,
      amount: parseFloat(amount),
      date: new Date(date).toISOString(),
    };

    onAddExpense(newExpense);
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
        <option value='housing'>Housing</option>
        <option value='utilities'>Utilities</option>
        <option value='grocery'>Grocery</option>
        <option value='transportation'>Transportation</option>
        <option value='clothing'>Clothing</option>
        <option value='entertainment'>Entertainment</option>
        <option value='other'>Other</option>
      </select>
      <Button type='submit' styleType='primary'>
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
