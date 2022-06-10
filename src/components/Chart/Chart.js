import React from 'react';
import ChartBar from './ChartBar.js'
import './Chart.css'

function Chart (props) {
    return <div className="chart">
        {props.dps.map(dp => 
        <ChartBar 
        key={dp.label} 
        value={dp.value} 
        sum={props.sum}  
        label={dp.label}/> )
        }
    </div>

};

export default Chart;

