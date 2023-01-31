import React, {useState} from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear]  = useState('2020');
  const filterChangeHandler = selectedYear =>{
       setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;



// Other two ways for Conditional Rendering 

 /* 
 {filteredExpenses.length === 0 && <p>Expenses not found.</p>}
  {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
      <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
      date={expense.date}
      />
      )
  )}
    */



  /*
    {filteredExpenses.length === 0 ? ( <p>Expenses not found.</p> ) : ( filteredExpenses.map((expense) => (
      <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
      date={expense.date}
      />
      ))
  )} 
  */
