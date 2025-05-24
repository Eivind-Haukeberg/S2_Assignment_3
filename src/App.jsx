import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Filter from './components/Filter/Filter';
import Total from './components/Total/Total';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  });

  const [filterMonth, setFilterMonth] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAdd = (expense) => setExpenses([expense, ...expenses]);
  const handleDelete = (id) => setExpenses(expenses.filter((e) => e.id !== id));

  const filtered = filterMonth
    ? expenses.filter(
        (e) => new Date(e.date).getMonth() === parseInt(filterMonth)
      )
    : expenses;

  return (
    <div className='app'>
      <Navbar />
      <main className='app__content'>
        <ExpenseForm onAddExpense={handleAdd} />
        <Filter onChange={setFilterMonth} />
        <ExpenseList expenses={filtered} onDelete={handleDelete} />
        <Total expenses={filtered} />
      </main>
    </div>
  );
};

export default App;
