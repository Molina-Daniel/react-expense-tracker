import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpenseClicked, setAddNewExpenseClicked] = useState(false);

  const addNewExpenseHandler = () => {
    setAddNewExpenseClicked(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpenseClicked(false);
  };

  const cancelAddNewExpenseHandler = () => {
    setAddNewExpenseClicked(false);
  };

  return (
    <div className="new-expense">
      {addNewExpenseClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddNewExpense={cancelAddNewExpenseHandler}
        />
      ) : (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
