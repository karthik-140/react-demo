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
   
      return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           {props.items.map(data => <ExpenseItems 
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

