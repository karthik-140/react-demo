function ExpenseItems(){
    return (
        <div>
    <h2>Expense Items</h2>
    <p>Food Rs 10</p>
    <p>Petrol Rs 100</p>
    <p>Movies Rs 200</p>
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