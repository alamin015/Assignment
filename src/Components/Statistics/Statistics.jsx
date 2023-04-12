import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import style from './Statistics.module.css';


const data = [
    {
      name: 'A1',
      uv: 60,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A2',
      uv: 57,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A3',
      uv: 40,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A4',
      uv: 60,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A5',
      uv: 48,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A6',
      uv: 53,
      pv: 60,
      amt: 60,
    },
    {
      name: 'A7',
      uv: 60,
      pv: 60,
      amt: 60,
    },
  ];


const Statistics = () => {
  return (
    <div className='container'>
        <div className={style.myStyle}>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Statistics