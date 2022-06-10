import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';

const NewExpense = ( props ) =>{
    const [show, setShow] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
    }

    const changeShow = () => setShow(!show);

    return(
        <div className="new-expense">
            {show && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onChangeShow={changeShow}/>}
            {!show && <button onClick={changeShow}>Add Expense</button>}
        </div>
    )
}


export default NewExpense;