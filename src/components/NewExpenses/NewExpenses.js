import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses =  (props) =>{
    return(
        <div className="new-expense">
           <ExpensesForm saveExpenseDataHandler={props.saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses;