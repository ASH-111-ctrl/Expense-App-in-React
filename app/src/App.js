import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Expense from "./Components/Components/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";
const dummyExpenses = [
  {
    id: "e1",
    title: "Electricity Bill",
    amount: "230",
    date: new Date(2021, 10, 25),
  },
  {
    id: "e2",
    title: "School fees",
    amount: "300",
    date: new Date(2021, 10, 5),
  },

  {
    id: "e3",
    title: "Internet Package",
    amount: "20",
    date: new Date(2021, 10, 2),
  },
];
function App() {
  const [expenses,setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense)=>{
      return(
        [expense,...prevExpense]
      )
    })
  };

  return (
    <div className="App">
      <h1>Expense App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
