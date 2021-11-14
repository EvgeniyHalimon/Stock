    import React from 'react';
    import ReactApexChart from 'react-apexcharts'

    function CandleStickChart({series}) {
        const options = {
            chart: {
                type: 'candlestick',
                width: 600
            },
            title: {
                text: 'Candle Stick Chart',
                align: 'left'
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              },
            legend : {
                show : false
            },
        }
        return (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <ReactApexChart
              options={options}
              series={series}
              type="candlestick"
              height={405}
            />
          </div>
        )
      }
      
      export default CandleStickChart;