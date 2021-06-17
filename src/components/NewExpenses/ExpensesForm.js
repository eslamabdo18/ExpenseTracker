import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  // const [entertedTitle, setEnteredTitle] = useState("");

  // const [entertedAmount, setEnteredAmount] = useState("");

  // const [entertedData, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    const input = { ...userInput, title: event.target.value };
    setUserInput(input);
  };
  const amountChangeHandler = (event) => {
    const input = { ...userInput, amount: event.target.value };
    setUserInput(input);
  };
  const dateChangeHandler = (event) => {
    const input = { ...userInput, date: event.target.value };
    setUserInput(input);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    props.saveExpenseDataHandler(userInput);

    const user = {
      title: "",
      amount: "",
      date: "",
    };
    setUserInput(user);
    setIsShow(false);
  };

  const [isShow,setIsShow] = useState(false);

  const addExpenseHandler = (event) => {
    event.preventDefault();
    setIsShow((prev)=>{
      return !prev;
    });
  };

  if(isShow){
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.title}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.amount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2025-01-01"
              value={userInput.date}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>cancel</button>
          <button type="submit">Add Expense</button>
         
        </div>
      </form>
    );
  }
  return <button onClick={addExpenseHandler}>Add Expense</button>;
};

export default ExpensesForm;
