"use client"; // Mark the component as a Client Component
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

// import ApexCharts from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Bar Chart
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

    // state management
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     // fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/barchart-data');
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
            <Chart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default BarChart;
