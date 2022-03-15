import React, { useState } from "react";

import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [year, setYear] = useState("2019");
  const selectYearHandler = (year) => {
    setYear(year);
  };
  const filteredExp = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === year;
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearSelect={selectYearHandler} />
      <ExpenseList items={filteredExp} />
    </Card>
  );
}

export default Expenses;
