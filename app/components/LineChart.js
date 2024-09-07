"use client"; // Mark the component as a Client Component

import dynamic from 'next/dynamic';
import React, { useState } from 'react';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = () => {
    const [options] = useState({
        chart: {
            type: 'line',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        title: {
            text: 'Line Chart',
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
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 120, 110]
        },
        {
            name: 'Series 2',
            data: [20, 30, 45, 50, 49, 50, 65, 81, 105, 120, 100, 90]
        }
    ]);

    return (
        <div>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
