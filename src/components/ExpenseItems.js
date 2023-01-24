import "./ExpenseItems.css"

function ExpenseItems(){
    const ExpenseDate=new Date(2023,2,14);
    const ExpenseItem='Car Insurance';
    const ExpensePrice= 200;
    const LocationOfExpenditure='Hyderabad';
    return (
        <div>
            <div className="expense-item">
                <div>{ExpenseDate.toISOString()}</div>
                <div class="expense-item__description">
                <h2>{ExpenseItem}</h2>
                <h2>{LocationOfExpenditure}</h2>
                <div className="expense-item__price">${ExpensePrice}</div>
                </div>
            </div>
       </div>
    )
}

export default ExpenseItems

/*
1. Component tree is similar to as DOM tree, a component inside the component is known an tree.
2. App component will be the head of the component tree.
3. Inorder to execute the code inside the ExpenseItem file, we need to export the file and import it in the App file.
4. Custom made components are declared with uppercase of first letter, whereas normal HTML elements starts with lowercase letters.
*/

/*
Why do we use className and not class?
->It is an attribute/property of an element in React which is same as class. 

1. How can we use Javascript variables in JS?
--> we can use the variables by using { } braces, by calling the variables inside the braces. 
*/