import './Dashboard.css'
import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';



const Dashboard = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'rgb(131, 219, 30)'}}>CHARTS</h1>

            <div className='charts'>
                <div>
                    <h2>MONTHLY REVENUE LINECHART</h2>
                    <MyLineChart></MyLineChart>
                </div>

                <div>
                    <h2>MONTHLY REVENUE BARCHART</h2>
                    <MyBarChart></MyBarChart>
                </div>



            </div>



        </div>
    );
};

export default Dashboard;