import React, { useEffect, useMemo, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=LDYE806XCM3E0OA6`)
    const data = await response.json()
    return data
}

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
        fetchStockData("aapl").then(data =>
            setStockData(data)
        )
    }, [])

    console.log(stockData);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    console.log(seriesData);
    return (
        <div className='w-1/2'>
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