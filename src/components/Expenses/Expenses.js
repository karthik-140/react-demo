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
  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
      return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           {filteredExpense.map(data => <ExpenseItems 
            key={data.id}
            title={data.title}
            amount={data.amount}
            location={data.location}
            date={data.date}
         ></ExpenseItems>)}
        </Card>
      )
}

export default Expenses;



 /* 1 -> Why did the Udemy trainer even convert the code.
  Why doesn't he use ExpenseItem Component -> 4 times for showing 4 expenses. 
  What do you think is the reason?

1 --> Because it is a time taking process to enter each expense item manually, 
we use an array which stores all the previous expenses and 
concat the new expense at very when new expense is added using map() method. */

/*Why does the trainer uses state and not update the old expense variable. 
If you update the old expense variable like this expenses.push(expense). Why does this not work?

---> Because in React it would not work like that, 
in order to re-Execute the component we need to use State, which re-render the component again. */

/*
What happens when you don't use keys ?
--> when we dont use keys, whenever we add expense the old expense state will be overwritten with the new expense state.

What is the advantage of using keys?
--> when we use keys, React identifies the key as unique which does not overwrite/change the state of the Expenses.
It keeps the state of individual expenses of its own.

Why you should not use index as keys?
---> Index also create some bugs while adding expenses, because whenever we add new expense,
it goes to the same index, so to overcome this, we use key which is a unique identifier.
*/
