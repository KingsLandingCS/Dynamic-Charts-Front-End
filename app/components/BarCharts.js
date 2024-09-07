"use client"; // Mark the component as a Client Component

import dynamic from 'next/dynamic';
import React, { useState } from 'react';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {
    const [options] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        title: {
            text: 'Bar Chart',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: {
                text: 'Value'
            }
        }
    });

    const [series] = useState([
        {
            name: 'Series 1',
            data: [44, 55, 41, 67, 22, 43, 21, 49, 35, 58, 31, 63]
        },
        {
            name: 'Series 2',
            data: [13, 23, 20, 8, 13, 27, 33, 12, 41, 14, 18, 21]
        }
    ]);

    return (
        <div>
            <Chart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default BarChart;
