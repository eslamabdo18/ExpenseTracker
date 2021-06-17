import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {

  const [yearFilter,setYearFilter] = useState('2020');
  const filterSelect = (year)=>{
    setYearFilter(year);
  }
  
  const filterd = props.expenses.filter(expense => expense.date.getFullYear() == yearFilter)
  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter ={yearFilter}  filterSelect = {filterSelect} />
      
      {filterd.map((exp) => {
        return filterd.isEmpty ? <ExpenseItem key={exp.id} expenses={exp} /> : <p>sorry no items</p>
      })}
    </Card>
  );
};

export default Expenses;
