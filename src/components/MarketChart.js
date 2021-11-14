import React from 'react';
import ReactApexChart from 'react-apexcharts'

function TimeseriesChart({series}) {

    const options =  {
        chart: {
            type: 'area',
            stacked: false,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
            dataLabels: {
                enabled: false
            },
            markers: {
            size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left'
            },
            fill: {
                colors: ['green'],
                type: 'gradient',
                gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
                },
            },
            yaxis: {
                labels: {
                formatter: function (val) {
                    return (val / 1).toFixed(0);
                },
                },
                title: {
                    text: 'Price'
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1).toFixed(2)
                    }
                }
            },
            colors:['green']
    }


    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={400} />
        </div>
    )
}

export default TimeseriesChart;