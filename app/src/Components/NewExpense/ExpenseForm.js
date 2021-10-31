import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(enteredData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="ExpenseForm">
          <div className="expenseFormLabels">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangehandler}
              value={enteredTitle}
            />
          </div>
          <div className="expenseFormLabels">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="expenseFormLabels">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2021-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
          <div className="FormButton">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
