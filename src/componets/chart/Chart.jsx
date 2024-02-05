import React  from "react";
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {name:"Ja",Total :1200},
    {name:"Feb",Total :1400},
    {name:"Mar",Total :130},
    {name:"Apr",Total :900},
    {name:"May",Total :3300},
    {name:"Jun",Total :300},
  ];
  
const Chart = ({aspect}) =>
{
   return(
    <div className="chart">
        <div className="title">Last 6 Months(Revenue)</div>
         <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
   )
} 

export default  Chart