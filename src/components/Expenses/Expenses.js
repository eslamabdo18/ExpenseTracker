import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const filterSelect = (year) => {
    setYearFilter(year);
  };
  const filterd = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={yearFilter}
          filterSelect={filterSelect}
        />
        <ExpensesChart expenses ={filterd}/>
        <ExpensesList filterd={filterd} />
      </Card>
    </li>
  );
};

export default Expenses;
