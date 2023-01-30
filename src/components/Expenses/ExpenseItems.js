import React, {useState} from 'react';

import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItems.css"

const ExpenseItems = (props) => {
    
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);

    const clickHandler = () =>{
        setTitle('updated');
       console.log(title);
    }

    const editAmountHandler = () =>{
        setAmount('$100');
        console.log(amount);
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <ExpenseDetails title={title} location={props.location} amount={amount}/>
                <button onClick={clickHandler}>Change Title</button>
                <button onClick={editAmountHandler}>change Amount</button>
            </Card>
        </li>
    )
}

export default ExpenseItems
