import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from './Card';
function Expenses(){
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          location:'Hyderabad',
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, location:'Banglore', date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          location:'Warangal',
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          location:'Chennai',
          date: new Date(2021, 5, 12),
        },
      ];
      return (
        <Card className="expenses">
            {expenses.map(data => <ExpenseItems 
            title={data.title}
            amount={data.amount}
            location={data.location}
            date={data.date}
         ></ExpenseItems>)}
        </Card>
      )
}

export default Expenses;

