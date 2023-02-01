import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {
    return(
      <div className='new-expense'>
          <ExpenseFrom addExpense={props.addExpense}/>
      </div>
    );
};

export default NewExpense;
