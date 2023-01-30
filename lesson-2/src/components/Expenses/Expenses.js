import ExpensiveItem from "./ExpensiveItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('All');
    const [expenses, setExpenses] = useState(props.expenses);

    const filterExpenses = (selectedYear) => {
        setFilteredYear(selectedYear);
        setExpenses(props.expenses.filter( (exp) => {
            if (selectedYear === 'All') {
                return true;
            } else {

                return  exp.date.getFullYear().toString() === selectedYear;
            }
        }))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterExpenses} selected={filteredYear}/>
            {expenses.map(item => (
                <ExpensiveItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
