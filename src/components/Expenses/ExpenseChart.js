import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = props => {
    let sum = 0;
    const DPS = [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Apr', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0}
    ];

    for (const expense of props.forchart){
        const expenseMonth = expense.date.getMonth();
        DPS[expenseMonth].value += expense.amount;
        sum += expense.amount;
    }

    return(
        <Chart dps={DPS} sum={sum}></Chart>
    )

}

export default ExpenseChart;