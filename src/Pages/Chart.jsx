import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function App() {
    const data = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
                data: [10, 3, 20, 10, 15],
                fill: false,
                borderColor: 'gray',
                pointBackgroundColor: [
                    'yellow', 'orange', 'green', 'orange', 'yellow'
                ],
                pointRadius: 10,
                pointHoverRadius: 10,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => `Value: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        elements: {
            point: {
                pointStyle: 'circle',
            },
        },
        animation: false,
    };

    const drawEmojis = (chart) => {
        const { ctx, data } = chart;
        const emojiList = ['😐', '😞', '😀', '😠', '😊'];

        data.datasets[0].data.forEach((value, index) => {
            const largest = Math.max(...data.datasets[0].data)
            const meta = chart.getDatasetMeta(0);
            const point = meta.data[index];
            ctx.save();
            ctx.font = '20px Arial';
            ctx.fillText(emojiList[index], point.x - 14, point.y + 8);
            ctx.fillText(value, point.x - 10, value === largest ? point.y + 30 : point.y - 20);
            ctx.restore();
        });
    };

    return (
        <>
            <div className='w-[50%] mx-auto mt-10'>
                <Line
                    data={data}
                    options={options}
                    plugins={[
                        {
                            id: 'custom-emoji-plugin',
                            afterDraw: drawEmojis,
                        },
                    ]}
                />
            </div>
            <div className='flex justify-center items-center gap-4' style={{ textAlign: 'center', marginTop: '20px' }}>
                <span role="img" aria-label="smiley" style={{ fontSize: '2em' }}>
                    😀
                </span>
                Exigent
            </div>
        </>
    );
};

