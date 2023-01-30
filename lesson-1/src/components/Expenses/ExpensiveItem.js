import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

const ExpensiveItem = (props) => {
    const [title, setTitle]  = useState(props.title);

    const expenseAmount = props.amount;

    const clickHandler = () => {
        setTitle('Updated!');
    };

    return (
       <div className="expense-item">
           <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price">${expenseAmount}</div>
           </div>
           <button onClick={clickHandler}>Change Title</button>
       </div>
    );
}

export default ExpensiveItem;
