import React from 'react';

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';


function Expenses(props) {
  const classes = "expenses " + props.className;
  return (
    <Card className={classes}>
      <ExpenseItem
        name={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        name={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        name={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        name={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
