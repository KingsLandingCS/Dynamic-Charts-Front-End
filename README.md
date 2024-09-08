# Chart Panel Workspace

## Overview

This project consists of a Next.js frontend and an Express.js backend that together create a dynamic dashboard displaying various types of charts. The frontend uses ApexCharts to visualize data received from the backend API.

## Project Structure

- `chart-panel-workspace/`
  - `chart-panel/` (Next.js frontend)
  - `chart-backend/` (Express.js backend)

## Frontend: Next.js

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. **Navigate to the `chart-panel` directory:**

   ```bash
   cd chart-panel


2. **Install dependencies:**

      npm install
    # or
    yarn install
    
3. **Create a .env.local file for environment variables (if needed):**

    touch .env.local
    Add any required environment variables for your setup.
    
4. **Start the Next.js development server:**

    npm run dev
    # or
    yarn dev
    
    **The frontend will be available at http://localhost:3000.**
    
    
#   Components
    
    BarChart.js: Displays a bar chart using data from the /api/barchart-data endpoint.
    CandlestickChart.js: Displays a candlestick chart using data from the /api/candlestick-data endpoint.
    LineChart.js: Displays a line chart using data from the /api/linechart-data endpoint.
    PieChart.js: Displays a pie chart using data from the /api/piechart-data endpoint.
    
    
   


### Backend: Express.js

1. **Prerequisites**

    Node.js (version 18 or higher recommended)
    npm or yarn
    
2. **Installation**

    **Navigate to the chart-backend directory:**
    
    npm install
    # or
    yarn install
    
3. **Start the Express.js server:**

    npm start
    # or
    yarn start

    **The backend will be available at http://localhost:5000.**

#    API Endpoints
     
    GET /api/barchart-data: Returns data for the bar chart.
    GET /api/candlestick-data: Returns data for the candlestick chart.
    GET /api/linechart-data: Returns data for the line chart.
    GET /api/piechart-data: Returns data for the pie chart.

##  CORS Configuration

    CORS is enabled to allow requests from the Next.js frontend. Modify CORS settings as needed for your environment.

### Development

    Ensure both the frontend and backend servers are running concurrently.
    Update frontend components to match changes in API data formats or requirements.
