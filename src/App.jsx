import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Filter from './components/Filter/Filter';
import Total from './components/Total/Total';
import './App.css';

const App = () => {
  // Load  from localStorage
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  });

  // Filter category selection
  const [filterCategory, setFilterCategory] = useState('');

  // Expense currently being edited
  const [editingExpense, setEditingExpense] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Add a new to the list
  const handleAdd = (expense) => setExpenses([expense, ...expenses]);

  // Delete expense by ID
  const handleDelete = (id) => setExpenses(expenses.filter((e) => e.id !== id));

  // Select expense to edit
  const handleEdit = (id) => {
    const exp = expenses.find((e) => e.id === id);
    setEditingExpense(exp);
  };

  // Update expense in the list
  const handleUpdate = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
    setEditingExpense(null);
  };

  // Filter on category
  let filtered = expenses;
  if (filterCategory) {
    filtered = expenses.filter(
      (expense) => expense.category === filterCategory
    );
  }

  return (
    <div className='app'>
      <Navbar />
      <main className='app__content'>
        <ExpenseForm
          onAddExpense={handleAdd}
          onUpdateExpense={handleUpdate}
          editingExpense={editingExpense}
        />
        <Filter onChange={setFilterCategory} />

        <ExpenseList
          expenses={filtered}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <Total expenses={filtered} />
      </main>
    </div>
  );
};

export default App;
