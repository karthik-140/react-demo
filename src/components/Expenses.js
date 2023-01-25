import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from './Card';
function Expenses(props){
   
      return (
        <Card className="expenses">
           {props.items.map(data => <ExpenseItems 
            title={data.title}
            amount={data.amount}
            location={data.location}
            date={data.date}
         ></ExpenseItems>)}
        </Card>
      )
}

export default Expenses;

