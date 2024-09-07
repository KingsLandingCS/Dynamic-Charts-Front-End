"use client"; // This makes the component a Client Component

import dynamic from 'next/dynamic';
import React, { useState } from 'react';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CandlestickChart = () => {
    const [options] = useState({
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'Candlestick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    });

    const [series] = useState([
        {
            data: [
                {
                    x: new Date('2024-09-01'),
                    y: [6570, 6595, 6550, 6570]
                },
                {
                    x: new Date('2024-09-02'),
                    y: [6575, 6600, 6555, 6580]
                },
                {
                    x: new Date('2024-09-03'),
                    y: [6580, 6620, 6570, 6610]
                },
                {
                    x: new Date('2024-09-04'),
                    y: [6610, 6630, 6600, 6620]
                },
                {
                    x: new Date('2024-09-05'),
                    y: [6620, 6640, 6605, 6635]
                }
            ]
        }
    ]);

    return (
        <div>
            <Chart options={options} series={series} type="candlestick" height={350} />
        </div>
    );
};

export default CandlestickChart;
