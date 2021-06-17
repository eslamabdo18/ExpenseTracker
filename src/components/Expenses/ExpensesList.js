import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filterd.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Expenses</h2>
  }
  return (
    <ul className="expenses-list">
      {props.filterd.map((exp) => {
        return <ExpenseItem key={exp.id} expenses={exp} />;
      })}
    </ul>
  );
};

export default ExpensesList;
