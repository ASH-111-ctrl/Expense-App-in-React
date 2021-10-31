import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <>
      <Card className="ExpenseItem">
        <ExpenseDate date={props.date} />
        <div className="ExpenseItem_Description">
          <h3>{props.title}</h3>
        </div>
        <div className="ExpenseItem_Price">${props.amount}</div>
      </Card>
    </>
  );
};

export default ExpenseItem;
