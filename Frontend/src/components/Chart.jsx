import React, { useEffect, useMemo, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import da from "../data/query"

export const formatStockData = (stockData) => {

    const formattedData = []

    if (stockData['Weekly Adjusted Time Series']) {
        Object.entries(
            stockData['Weekly Adjusted Time Series']
        ).map(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }
    return formattedData
}

export const candleStickOptions = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

const Chart = () => {

    const [stockData, setStockData] = useState({})

    useEffect(() => {
        setStockData(da)
    }, [])

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    return (
        <div className='w-1/2 max-md:w-full max-md:h-1/2 '>
            <ReactApexChart
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={candleStickOptions}
            type="candlestick"
        />
        </div>
    );
}

export default Chart;