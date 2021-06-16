import "./ExxpenseDate.css"
const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.expenses.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">{props.expenses.date.getFullYear()}</div>
      <div className="expense-date__day">
        {props.expenses.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
     
    </div>
  );
};

export default ExpenseDate;