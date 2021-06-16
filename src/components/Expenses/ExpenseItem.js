import "./ExpenseItem.css";
import ExpenseDate from "./ExxpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log(props.expenses);

  return (
    <Card className="expense-item">
      <ExpenseDate expenses = {props.expenses} />
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
