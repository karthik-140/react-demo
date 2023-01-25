import './ExpenseItems.css'
function ExpenseDetails(props){
    const amount=props.amount;
    return (
        <div className="expense-item__price">
        <div>{amount}</div>
        </div>
    )
}

export default ExpenseDetails
