import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Three individual states approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // One single state approach
  // const [expenseInput, setExpenseInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // For the one single state approach:
    // This works technically but isn't the best way and may fail in some niche cases
    // setExpenseInput({
    //   ...expenseInput, // we copy the other two key values with the spread operator in order to don't lose them
    //   enteredTitle: event.target.value,
    // });

    // If the state update depends on the previuos state, use this function form
    // This makes sure that we get the latest snapshot of the current state
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // For the one single state approach:
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // For the one single state approach:
    // setExpenseInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2100-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
