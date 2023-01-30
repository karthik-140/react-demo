import React from 'react';
import './ExpensesList.css'
import ExpenseItems from './ExpenseItems';

const expensesList = (props) =>{
   
if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>"Found no expenses."</h2>
}
    
return (
    <ul className='expenses-list'>
    {props.items.map((expense) => (
        <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
        />
        ))}
        {props.items.length === 1 && <h2>"Only single Expense here. Please add more..."</h2>}
    </ul>
    )
}

export default expensesList;