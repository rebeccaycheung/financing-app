import React from "react";

import { Doughnut } from 'react-chartjs-2';

const DonutChart: React.FC = () => {
    const chartData = {
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }],
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
    };

    return (
        <div>
            <Doughnut 
                data={chartData}
                height={300}
                width={300}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
};

export default DonutChart;
