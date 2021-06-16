import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((exp) => {
        return <ExpenseItem expenses={exp} />;
      })}
    </Card>
  );
};

export default Expenses;
