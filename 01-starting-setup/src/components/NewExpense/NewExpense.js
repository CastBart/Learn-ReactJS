import React from "react";

import "./NewExpense.css";
import FormExpense from "./FormExpense";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <FormExpense />
    </div>
  );
};

export default NewExpense;
