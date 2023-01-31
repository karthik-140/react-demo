import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);


   return (
   <div className='chart'>
    {props.dataPoints.map(dataPoint => ( 
    <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalMaximum}  
    label={dataPoint.label}
    />) 
    )}
   </div>
   )
}

export default Chart;

/*
1.What do you think is the use of maxValue props?
--> maxValue is the maximum expense amount which fills full in the chart filter when max expense is added.

2.What will label prop contain?
--> label prop contains the months in an year i.e., jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec.

3.Why do we need key prop?
--> we need key prop to make sure that React identify every expense added as unique.

4.What is style used for?
--> style is used for filling the chart bar whenever new expense is added.

5.What datatype is the input of style ? Give an example too
--> barFillHeight is the datatype of the input of style.
*/