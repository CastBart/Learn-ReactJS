import React from "react";

import "./NewExpense.css";
import FormExpense from "./FormExpense";

const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random(),
    };

    props.onAddNewExpense(data);
  };

  return (
    <div className="new-expense">
      <FormExpense onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
