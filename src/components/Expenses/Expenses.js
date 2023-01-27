import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from '../UI/Card';
const Expenses = (props) => {
   
      return (
        <Card className="expenses">
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

