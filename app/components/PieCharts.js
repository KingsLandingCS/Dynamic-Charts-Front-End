"use client"; // Mark the component as a Client Component

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
    const [options, setOptions] = useState({
        chart: {
            type: 'pie',
            height: 350
        },
        labels: [],
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

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/piechart-data');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setSeries(data.series);
                setOptions((prevOptions) => ({
                    ...prevOptions,
                    labels: data.labels
                }));
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
            <Chart options={options} series={series} type="pie" height={350} />
        </div>
    );
};

export default PieChart;
