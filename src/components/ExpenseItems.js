import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css"

function ExpenseItems(props){
    
    return (
        <div>
            <div className="expense-item">
                <ExpenseDate date={props.date}/>
                <div class="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <ExpenseDetails amount={props.amount}/>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItems
