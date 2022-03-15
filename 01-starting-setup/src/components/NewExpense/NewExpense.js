import React, { useState } from "react";

import "./NewExpense.css";
import FormExpense from "./FormExpense";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseData = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random(),
    };

    props.onAddNewExpense(data);
    stopAddingExpenseHandler();
  };

  const addingExpenseHandler = () => {
    setAddingExpense(true);
  };
  const stopAddingExpenseHandler = () =>{
    setAddingExpense(false);
  }

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button onClick={addingExpenseHandler}>Add New Expense</button>
      )}
      {addingExpense && <FormExpense onSaveExpenseData={saveExpenseData} onCancel={stopAddingExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
