import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";
function App() {
    const [expenses, setExpenses] =useState([]);
    const [editingEpense,setEditingExpense] =useState(null);
    const addExpense =(expense) => {
        if (editingEpense) {
            setExpenses((prev) =>
            prev.map((expe)=>(expe.id===editingEpense.id ? expense: exp)));
            setEditingExpense(null);
        } else {
            setExpenses([expense, ...expenses]);
        }
    };
    const deleteExpense =(id) => {
        setExpenses((prev) => prev.filter((exp) => exp.id !==id));
    };
    const editExpense =(expense) => {
        setEditingExpense(expense);
    };
    const total =expenses.reduce((acc, exp) => acc +exp.amount, 0);
    return(
        <div className="app">
            <h1>Expense Tracker</h1>
            <h3>Total: ${total.toFixed(2)}</h3>
            <ExpenseForm
            onAddExpense={addExpense}
            editingEpense={editingEpense}
            />
            <ExpenseList
            expenses={expenses}
            onDelete={deleteExpense}
            onEdit={editExpense}
            />
        </div>
    );
}
export default App;