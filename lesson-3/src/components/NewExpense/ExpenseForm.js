import './ExpenseForm.css';
import ReactDOM from "react-dom"
import {Fragment, useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";


const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);

    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });
    //
    // const userInputHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         title: event.target.value,
    //     })
    //     console.log(userInput);
    // }

    // const titleChangeHandler = (event) => {
    //     setTitle(event.target.value);
    // }
    //
    // const amountChangeHandler = (event) => {
    //     setAmount(event.target.value);
    // }
    //
    // const dateChangeHandler = (event) => {
    //     setDate(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(titleRef);
        setAmount(amountRef.current.value);
        setDate(dateRef.current.value);
        setTitle(titleRef.current.value);

        if(titleRef.current.value.trim().length === 0 || amount <= 0.02){
            setError({
                title: 'Invalid Input',
                message: 'Please enter correct data',
            });
            return
        }

        const expenseData = {
            title: titleRef.current.value,
            amount: amountRef.current.value,
            date: new Date(dateRef.current.value),
            id: Math.random().toString(),
        }


        props.addExpense(expenseData);
        dateRef.current.value = null;
        amountRef.current.value ='';
        titleRef.current.value ='';

    }

    const onConfirm = () => {
        setError(null);
    }

    return(
        <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirm}/>
                }
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' ref={titleRef}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.1' ref={amountRef}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2025-12-31' ref={dateRef}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        </Fragment>
    );
};

export default ExpenseForm;
