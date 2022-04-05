import './MyBarChart.css'

import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ];
    return (
        <BarChart height={400} width={500} data={data}>
            <Bar dataKey={'revenue'} type="monotone"  stroke="#82ca9d" ></Bar>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={"investment"}></YAxis>
            <Tooltip />
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}

        </BarChart>
    );
};

export default MyBarChart;