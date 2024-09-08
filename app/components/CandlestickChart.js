"use client"; // This makes the component a Client Component
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

// import ApexCharts from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Candlestick Chart
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

    // state management
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/candlestick-data');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setSeries(data.series);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error}</p>;

    return (
        <div>
            <Chart options={options} series={series} type="candlestick" height={350} />
        </div>
    );
};

export default CandlestickChart;
