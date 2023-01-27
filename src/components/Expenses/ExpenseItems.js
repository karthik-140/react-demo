import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItems.css"

const ExpenseItems = (props) => {

    const clickHandler=() =>{
       console.log('Clicked!!');
    }

    const deleteHandler=()=>{
        console.log('Deleted');
    }

    return (
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
                <button onClick={clickHandler}>Change Title</button>
                <button onClick={deleteHandler}>Delete</button>
            </Card>
    )
}

export default ExpenseItems
