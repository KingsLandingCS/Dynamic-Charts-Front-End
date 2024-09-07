"use client"; // Mark the component as a Client Component

import dynamic from 'next/dynamic';
import React, { useState } from 'react';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
    const [options] = useState({
        chart: {
            type: 'pie',
            height: 350
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        title: {
            text: 'Pie Chart',
            align: 'left'
        }
    });

    const [series] = useState([44, 55, 13, 43, 22]); // Data for the pie chart

    return (
        <div>
            <Chart options={options} series={series} type="pie" height={350} />
        </div>
    );
};

export default PieChart;
