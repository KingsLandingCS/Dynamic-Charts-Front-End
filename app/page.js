"use client";
import Head from 'next/head';
import CandlestickChart from './components/CandlestickChart';
import LineChart from './components/LineChart';
import BarCharts from './components/BarCharts';
import PieCharts from './components/PieCharts';

export default function Home() {
  return (
    <>
      <main>
        <div className="row">

          {/* Candlestick Chart */}
          <div className="col-md-12 my-5">
            <h1>Candlestick Chart Example</h1>
            <CandlestickChart />
          </div>

          {/* Line Chart */}
          <div className="col-md-4 ">
            <h1>Line Chart Example</h1>
            <LineChart />
          </div>

          {/* Bar Chart  */}
          <div className="col-md-4">
            <h1>Bar Chart Example</h1>
            <BarCharts />
          </div>

          {/* Pie Chart  */}
          <div className="col-md-4">
            <div><h1>Pie Chart Example</h1>
              <PieCharts />
            </div>
          </div>


        </div>

      </main>
    </>
  );
}
