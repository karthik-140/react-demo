import React, {useState} from 'react';

import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear]  = useState('2020');
  const filterChangeHandler = selectedYear =>{
       setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

let expensesContent = <p>Expenses not found.</p>
if(filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItems
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    location={expense.location}
    date={expense.date}
    />
    ))
}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensesContent}
      {filteredExpenses.length === 1 && (<p>"Only single Expense here. Please add more..."</p>) }
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
